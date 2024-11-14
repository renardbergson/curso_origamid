"use strict";
// ========================= TYPE ASSERTION =========================
// Type Assertion (afirmação de tipo) permite "indicar" explicitamente ao TypeScript qual é o tipo esperado de uma expressão.
// Deve ser usada com cuidado, pois pode comprometer a segurança de tipo (Type Safety),
// ao afirmar um tipo que nem sempre pode ser verdadeiro. 🚨
// ========== AS ==========
// "as" é o operador de Type Assertion, que permite ao desenvolvedor especificar o tipo de uma expressão,
// mesmo quando o TypeScript não consegue inferi-lo automaticamente.
const video = document.querySelector(".player"); // Afirmamos que o elemento é um HTMLVideoElement
// video.volume; // 🔴 Erro de runtime se o elemento for 'null', pois não existe 'volume' em 'null'.
// 🚨 Type Assertion só é permitida quando os tipos têm alguma relação entre si.
const link = document.querySelector(".link");
// Fetch com Type Assertion
async function fetchProdutoComAS() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json();
    // Sem Type Assertion, 'json()' retorna uma Promise do tipo 'any',
    // e o TypeScript não consegue inferir as propriedades da interface 'Produto'.
}
async function handleProduto1() {
    const produto = await fetchProdutoComAS();
    console.log(produto.nome); // Acesso seguro, pois o tipo foi afirmado como 'Produto'.
}
// Fetch sem Type Assertion
async function fetchProdutoSemAS() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json();
}
async function handleProduto2() {
    const produto = (await fetchProdutoSemAS()); // Type Assertion aplicada após o retorno.
    console.log(produto.nome);
}
async function handleProduto3() {
    const produto = await fetchProdutoSemAS();
    console.log(produto.nome); // Type Assertion aplicada diretamente na expressão.
}
// ========== NON-NULL ASSERTION OPERATOR (!) ==========
// O operador '!' indica que o valor **não é nulo**, e seu uso está relacionado ao conceito de Type Assertion.
// Deve ser usado com cuidado, pois pode provocar erros de runtime se a suposição estiver errada.
// Durante a compilação, o operador '!' é removido do código.
const video2 = document.querySelector("video");
// video2.volume; 🔴 Erro de runtime se o elemento não existir ('null').
// 🔍 Por que usar '!'?
// Imagine que temos certeza de que um link (âncora) existe no HTML e queremos alterar seu atributo 'href'.
const a = document.querySelector("a");
// a?.href = "#"; 🔴 Erro: Invalid left-hand side in assignment
// Usando '!', conseguimos modificar o atributo:
a.href = "#";
// ========== OUTRAS SINTAXES DE TYPE ASSERTION ==========
// Existem diferentes formas de fazer Type Assertion em TypeScript:
// Usando 'as'
const elementoVideo = document.querySelector(".player");
// Usando "angle brackets" (não recomendado em projetos com JSX)
const elementoVideo2 = document.querySelector(".player");
// Usando a sintaxe genérica do 'querySelector' (mais segura, pois mantém a possibilidade de 'null')
const elementoVideo3 = document.querySelector(".player");
// Sem Type Assertion (o tipo é inferido como 'Element | null')
const elementoVideo4 = document.querySelector(".player");
function naoExecutar() {
    elementoVideo.volume; // OK (Type Assertion garante o tipo)
    elementoVideo2.volume; // OK
    elementoVideo3?.volume; // OK (com optional chaining, evita erro se for 'null')
    elementoVideo4.volume; // OK, mas exige Type Assertion
}
// ================== TYPE ASSERTION vs. ANOTAÇÃO DE TIPO ==================
// Anotação de Tipo (: Tipo): Declara explicitamente o TIPO DE UMA VARIÁVEL, permitindo ao TypeScript fazer verificações automáticas e garantir que o valor corresponda ao tipo anotado.
// Exemplo: const produto: Produto = await fetchProduto();
// Vantagem: Mais seguro, com verificação de tipo durante a compilação.
// Uso: Quando você sabe o tipo esperado e quer que o TypeScript valide o valor.
// Type Assertion (as Tipo): Afirma explicitamente o TIPO DE UMA EXPRESSÃO, mesmo quando o TypeScript não consegue inferir o tipo corretamente.
// Exemplo: const produto = await fetchProduto() as Produto;
// Vantagem: Útil quando você tem certeza do tipo, mas o TypeScript não consegue inferir.
// Desvantagem: Menos seguro, pois não verifica se o valor realmente corresponde ao tipo, podendo ocultar erros.
// Conclusão:
// - Use anotação de tipo sempre que possível para garantir segurança de tipo.
// - Use type assertion apenas quando necessário e com cautela, para evitar erros de runtime.
