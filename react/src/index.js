import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";
import Rotas from "./router/rotas";
import { CartProvider } from "./context/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CartProvider>
      <Rotas />
    </CartProvider>
  </>
);
