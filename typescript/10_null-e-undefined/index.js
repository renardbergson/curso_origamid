// ===================== NULL E UNDEFINED =====================
// NULL
// É um tipo primitivo que representa ausência de valor.
// É comum ver funções do DOM que fazem uma busca, retornam "null", quando não são bem sucedidas
// Que impacto isso tem no TS? Sempre que falarmos com um elemento que pode retornar "null", antes de tentar acessar qualquer propriedade ou método desse elemento, precisamos verificar se esse elemento existe ou não
// As checagens a seguir evitam o erro: "Cannot read properties of null" 🔴
const config = localStorage.getItem("config");
// I
if (config !== null) {
    config.toLowerCase();
}
// II
if (config) {
    config.toLowerCase();
}
// III
if (config)
    config.toLowerCase();
// IV (optional chaining)
config?.toLocaleLowerCase();
// UNDEFINED
// Representa variáveis/propriedades que foram instanciadas, porém os seus valores ainda não foram definidos
// Também representa funções sem retorno
let total;
if (total) {
    console.log("'total' foi definido");
}
else {
    console.log("'total' não foi definido"); // = undefined
}
const data = {};
// @ts-ignore
console.log(data.nome); // undefined
const livro = {};
const jogo = {
    nome: "Ragnarok",
};
console.log(livro.nome?.toLowerCase());
console.log(jogo.nome?.toLocaleLowerCase()); // ragnarok
// STRICT NULL CHECKS
// É a configuração responsável por apontar os possíveis erros acima
// Sem essa propriedade atribuida como "true" no arquivo "tsconfig.json", o TS assume que qualquer valor pode incluir "null | undefined" e, consequentemente para de checar casos onde "null | undefined" podem ser retornados
// O modo estrito (strict mode) já altera essa propriedade para "true" 💡
// Nunca utilizaremos o TS sem o modo estrito ativado 💡
