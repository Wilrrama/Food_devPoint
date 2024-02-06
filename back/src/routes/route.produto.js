import { Router } from "express";
import { db } from "../config/database.js";

const routeProduto = Router();

routeProduto.get("/produtos", function (req, res) {
  db.all("select * from produto", [], function (err, rows) {
    if (err) {
      return res.status(500).send("Ocorreu um erro:" + err.message);
    } else res.status(200).json(rows);
  });
});

export default routeProduto;
