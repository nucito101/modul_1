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
  products: PL<HTMLDivElement>("#products"),
  empty: PL<HTMLDivElement>("#empty"),
  loader: PL<HTMLDivElement>("#loader"),
  search: PL<HTMLInputElement>("#search"),
  sort: PL<HTMLSelectElement>("#sort"),
  cartBtn: PL<HTMLButtonElement>("#cart_btn"),
  cartCount: PL<HTMLSpanElement>("#cart_count"),
  category: PL<HTMLSelectElement>("#category"),
  message: PL<HTMLDivElement>("#message"),
  p_dlg: PL<HTMLDialogElement>("#product_dialog"),
  p_dlgClose: PL<HTMLButtonElement>("#dialog_close"),
  p_dlgImage: PL<HTMLImageElement>("#product_img"),
  p_dlgTitle: PL<HTMLHeadingElement>("#product_title"),
  p_dlgCategory: PL<HTMLParagraphElement>("#product_category"),
  p_dlgDesc: PL<HTMLParagraphElement>("#product_desc"),
  p_dlgPrice: PL<HTMLParagraphElement>("#product_price"),
  p_dlgRating: PL<HTMLDivElement>("#product_rating"),
  p_dlgQty: PL<HTMLInputElement>("#product_quantity"),
  p_dlgAdd: PL<HTMLButtonElement>("#product_add"),
  cartDlg: PL<HTMLDialogElement>("#cart_dialog"),
  cartClose: PL<HTMLButtonElement>("#cart_close"),
  cartItems: PL<HTMLDivElement>("#cart_items"),
  cartTotal: PL<HTMLSpanElement>("#cart_total"),
  cartClear: PL<HTMLButtonElement>("#cart_clear"),
  checkout: PL<HTMLButtonElement>("#checkout"),
  itemsTotal: PL<HTMLSpanElement>(".items_total"),
}

const nullState: TState = {
  products: [],
  filtered: [],
  categories: [],
  query: "",
  category: "",
  sort: "relevance",
  selected: null,
  cart: [],
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
      console.log(products)
      nullState.products = products
      nullState.categories = Array.from(new Set(products.map((p) => p.category)))
      renderCategories()
      applyFilters()
      // updateCartCount()
      // hydrateCartProductsFromState()
    })
    .catch((error: Error) => {
      console.error(error)
      PH.products.innerHTML = ""
      PH.empty.hidden = false
    })
    .finally(() => {
      PH.loader.hidden = true
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

function message(msg: string): void {
  PH.message.textContent = msg
  PH.message.classList.add("show")
  setTimeout(() => PH.message.classList.remove("show"), 1500)
}

function saveCart(items: TCartItem[]): void {
  localStorage.setItem("cart", JSON.stringify(items.map((item) => ({ id: item.product.id, qty: item.quantity }))))
}

function loadCart(): TCartItem[] {
  const storedCart = localStorage.getItem("cart")
  if (!storedCart) return []

  const parsed: { id: number; quantity: number }[] = JSON.parse(storedCart)
  return parsed.map((product) => ({
    product: { id: product.id } as TProduct,
    quantity: product.quantity,
  }))
}

function updateCartCount(): void {
  const count = nullState.cart.reduce((sum, item) => sum + item.quantity, 0)
  PH.cartCount.textContent = count.toString()
}

// =============== Products ===============

function productCard(product: TProduct): string {
  const rate = Math.round(product.rating?.rate ?? 0)
  const stars = "★".repeat(rate) + "☆".repeat(5 - rate)
  return `
    <article class="card" id="${product.id}">
      <div class="media"><img src="${product.image}" alt="${product.title}" /></div>
      <div class="content">
        <div class="container">
          <h3 title="${product.title}">${product.title}</h3>
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
      </div>
    </article>`
}

function renderList(list: TProduct[]): void {
  PH.products.innerHTML = list.map(productCard).join("")
  PH.empty.hidden = list.length > 0
}

function renderCategories(): void {
  PH.category.innerHTML =
    `<option value="">All Categories</option>` +
    nullState.categories.map((category) => `<option value="${category}">${titleCase(category)}</option>`).join("")
}

function applyFilters(): void {
  let list = nullState.products.slice()

  const query = nullState.query.trim().toLowerCase()
  if (query) {
    list = list.filter(
      (product) => product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
    )
  }

  if (nullState.categories) {
    list = list.filter((product) => product.category.toLowerCase().includes(query))
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

// =============== Dialoge ===============

function openProductDlg(id: number): void {
  const product = nullState.products.find((item) => item.id === id)
  if (!product) {
    message("Product not found")
    return
  }

  nullState.selected = product
  PH.p_dlgImage.src = product.image
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

function closeProductDlg(): void {
  if (PH.p_dlg.open) {
    PH.p_dlg.close()
    nullState.selected = null
  }
}

// =============== Cart ===============
function cartProductsFromState(): void {
  nullState.cart.forEach((item) => {
    if (!item.product.title) {
      const found = nullState.products.find((product) => product.id === item.product.id)
      if (found) {
        item.product = found
      }
    }
  })
}

function addToCart(product: TProduct, quantity: number): void {
  const found = nullState.cart.find((item) => item.product.id === product.id)

  if (found) {
    found.quantity += quantity
  } else {
    nullState.cart.push({ product, quantity })
    saveCart(nullState.cart)
    updateCartCount()
    message("Add to Shopping Cart")
  }
}

function removeFromCart(id: number): void {
  nullState.cart = nullState.cart.filter((item) => item.product.id !== id)
  saveCart(nullState.cart)
  updateCartCount()
  renderCart()
}

function changeQty(id: number, quantity: number): void {
  const items = nullState.cart.find((item) => item.product.id === id)
  if (!items) {
    return
  }
  items.quantity = Math.max(1, quantity)
  saveCart(nullState.cart)
  updateCartCount()
  renderCartTotal()
}

function renderCart(): void {
  PH.cartItems.innerHTML = nullState.cart
    .map(
      (item) => `
    <div class="cart-item" id="${item.product.id}">
      <img src="${item.product.image}" alt="${item.product.title}"/>
      <div>
        <h4>${item.product.title}</h4>
        <div class="muted">${formatPrice(item.product.price)} · ${titleCase(item.product.category)}</div>
      </div>
      <div class="qty">
        <button class="icon_btn">−</button>
        <input class="qty_input" type="number" min="1" value="${item.quantity}" />
        <button class="icon_btn">+</button>
        <button class="icon_btn">🗑️</button>
      </div>
    </div>
  `
    )
    .join("")
  renderCartTotal()
  bindCartEvents()
}

function renderCartTotal(): void {
  const total = nullState.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  PH.cartTotal.textContent = formatPrice(total)
}

// =============== Event ===============

function bindCardClick(): void {
  document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const id = Number(card.getAttribute("id"))
      const btn = (e.target as Element | null)?.closest("button") as HTMLButtonElement | null

      if (!btn) {
        return
      }
      if (btn.dataset.actions === "details") openProductDlg(id)
      if (btn.dataset.action === "add") {
        const product = nullState.products.find((x) => x.id === id)
        if (product) addToCart(product, 1)
      }
    })
  })
}
