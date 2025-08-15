import "./style.css"

// =============== Types ===============
type TRating = {
  rate: number
  count: number
}

type TProduct = {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: TRating
  title: string
}

type TCartItem = {
  product: TProduct
  quantity: number
}

type TSortKey = "relevance" | "price-up" | "price-down" | "rating-down"

type TState = {
  products: TProduct[]
  filtered: TProduct[]
  categories: string[]
  query: string
  category: string
  sort: TSortKey
  selected: TProduct | null
  cart: TCartItem[]
}

// =============== Consts ===============
const PL = <type extends Element = Element>(selector: string) => document.querySelector<type>(selector)!

const PH = {
  products: PL("#products") as HTMLDivElement,
  empty: PL("#empty") as HTMLDivElement,
  loader: PL("#loader") as HTMLDivElement,
  message: PL("#message") as HTMLDivElement,
  // header
  category: PL("#category_buttons") as HTMLElement,
  sort: PL("#sort_btn") as HTMLDivElement,
  searchToggle: PL("#search_toggle") as HTMLButtonElement,
  searchbar: PL("#searchbar") as HTMLDivElement,
  search: PL("#search") as HTMLInputElement,
  cartBtn: PL("#cart_btn") as HTMLButtonElement,
  cartCount: PL("#cart_count") as HTMLSpanElement,
  p_dlg: PL("#product_dialog") as HTMLDialogElement,
  p_dlgClose: PL("#dialog_close") as HTMLButtonElement,
  p_dlgImage: PL("#product_img") as HTMLImageElement,
  p_dlgTitle: PL("#product_title") as HTMLHeadingElement,
  p_dlgCategory: PL("#product_category") as HTMLParagraphElement,
  p_dlgDesc: PL("#product_desc") as HTMLParagraphElement,
  p_dlgPrice: PL("#product_price") as HTMLParagraphElement,
  p_dlgRating: PL("#product_rating") as HTMLDivElement,
  p_dlgQty: PL("#product_quantity") as HTMLInputElement,
  p_dlgAdd: PL("#product_add") as HTMLButtonElement,
  // cart dialog
  cartDlg: PL("#cart_dialog") as HTMLDialogElement,
  cartClose: PL("#cart_close") as HTMLButtonElement,
  cartItems: PL("#cart_items") as HTMLDivElement,
  cartTotal: PL("#cart_total") as HTMLSpanElement,
  cartClear: PL("#cart_clear") as HTMLButtonElement,
  checkout: PL("#checkout") as HTMLButtonElement,
  itemsTotal: document.querySelector<HTMLSpanElement>(".items_total"),
} as const

const nullState: TState = {
  products: [],
  filtered: [],
  categories: [],
  query: "",
  category: "",
  sort: "relevance",
  selected: null,
  cart: loadCart(),
}

// =============== APIInit ===============

const API_PRODUCTS = "https://fakestoreapi.com/products"

function APIInit(): void {
  PH.loader.hidden = false
  fetch(API_PRODUCTS)
    .then((res: Response) => {
      if (!res.ok) {
        throw new Error("Products could not be loaded")
      }
      return res.json()
    })
    .then((products: TProduct[]) => {
      nullState.products = products
      nullState.categories = Array.from(new Set(products.map((product) => product.category)))
      renderCategoryButtons(nullState.categories)
      renderSortButtons()
      applyFilters()
      updateCartCount()
      hydrateCartFromState()
    })
    .catch((error: Error) => {
      console.error(error)
      PH.products.innerHTML = ""
      PH.empty.hidden = false
      message("Error loading data.", 1500)
    })
    .finally(() => {
      PH.loader.hidden = true
      bindEvents()
    })
}
APIInit()

// =============== Storage / Helpers ===============

function titleCase(string: string): string {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ""
}

function formatPrice(eur: number): string {
  return eur.toFixed(2) + " €"
}

function message(msg: string, duration = 1500): void {
  PH.message.textContent = msg
  PH.message.classList.add("show")
  setTimeout(() => PH.message.classList.remove("show"), duration)
}

function saveCart(items: TCartItem[]): void {
  localStorage.setItem("cart", JSON.stringify(items.map((i) => ({ id: i.product.id, quantity: i.quantity }))))
}

function loadCart(): TCartItem[] {
  try {
    const s = localStorage.getItem("cart")
    if (!s) return []
    const parsed = JSON.parse(s) as Array<{ id: number; quantity?: number }>
    if (!Array.isArray(parsed)) return []
    return parsed.flatMap((p) => {
      if (typeof p?.id !== "number") return []
      const gty = typeof p.quantity === "number" ? p.quantity : 1
      return [{ product: { id: p.id } as TProduct, quantity: gty }]
    })
  } catch {
    return []
  }
}

function updateCartCount(): void {
  const count = nullState.cart.reduce((sum, item) => sum + item.quantity, 0)
  PH.cartCount.textContent = count.toString()
}

function debounce<T extends (...args: any[]) => void>(fn: T, d = 300) {
  let t: number | undefined
  return (...a: Parameters<T>) => {
    window.clearTimeout(t)
    t = window.setTimeout(() => fn(...a), d)
  }
}

// ================== Category Buttons ==================
const catButtonMap = new Map<HTMLButtonElement, string>() // btn -> category

function renderCategoryButtons(categories: string[]): void {
  PH.category.innerHTML = ""
  const makeBtn = (label: string, cat: string) => {
    const btn = document.createElement("button")
    btn.className = "cat_btn"
    btn.textContent = label
    if (nullState.category === cat) btn.classList.add("active")
    btn.addEventListener("click", () => {
      nullState.category = cat
      updateCategoryActive()
      applyFilters()
    })
    catButtonMap.set(btn, cat)
    PH.category.appendChild(btn)
  }
  makeBtn("All", "")
  categories.forEach((cat) => makeBtn(titleCase(cat), cat))
}

function updateCategoryActive(): void {
  catButtonMap.forEach((cat, btn) => btn.classList.toggle("active", cat === nullState.category))
}

// ================== Sort Buttons==================
const sorts: Array<{ key: Exclude<TSortKey, "relevance">; label: string }> = [
  { key: "price-up", label: "Price ↑" },
  { key: "price-down", label: "Price ↓" },
  { key: "rating-down", label: "Rating ↓" },
]

const sortBtnMap = new Map<HTMLButtonElement, TSortKey>()

function renderSortButtons(): void {
  PH.sort.innerHTML = ""
  sorts.forEach((sort) => {
    const btn = document.createElement("button")
    btn.className = "sortbtn"
    btn.textContent = sort.label
    btn.addEventListener("click", () => {
      const current = nullState.sort
      nullState.sort = current === sort.key ? "relevance" : sort.key
      updateSortActive()
      applyFilters()
    })
    sortBtnMap.set(btn, sort.key)
    PH.sort.appendChild(btn)
  })
  updateSortActive()
}

function updateSortActive(): void {
  sortBtnMap.forEach((key, btn) => btn.classList.toggle("active", key === nullState.sort))
}

// ================== Product Cards ==================
function productCard(product: TProduct): HTMLElement {
  const card = document.createElement("article")
  card.className = "card"
  const rate = Math.round(product.rating?.rate ?? 0)
  const stars = "★".repeat(rate) + "☆".repeat(5 - rate)
  card.innerHTML = `
    <div class="media"><img src="${product.image}" alt="${product.title}"></div>
    <div class="content">
      <div>
        <h3 class="h3" title="${product.title}">${product.title}</h3>
        <p class="muted">${product.category}</p>
      </div>
      <div></div>
      <div class="bottom">
        <div class="price_row">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="rating">${stars}</span>
        </div>
        <div class="actions">
          <button class="secondary">Details</button>
          <button class="primary">Add to Cart</button>
        </div>
      </div>
    </div>`

  const btnDetails = card.querySelector<HTMLButtonElement>(".secondary")!
  const btnAdd = card.querySelector<HTMLButtonElement>(".primary")!
  btnDetails.addEventListener("click", () => openProductDialog(product))
  btnAdd.addEventListener("click", () => addToCart(product, 1))

  return card
}

function renderList(list: TProduct[]): void {
  PH.products.innerHTML = ""
  list.forEach((product) => PH.products.appendChild(productCard(product)))
  PH.empty.hidden = list.length > 0
}

// ================== Filter & Sort ==================
function applyFilters(): void {
  let list = nullState.products.slice()
  const query = nullState.query.trim().toLowerCase()

  if (query) {
    list = list.filter(
      (product) => product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
    )
  }
  if (nullState.category) {
    list = list.filter((product) => product.category === nullState.category)
  }

  switch (nullState.sort) {
    case "price-up":
      list.sort((a, b) => a.price - b.price)
      break
    case "price-down":
      list.sort((a, b) => b.price - a.price)
      break
    case "rating-down":
      list.sort((a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0))
      break
    default:
      // relevance
      break
  }

  nullState.filtered = list
  renderList(list)
}

// ================== Product Dialog ==================
function openProductDialog(product: TProduct): void {
  nullState.selected = product
  PH.p_dlgImage.src = product.image
  PH.p_dlgImage.alt = product.title
  PH.p_dlgTitle.textContent = product.title
  PH.p_dlgCategory.textContent = titleCase(product.category)
  PH.p_dlgDesc.textContent = product.description
  PH.p_dlgPrice.textContent = formatPrice(product.price)
  const rate = product.rating?.rate ?? 0
  const count = product.rating?.count ?? 0
  PH.p_dlgRating.textContent = `★ ${rate} (${count})`
  PH.p_dlgQty.value = "1"
  PH.p_dlg.showModal()
}

function closeProductDialog(): void {
  if (PH.p_dlg.open) PH.p_dlg.close()
  nullState.selected = null
}

// ================== Cart ==================
function hydrateCartFromState(): void {
  nullState.cart.forEach((item) => {
    if (!item.product.title) {
      const found = nullState.products.find((product) => product.id === item.product.id)
      if (found) item.product = found
    }
  })
}

function addToCart(product: TProduct, quantity: number): void {
  const found = nullState.cart.find((item) => item.product.id === product.id)
  if (found) found.quantity += quantity
  else nullState.cart.push({ product, quantity })
  saveCart(nullState.cart)
  updateCartCount()
  message("Added to cart.", 1500)
}

function removeFromCart(id: number): void {
  nullState.cart = nullState.cart.filter((item) => item.product.id !== id)
  saveCart(nullState.cart)
  updateCartCount()
  renderCart()
}

function changeQty(id: number, qty: number): void {
  const it = nullState.cart.find((i) => i.product.id === id)
  if (!it) return
  it.quantity = Math.max(1, qty)
  saveCart(nullState.cart)
  updateCartCount()
  renderCartTotals()
  renderCart()
}

function renderCart(): void {
  PH.cartItems.innerHTML = ""
  nullState.cart.forEach((it) => {
    const row = document.createElement("div")
    row.className = "cart_items"

    const imgWrap = document.createElement("div")
    imgWrap.className = "imgwrap"

    const badge = document.createElement("span")
    badge.className = "qty_badge"
    badge.textContent = it.quantity.toString()

    const img = document.createElement("img")
    img.src = it.product.image
    img.alt = it.product.title

    imgWrap.append(img, badge)

    const info = document.createElement("div")
    info.innerHTML = `<h4>${it.product.title}</h4>
      <div class="muted">${formatPrice(it.product.price)} · ${titleCase(it.product.category)}</div>`

    const qty = document.createElement("div")
    qty.className = "qty"
    const minus = document.createElement("button")
    minus.className = "icon_btn"
    minus.textContent = "−"
    const input = document.createElement("input")
    input.className = "qty_input"
    input.type = "number"
    input.min = "1"
    input.value = String(it.quantity)
    const plus = document.createElement("button")
    plus.className = "icon_btn"
    plus.textContent = "+"
    const del = document.createElement("button")
    del.className = "icon_btn"
    del.title = "Remove"
    del.textContent = "🗑️"
    qty.append(minus, input, plus, del)

    row.append(imgWrap, info, qty)
    PH.cartItems.appendChild(row)

    minus.addEventListener("click", () => changeQty(it.product.id, Number(input.value) - 1))
    plus.addEventListener("click", () => changeQty(it.product.id, Number(input.value) + 1))
    del.addEventListener("click", () => removeFromCart(it.product.id))
    input.addEventListener("change", () => changeQty(it.product.id, Number(input.value)))
  })
  renderCartTotals()
}

function renderCartTotals(): void {
  const total = nullState.cart.reduce((sum, it) => sum + (it.product.price || 0) * it.quantity, 0)
  PH.cartTotal.textContent = formatPrice(total)
  if (PH.itemsTotal) {
    PH.itemsTotal.textContent = `(${nullState.cart.length} ${nullState.cart.length === 1 ? "item" : "items"})`
  }
}

// ================== Events ==================

function bindEvents(): void {
  // Search input
  PH.search.addEventListener(
    "input",
    debounce(() => {
      nullState.query = PH.search.value
      applyFilters()
    }, 250)
  )

  // "/" Shortcut
  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault()
      PH.searchbar.removeAttribute("hidden")
      PH.search.focus()
    }
  })

  // Toggle searchbar
  PH.searchToggle.addEventListener("click", () => {
    const hidden = PH.searchbar.hasAttribute("hidden")
    if (hidden) {
      PH.searchbar.removeAttribute("hidden")
      PH.search.focus()
    } else PH.searchbar.setAttribute("hidden", "")
  })

  // Product dialog
  PH.p_dlgClose.addEventListener("click", closeProductDialog)
  PH.p_dlgAdd.addEventListener("click", () => {
    if (!nullState.selected) return
    const qty = Math.max(1, Number(PH.p_dlgQty.value) || 1)
    addToCart(nullState.selected, qty)
    closeProductDialog()
  })

  // Cart dialog
  PH.cartBtn.addEventListener("click", () => {
    hydrateCartFromState()
    renderCart()
    PH.cartDlg.showModal()
  })
  PH.cartClose.addEventListener("click", () => PH.cartDlg.close())
  PH.cartClear.addEventListener("click", () => {
    nullState.cart = []
    saveCart(nullState.cart)
    updateCartCount()
    renderCart()
  })
  PH.checkout.addEventListener("click", () => {
    message("You can simply send me the amount via PayPal. paypal.me/Gitpaid (Checkout Demo)", 5000)
  })
}
