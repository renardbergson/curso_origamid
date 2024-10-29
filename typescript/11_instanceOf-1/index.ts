// ===================== CLASSES E OBJETOS =====================
// Classes no JavaScript são funções construtoras que criam objetos.
// Em TypeScript, ao definir uma classe, ele gera uma Interface do objeto resultante.
class Produto {
  private nome: string;
  private preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrarProduto(): string {
    return `
      Produto: ${this.nome};
      Preço: R$ ${this.preco};
    `;
  }
}

const livro = new Produto("A Guerra dos Tronos", 200);
console.log(livro); // "livro" é um objeto do tipo "Produto"
console.log(livro.mostrarProduto());

// ===================== INSTANCEOF =====================
// "instanceof" verifica se um objeto é uma instância de uma classe específica.
// Ele valida se o objeto foi criado a partir da função construtora (classe) específica.
console.log(livro instanceof Produto); // true
console.log(livro instanceof Array); // false

// ===================== FUNÇÃO COM RETORNO DINÂMICO =====================
// Imagine uma função que pode retornar duas classes diferentes ou "null".
class Livro {
  autor: string;

  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;

  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

// Função que retorna um objeto de tipo variável
function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo(1);
  }
  return null;
}

const produto = buscarProduto("O Hobbit");
// Acessar `produto.autor` geraria erro, pois o TypeScript não sabe se "produto" é do tipo "Livro", "Jogo" ou "null", visto que os objetos são gerados dentro da função e o TypeScript não a executa 💡

// É aí que o operador "instanceof" mostra-se bem útil
if (produto instanceof Livro) {
  console.log(produto.autor); // "J. R. R. Tolkien"
  // A verificação elimina a necessidade de "optional chaining"
}

// ===================== MOTIVO PARA RETORNOS DINÂMICOS =====================
// Por que uma função retornaria múltiplos tipos de objetos? (como no exemplo anterior)
// Algumas funções nativas, como "querySelector()", podem retornar vários tipos de elementos (e.g., vídeo, botão, etc.), dependendo do elemento HTML consultado.

// ===================== HERANÇA E INSTANCEOF =====================
// "instanceof" também verifica herança entre classes (extends).
class Veiculo {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }
}

class Carro extends Veiculo {
  velocidade: number;

  constructor(marca: string, velocidade: number) {
    super(marca); // "super" chama o construtor da classe pai, passando o argumento que ela precisa
    this.velocidade = velocidade;
  }
}

const celta = new Carro("chevrolet", 100);

if (celta instanceof Veiculo) {
  console.log("'celta' é uma instância de 'Veículo' e de 'Carro'"); // true
}

if (celta instanceof Carro) {
  console.log("'celta' é do tipo 'Carro' que extende 'Veículo'"); // true
}

// ===================== INSTANCEOF x INTERFACES =====================
/* 
  "instanceof" verifica se um objeto é criado por uma classe específica (constructor),
  mas não funciona para verificar se o objeto corresponde a uma Interface,
  pois "instanceof" é uma funcionalidade nativa do JavaScript, não do TypeScript. 💡
*/

interface Pessoa {
  nome: string;
}

const renard: Pessoa = {
  nome: "Renard Bergson",
};

console.log(renard); // objeto literal
console.log(renard instanceof Pessoa); // erro: Pessoa is not defined 🔴
