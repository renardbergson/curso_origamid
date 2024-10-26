"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    document.body.innerHTML += mostrarCursos(data).join(""); // Adiciona os cursos ao HTML como string
    // console.log(mostrarCursos(data));
    // O retorno de "mostrarCursos" é um array de strings, por isso utilizamos o método join()
    // Para comprovar isso no console, descomente a linha 17 e execute "console.log(mostrarCursos(data));" 💡
}
// prettier-ignore
function mostrarCursos(cursos) {
    // "cursos" não é do tipo "Curso" apenas, é uma array de interfaces do tipo "Curso" 💡
    return cursos.map((item) => {
        let color;
        if (item.nivel === "iniciante") {
            color = "blue"; // Cor azul para nível iniciante
        }
        else {
            color = "red"; // Cor vermelha para nível avançado
        }
        return `
      <h1 style="color:${color}">${item.nome}</h1>
      <p>Horas: ${item.horas}</p>
      <p>Aulas: ${item.aulas}</p>
      <p>Nível: ${item.nivel === "iniciante" ? "Iniciante" : "Avançado"}</p>
      <p>Modalidade: ${item.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags: ${item.tags.join(", ")}</p>
      <p>ID das aulas: ${item.idAulas.join(", ")}</p>
      <br/>
    `;
    });
}
fetchCursos();
