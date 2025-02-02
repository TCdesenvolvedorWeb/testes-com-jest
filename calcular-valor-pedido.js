const meuPedido = {
  itens: [
    { nome: "Poção de cura", valor: 2000 },
    { nome: "Espada de prata", valor: 200 },
    { nome: "Entrega", valor: 40, entrega: true },
  ],
};

const caulcularValorPedido = (pedido) => {
  const valorProdutos = pedido.itens.filter((item) => !item.entrega)
  .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

  const entrega = pedido.itens.filter((item) => item.entrega);

  return valorProdutos > 500 ? valorProdutos : valorProdutos + entrega[0].valor;
};

module.exports = caulcularValorPedido;
