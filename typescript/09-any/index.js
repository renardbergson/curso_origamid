// ===================== ANY =====================
// O tipo "any" permite que um dado assuma qualquer tipo. Deve-se evitar seu uso,
// pois ele remove a segurança e o autocomplete que o TypeScript fornece.
function normalizar(texto) {
    return texto.toLowerCase();
    // Quando usamos "any", o TypeScript não sugere métodos no autocomplete.
}
console.log(normalizar(" DeSIgN ")); // Saída: " design "
// console.log(normalizar(200)); // 🔴 erro em runtime: "texto.toLowerCase is not a function"
// ===================== ANY IMPLÍCITO =====================
// Fora do modo estrito, parâmetros sem anotação de tipo assumem "any" implicitamente.
// É recomendado sempre tipar esses parâmetros, mas o TypeScript deixa um alerta 💡.
function normalizar2(texto) {
    return texto.toLowerCase();
    // Como "texto" não possui tipo anotado, o TypeScript assume que ele é "any".
}
// ===================== USO ESPECÍFICO DO TIPO "ANY" =====================
// Há casos onde o "any" é necessário, como em respostas de APIs.
// A função "json()" pode retornar qualquer tipo de dado, dependendo da API,
// por isso, "data" assume "any". No entanto, é melhor usar interfaces quando possível.
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    // Ao passar o mouse sobre "data", vemos que o TypeScript infere: "const data: any".
    console.log(data);
}
fetchJSON("https://api.origamid.dev/json/cursos.json");
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
const teste = "o any gera problemas";
// mostrarCursos(teste); // 🔴 erro: "cursos.forEach is not a function"
// Aqui, "teste" é "any" e pode ser passado como "Curso[]", levando a um erro em tempo de execução.
