import { useContext, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./checkout.css";
import { CartContext } from "../../context/cart-context";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { totalCart, cartItems, setCartItems, setTotalCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  function FinalizarPedido() {
    let produtos = [];

    for (var prod of cartItems) {
      produtos.push({
        id_produto: prod.id,
        qtd: prod.qtd,
        vl_unitario: prod.preco,
        vl_total: prod.preco * prod.qtd,
      });
    }

    const params = {
      id_usuario: 1,
      nome,
      email,
      fone,
      endereco,
      bairro,
      cidade,
      uf,
      cep,
      total: totalCart,
      itens: produtos,
    };

    api
      .post("/pedidos", params)
      .then((resp) => {
        setCartItems([]);
        setTotalCart(0);
        navigate("/historico");
      })
      .catch((err) => {
        alert("erro ao enviar pedido");
        console.log("Erro");
      });
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="titulo text-center">
          <h1>Finalizar Pedido</h1>
        </div>

        <div className="col-3">
          <div className="box-checkout">
            <h3>Dados Pessoais</h3>
            <div className="input-group">
              <p>Nome Completo</p>
              <input type="text" onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="input-group">
              <p>Email</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <p>Telefone Contato</p>
              <input type="text" onChange={(e) => setFone(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="box-checkout">
            <h3>Entrega</h3>
            <div className="input-group">
              <p>Cep</p>
              <input
                type="text"
                id="cep"
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <div className="input-group">
              <p>Endereço</p>
              <input
                type="text"
                id="endereco"
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div className="input-group">
              <p>Bairro</p>
              <input
                type="text"
                id="bairro"
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className="input-group">
              <p>Cidade</p>
              <input
                type="text"
                id="cidade"
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div className="input-group">
              <p>Estado</p>
              <select id="uf" onChange={(e) => setUf(e.target.value)}>
                <option value="RJ">Rio Janeiro</option>
                <option value="SP">São Paulo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="box-checkout">
            <h3>Valores</h3>
            <div className="checkout-valores">
              <span>Total</span>

              <span>
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalCart)}
                </strong>
              </span>
            </div>
            <div className="checkout-button">
              <button onClick={FinalizarPedido} className="btn-checkout">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
