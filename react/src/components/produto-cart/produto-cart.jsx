import { useContext } from "react";
import "./produto-cart.css";
import { CartContext } from "../../context/cart-context";

function ProdutoCart(props) {
  const { AddItemCart, RemoveItemCart } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddItemCart(item);
  }

  function RemoveItem() {
    RemoveItemCart(props.id);
  }

  return (
    <div className="produto-cart-box">
      <img src={props.foto} alt="" />
      <div>
        <p className="produto-cart-nome">{props.nome}</p>
        <p className="produto-cart-valor">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>
        <div className="footer-produto-cart">
          <div>
            <button onClick={RemoveItem} className="footer-produto-btn">
              -
            </button>
            <span className="footer-produto-qtd">{props.qtd}</span>
            <button onClick={AddItem} className="footer-produto-btn">
              +
            </button>
          </div>
          <p className="footer-produto-preco">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.preco * props.qtd)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProdutoCart;
