// ===================== EXERCÍCIOS =====================
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  nivel: "iniciante" | "avancado"; // poderia ser só "string", mas restringimos, para otimizar ainda mais💡
  tags: string[]; // ou "Array<string>"
  idAulas: Array<number>; // ou "number[]"
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  document.body.innerHTML += mostrarCursos(data).join(""); // Adiciona os cursos ao HTML como string

  // console.log(mostrarCursos(data));
  // O retorno de "mostrarCursos" é um array de strings, por isso utilizamos o método join()
  // Para comprovar isso no console, descomente a linha 17 e execute "console.log(mostrarCursos(data));" 💡
}

// prettier-ignore
function mostrarCursos(cursos: Array<Curso>) { // ou Curso[] 💡
  // "cursos" não é do tipo "Curso" apenas, é uma array de interfaces do tipo "Curso" 💡
  return cursos.map((curso) => {
    let color: string;  
    curso.nivel === "iniciante" ? color = "blue" : color = "red";

    return `
      <h1 style="color:${color}">${curso.nome}</h1>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Nível: ${curso.nivel === "iniciante" ? "Iniciante" : "Avançado"}</p>
      <p>Modalidade: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags: ${curso.tags.join(", ")}</p>
      <p>ID das aulas: ${curso.idAulas.join(", ")}</p>
      <br/>
    `;
  });
}

fetchCursos();
