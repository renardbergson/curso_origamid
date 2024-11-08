// ========================= FUNÇÕES 2 =========================

// ========== NEVER ==========
// A anotação "never" é usada em funções que lançam um erro ou encerram a aplicação.
// Enquanto "void" indica ausência de retorno, "never" traz benefícios adicionais,
// pois sinaliza claramente que a execução não continuará após a função.

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}
// abortar("Ocorreu um erro");
// console.log("Tente novamente"); // Esta linha não será executada

// ========== MÉTODOS ==========
// É possível definir métodos dentro de uma interface de objeto.

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
  // Qualquer objeto que implemente a interface "Quadrado"
  // deve ter uma propriedade "lado" e o método "perimetro".
}

const quadrado: Quadrado = {
  lado: 4,
  perimetro(lado) {
    return lado * 4;
  },
};

function calcularPerimetro(forma: Quadrado) {
  return forma.perimetro(forma.lado);
}

console.log(calcularPerimetro(quadrado)); // Saída: 16

// ========== FUNCTION OVERLOAD ==========
// Overloads permitem definir múltiplas assinaturas para uma função,
// que retorna diferentes tipos dependendo dos argumentos recebidos.

// Exemplo 1
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  }
  return valor.map((item) => item.trim().toLowerCase());
}

// O TypeScript não consegue inferir o tipo de saída sem overloads.
// Com overloads, o retorno é mais específico, baseado na entrada.

console.log(normalizar("  fRonT-eNd ").toUpperCase()); // "front-end"
console.log(normalizar([" baNaNA", " uVa   "])); // ["banana", "uva"]

// Exemplo 2
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

// A função "$" aceita apenas os seletores "a" e "video".
$("a");
$("video");

// ========== DIFERENÇAS: GENERICS x OVERLOADS ==========

// Overloads:
// Usados para funções com múltiplas assinaturas, que aceitam diferentes tipos de argumentos
// ou retornam tipos distintos, dependendo de como são chamadas.

function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: any): any {
  if (typeof value === "string") {
    return `String value: ${value}`;
  } else if (typeof value === "number") {
    return value * 2;
  }
}

console.log(processValue("Teste")); // "String value: Teste"
console.log(processValue(10)); // 20

// Generics:
// Generics permitem escrever funções flexíveis e reutilizáveis,
// mantendo consistência de tipos sem especificar o tipo até o uso.

function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Teste")); // "Teste"
console.log(identity<number>(10)); // 10

// Use overloads para capturar variações específicas de chamadas de função.
// Use generics para flexibilidade e reutilização de lógica sem amarrar a um tipo específico.
