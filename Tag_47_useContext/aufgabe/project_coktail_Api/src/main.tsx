import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { CocktailsProvider } from "./context/CocktailsContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CocktailsProvider>
      <App />
    </CocktailsProvider>
  </StrictMode>
)
