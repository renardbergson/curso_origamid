// ========================= USER TYPE GUARD - EXERCÍCIO =========================

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetchCursos(): Promise<void> {
  try {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
  } catch (error) {
    console.error("Erro ao obter a lista de cursos:", error);
  }
}

interface Curso {
  nome: string;
  horas: number;
  tags: string[];
}

function isCurso(value: unknown): value is Curso[] {
  return (
    Array.isArray(value) && // verifica se "value" é uma array
    value.every(
      (item) =>
        // verifica se cada "item" dentro de "value" tem as especificações seguintes
        item &&
        typeof item === "object" &&
        "nome" in item &&
        "horas" in item &&
        "tags" in item &&
        typeof item.nome === "string" &&
        typeof item.horas === "number" &&
        Array.isArray(item.tags) && // verifica se "item.tags" é uma array
        item.tags.every((tag: string) => typeof tag === "string")
      // verifica se cada "tag" dentro de "item.tags" é do tipo "string"
    )
  );
}

function handleCursos(data: Curso[]): void {
  // podemos estar o "else" trocando "cursos" por "notebook" na URL do fetch
  if (isCurso(data)) {
    data.forEach((curso) => {
      document.body.innerHTML += `
        <p>Curso: ${curso.nome}</p>
        <p>Horas: ${curso.horas}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <br>
      `;
    });
  } else {
    console.error("Os dados recebidos não estão no formato esperado!");
  }
}

fetchCursos();

// ===================== MÉTODO EVERY ==============================
// O método every() verifica se todos os elementos de um array atendem a uma determinada condição.

// COMO FUNCIONA?
// Ele recebe uma função callback como argumento.
// A função callback é executada para cada elemento do array.
// Se todos os elementos retornarem true na verificação, o every retorna true.
// Se algum elemento não atender à condição, o every retorna false.
const numeros = [2, 4, 6, 8];
const todosPares = numeros.every((numero) => numero % 2 === 0);
console.log(todosPares); // true

// "EVERY" x "FOREACH" x "MAP"
// - Por que utilizamos every() após as verificações com isArray()?
// - Quando estamos falando de Type Guard, estamos falando de retornos booleanos! 💡
// - forEach() é um método que sempre retorna "undefined", é usado para efeitos
// - map() retorna uma nova array, usa-se para transformar dados, não para validação
