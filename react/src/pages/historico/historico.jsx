import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import "./historico.css";
import api from "../../services/api.js";

function Historico() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api
      .get("/pedidos")
      .then((response) => {
        setPedidos(response.data);
      })
      .catch((err) => {
        alert("Erro ao carregar historico");
      });
  }, []);

  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Historico de Pedidos</h1>
        </div>
        <div className="box-pedido">
          <table className="table">
            {pedidos.map(function (ped) {
              return (
                <tr key={ped.id_pedido}>
                  <td>
                    <strong>Pedido {ped.id_pedido}</strong>
                  </td>
                  <td className="text-light">{ped.dt}</td>
                  <td className="text-red">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(ped.total)}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default Historico;
