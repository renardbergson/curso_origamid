// ==================== OBJETOS ====================

// ========== DUCK TYPING ==========
// Um objeto, quando passado como argumento de uma função, pode conter propriedades e métodos além dos declarados na interface.
// Duck typing baseia-se no conceito:
// "Se parece com um pato, nada como um pato e grasna como um pato, então provavelmente é um pato." - Wikipédia.

interface Produto {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: "notebook",
  quantidade: 10,
  cor: "preto", // Propriedade extra em relação à interface Produto.
};

function mostrarProduto(produto: Produto) {
  console.log("Quantidade do produto no estoque: " + produto.quantidade);
}

mostrarProduto(produto1);

// É possível ter propriedades a mais, porém nunca a menos! 💡
// No exemplo a seguir temos uma propriedade a mais (preco) em relação à interface "Produto", mas falta a propriedade "quantidade".
// Caso necessário, é possível tornar "quantidade" opcional na interface.

const servico = {
  nome: "Instalação de ar-condicionado",
  preco: 300,
};

// mostrarProduto(servico); 🔴 Erro: A propriedade 'quantidade' está ausente no tipo '{ nome: string; preco: number; }', mas é obrigatória no tipo 'Produto'.

// ========== PARTIAL ==========
// O TypeScript conta com "utility types" que são funções capazes de transformar uma interface ou tipo em outra.
// Por exemplo, através da sintaxe: "Partial<Tipo>", é possível indicar que todas as propriedades de uma interface serão opcionais.

function mostrarQuantidadeComPartial(produto: Partial<Produto>) {
  console.log(produto.quantidade ?? null); // Usando o operador de coalescência nula.
}

mostrarQuantidadeComPartial(servico); // null, mas agora foi possível passar "servico" como argumento.
mostrarQuantidadeComPartial({}); // null
// Apesar de útil, utilizar "Partial" pode enfraquecer a segurança de tipos. Use com cautela. 💡

// ========== [KEY: STRING]: UNKNOWN ==========
// Se não estivermos nos referindo ao argumento de uma função, ainda assim é possível definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente.
// A interface "Post" a seguir ilustra um cenário em que artigos possuem propriedades extras além das especificadas na Interface de referência.

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown; // Aceita qualquer chave string com valor desconhecido.
}

const artigo: Post = {
  titulo: "Como aprender HTML",
  visualizacoes: 3000,
  tags: ["HTML", "Front-end"],
  autor: "Renard Bergson", // Propriedade extra.
  ano: 2024,
};

console.log(artigo);

// Reflexão sobre o uso de propriedades extras:
console.log(artigo.descricao); // undefined
console.log(artigo.asuhausuahus); // undefined

// ========== RECORD ==========
// A utility type "Record" pode ser usado para definir a interface de um Objeto Literal genérico.
// Ele é equivalente à definição manual de `[key: string]: tipo`, mas com maior flexibilidade.
// No exemplo a seguir, criamos uma função que aceita apenas objetos literais como argumento.

type ObjetoLiteral = {
  [key: string]: unknown; // Chaves string com valores desconhecidos.
};

type ObjetoLiteral2 = Record<string, unknown>; // Exatamente equivalente ao ObjetoLiteral.

function mostrarTitulo(obj: ObjetoLiteral & ObjetoLiteral2) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

// mostrarTitulo(200); 🔴 Erro: "Cannot use 'in' operator to search for 'titulo' in 200".
mostrarTitulo({ titulo: "Aprendendo TypeScript" });

// A utility type "Record" é flexível e pode ser usado para formatos mais específicos.
type Teste = Record<"titulo" | "autor", unknown>;
type Teste2 = Record<string, string>;
type Teste3 = Record<number, string>; // Chaves numéricas com valores string.

// ========== DEMAIS UTILITY TYPES ==========
// https://www.typescriptlang.org/docs/handbook/utility-types.html
