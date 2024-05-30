"use strict";
/*
    TYPE ANNOTATIONS E INFERENCE
    
    I - Annotations
    Com as type annotations podemos indicar qual será o tipo de dado de uma variável, fazemos isso inserindo dois pontos e em seguida o tipo desejado.

    II - Inference
    Observe o código abaixo e veja que é redundante anotar variáveis constantes ou que já possuam valores atribuidos, pois, ao atribuir um valor, o TypeScript já seta o tipo de dado que uma variável poderá receber, isso se chama Inferência.
    
    A inferência também é capaz de ler o código sem executá-lo; significa que o TS vai ler o código mas a atribuição ocorrerá no runtime. Verifique a variável "barato" abaixo, que pode ser boolean OU string...

    A maior necessidade de anotar é quando lidamos com parâmetros de funções ou variáveis com valor não atribuido. O retorno de uma função também pode ser inferido mas, caso queiramos alterar o tipo de dado a retornar, inserimos dois pontos e, depois a tipagem. Veja o exemplo da função "somar"
*/
const produto = 'Livro';
// const produto= 'Livro'; (string por inferência)
let preco = 200;
// let preco = 200; (number por inferência)
const carro = {
    marca: "Audi",
    portas: 5,
};
//  const carro = {
//      marca: "Audi",
//      portas: 5,
//  };
// (variável do tipo objeto, com campos do tipo string e number, respectivamente, por inferência)
let barato = preco < 300 ? true : 'Produto caro';
// const barato = preco < 300 ? true : 'Produto caro'; (boolean ou string por inferência)
function somar(a, b) {
    // não seria necessário estipular o tipo string, o próprio return com aspas já indica a tipagem
    return `${a} + ${b} = ${a + b}`;
}
console.log(somar(4, 2));
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function formatarPreco(produto) {
    // o parâmetro recebido será um objeto e terá as propriedades "nome" e "preco", ambas do tipo string
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = formatarPreco(nintendo);
console.log(produtoNovo);
