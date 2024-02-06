const produtos = [
  {
    id: 1,
    nome: "Spicy Burguer",
    descricao: "Hamburguer de 250g, queijo, tomate, cebola e alface",
    preco: 24.9,
    foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
  },
  {
    id: 2,
    nome: "Sanduba",
    descricao: "Hamburguer de 250g, queijo, tomate, cebola e alface",
    preco: 22,
    foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
  },
  {
    id: 3,
    nome: "Super Burguer",
    descricao: "Hamburguer de 250g, queijo, tomate, cebola e alface",
    preco: 29.9,
    foto: "https://jornadajs-food.s3.amazonaws.com/super.png",
  },
  {
    id: 4,
    nome: "Mega",
    descricao: "Hamburguer de 250g, queijo, tomate, cebola e alface",
    preco: 34.9,
    foto: "https://jornadajs-food.s3.amazonaws.com/mega.png",
  },
  {
    id: 5,
    nome: "Penne",
    descricao: "Hamburguer de 250g, queijo, tomate, cebola e alface",
    preco: 27.0,
    foto: "https://jornadajs-food.s3.amazonaws.com/penne.png",
  },
  {
    id: 6,
    nome: "Fritas",
    descricao: "Hamburguer de 250g, queijo, tomate, cebola e alface",
    preco: 14.9,
    foto: "https://jornadajs-food.s3.amazonaws.com/fritas.png",
  },
  {
    id: 7,
    nome: "Coca-Cola Lata",
    descricao: "Hamburguer de 250g, queijo, tomate, cebola e alface",
    preco: 14.9,
    foto: "https://jornadajs-food.s3.amazonaws.com/coca.png",
  },
];

const pedidos = [
  { id_pedido: 541561, dt: "14/01/20024", total: 150.3 },
  { id_pedido: 541562, dt: "15/01/20024", total: 80.0 },
  { id_pedido: 541563, dt: "16/01/20024", total: 60.5 },
  { id_pedido: 541564, dt: "17/01/20024", total: 170.3 },
  { id_pedido: 541565, dt: "18/01/20024", total: 170.3 },
  { id_pedido: 541566, dt: "19/01/20024", total: 150.3 },
  { id_pedido: 541567, dt: "20/01/20024", total: 110.3 },
  { id_pedido: 541568, dt: "21/01/20024", total: 120.3 },
];

const carrinho = [
  {
    id: 1,
    nome: "X-Tudo",
    preco: "20.00",
    foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
    qtd: 2,
  },
  {
    id: 2,
    nome: "Sanduba",
    preco: "15.00",
    foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
    qtd: 2,
  },
];

export { produtos, pedidos, carrinho };
