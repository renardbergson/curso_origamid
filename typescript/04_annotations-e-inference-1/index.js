"use strict";
// =================== ANNOTATION (ANOTAÇÃO DE TIPOS) ===================
// Com TypeScript, podemos definir explicitamente o tipo de uma variável usando anotações (:tipo)
// Isso garante que a variável só poderá armazenar valores desse tipo
const produto = "Livro"; // A variável "produto" só pode armazenar strings
let preco = 200; // A variável "preco" só pode armazenar números
// Exemplo de um objeto com anotações de tipo para suas propriedades
const carro = {
    marca: "Audi",
    portas: 5,
};
// Nota sobre "Interface":
// No exemplo do objeto "carro", estamos modelando o formato e os tipos das propriedades diretamente na anotação.
// Isso é semelhante ao conceito de **Interface** no TypeScript, que permite definir a estrutura de um objeto.
// Neste caso, a "interface" está embutida na própria declaração do objeto, mas também poderia ser criada de forma isolada.
// =================== INFERENCE (INFERÊNCIA DE TIPOS) ===================
// O TypeScript pode inferir automaticamente o tipo de uma variável com base no valor que ela recebe.
// Isso significa que nem sempre é necessário fazer uma anotação explícita.
let pessoa = "Renard"; // TS infere que "pessoa" é do tipo string
// A partir daqui, "pessoa" será tratada como string, e o TS sugerirá métodos e verificará erros com base nisso
// Se tentarmos atribuir um valor de outro tipo, o TypeScript gerará um erro:
pessoa = 32; // Erro: O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322) 🔴
// Outro exemplo de inferência:
const taxa = 300;
const barato = taxa < 400 ? true : "produto supertaxado";
// A variável "barato" terá um tipo inferido como: `true | "produto supertaxado"`
// Isso significa que, no momento de execução (runtime), "barato" pode ser `true` ou a string "produto supertaxado".
// Note que o tipo da variável é determinado em tempo de leitura do código, mas a decisão final acontece em tempo de execução.
// =================== FUNÇÕES ===================
// Em funções, as anotações de tipos se tornam especialmente importantes para indicar quais tipos de parâmetros e retorno a função deve aceitar e retornar.
// Exemplo 1: Função com anotação de tipo no parâmetro e no retorno
function dobro(a) {
    // A função recebe um número (number) e retorna um número (number)
    return a * 2;
    // Ao usar "a.", o TypeScript sugere os métodos disponíveis para o tipo number
}
// Exemplo 2: Função que manipula objetos com tipos explícitos
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
// A função "transformarPreco" recebe um objeto com as propriedades "nome" (string) e "preco" (string)
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco + ",00"; // Formata o preço como string
    return produto; // Retorna o objeto com o preço formatado
}
const produtoPrecoFormatado = transformarPreco(nintendo);
console.log(produtoPrecoFormatado); // Saída: { nome: 'Nintendo', preco: 'R$ 2000,00' }
