"use strict";
// ========================= INTERSECTION TYPES (&) =========================
// Intersection Types têm um funcionamento semelhante ao operador "extends" usado em interfaces.
// Eles permitem combinar tipos, ou seja, criar um novo tipo que tenha todas as propriedades
// dos tipos envolvidos na interseção.
function handleProdutoCarro(dados) {
    console.log(`Portas: ${dados.portas}; Rodas: ${dados.rodas}; Preço: ${dados.preco}`);
}
// O objeto precisa ter todas as propriedades de `Produto` e `Carro`.
handleProdutoCarro({ portas: 5, rodas: 4, preco: 300000 });
const carroComPreco = {
    portas: 4,
    rodas: 4,
    preco: 50000,
};
console.log(carroComPreco);
function handleInterfaceCarro(carro) {
    console.log(`Portas: ${carro.portas}; Rodas: ${carro.rodas}; Preço: ${carro.preco}`);
}
const meuCarro = {
    portas: 4,
    rodas: 4,
    preco: 70000,
};
handleInterfaceCarro(meuCarro);
// ========================= EXEMPLO DE CASO DE USO REAL =========================
// Um uso comum de adicionar propriedades a interfaces é quando precisamos estender
// objetos globais, como o objeto `window`.
// O TypeScript mostrará um erro se tentarmos adicionar propriedades diretamente
// sem antes estender a interface `Window`.
// ❌ ERRO: A propriedade 'teste' não existe no tipo 'Window & typeof globalThis'.
window.teste = "teste";
window.userId = 200;
console.log(window.userId); // 200
