// ===================== ARRAYS EM TYPESCRIPT =====================
// Em TypeScript, uma array é anotada especificando o tipo dos elementos que ela contém,
// seguido de colchetes `[]` ou usando a sintaxe alternativa `Array<T>`.

const numeros = [10, 30, 40, 5, 3, 30];
// TypeScript infere automaticamente o tipo como "const numeros: number[]"
// Sintaxe alternativa: "const numeros: Array<number>"
// "numeros" é uma array de números, ou seja, ela aceita apenas valores do tipo "number".

const valores = [10, "Taxas", 40, "Produto", 3, 30];
// Tipo inferido: "const valores: (string | number)[]"
// Sintaxe alternativa: "const valores: Array<string | number>"
// "valores" é uma array que aceita tanto "number" quanto "string".

const livros = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 120],
];
// Tipo inferido: "const livros: (string | number)[][]"
// Sintaxe alternativa: "const livros: Array<Array<string | number>>"
// "livros" é uma array de arrays (array bidimensional), onde cada sub-array pode conter
// tanto strings quanto números.

// I - Função para filtrar números maiores que 20 na array
function maiorQue20(data: Array<number>): number[] {
  // Mostrando o uso das duas sintaxes para anotações de tipo
  return data.filter((num) => num > 20);
}

// II - Função para filtrar apenas números de uma array que contém números e strings
function filtrarNumeros(data: (number | string)[]): Array<number> {
  // Mostrando o uso das duas sintaxes para anotações de tipo
  return data.filter((num) => typeof num === "number");
}

// III - Função para filtrar apenas os nomes (strings) dos livros de uma array bidimensional
function filtrarNomeLivros(data: Array<Array<string | number>>): string[][] {
  // Mostrando o uso das duas sintaxes para anotações de tipo
  return data.map((item) => item.filter((i) => typeof i === "string"));
}

// Testando as funções
console.log("Elementos maiores que 20 na array 'numeros':", maiorQue20(numeros));
console.log("Números presentes na array 'valores':", filtrarNumeros(valores));
console.log("Nomes dos livros presentes na array 'livros':", filtrarNomeLivros(livros));
