const caulcularValorPedido = require("./calcular-valor-pedido");


it("não deve cobrar valor de frete quando o valor dos pordutos for superior a 500", () => {
  // AAA - SÃO 3 PASSOS DE CRIAÇÃO DE UM TESTE

  //ARRANGE - ARRUMAR - O QUE PRECISAMOS PASSAR PARA A FUNÇÃO
  const meuPedido = {
    itens: [
      { nome: "Poção de cura", valor: 2000 },
      // { nome: "Espada de prata", valor: 200 },
      { nome: "Entrega", valor: 40, entrega: true },
    ],
  };
  
  // ACT - AÇÃO -  A AÇÃO QUE QUEREMOS TESTAR, NO CASO, INICIAREMOS A FUNÇÃO
  const resultado = caulcularValorPedido(meuPedido);

  // ASSERT - ASSERÇÃO - O RESULTADO ESPERADO
  expect(resultado).toBe(2000)
});

it('Deve cobrar o valor de frete quando o valor dos produtos for menor do que 500' , () => {

  const meuPedido = {
    itens: [
      // { nome: "Poção de cura", valor: 2000 },
      { nome: "Espada de prata", valor: 200 },
      { nome: "Entrega", valor: 40, entrega: true },
    ],
  };

  const resultado = caulcularValorPedido(meuPedido);

  expect(resultado).toBe(240)
})

it('Deve cobrar o valor do frete caso o valor seja EXATAMENTE 500' , () => {
  const meuPedido = {
    itens: [
      // { nome: "Poção de cura", valor: 2000 },
      { nome: "Espada de prata", valor: 200 },
      {nome: 'Arco encantado' , valor: 250},
      { nome: '50 flechas' , valor: 50 },
      { nome: "Entrega", valor: 40, entrega: true },
    ],
  };

  const resultado = caulcularValorPedido(meuPedido);

  expect(resultado).toBe(540);

})
