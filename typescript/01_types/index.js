// @ts-check

// ===================== TYPES =====================
// Em JavaScript, o tipo de um dado define os métodos e propriedades que podemos acessar 💡
// O VS Code, com o TypeScript rodando por trás dos panos, oferece funcionalidades como sugestão de métodos e propriedades
// Ao passar o mouse sobre um elemento JS no VS Code, aparece um pop-up com a tipagem daquele elemento, mesmo sem TS explícito

// 1 - Quando uma variável é atribuída a uma string, ela passa a possuir métodos de string
const frase = "Front End";
console.log(frase.toLowerCase()); // front end

// 2 - O mesmo ocorre para outros tipos de dados
const total = 100.05;
console.log(total.toFixed()); // 100

const empresas = ["Apple", "Microsoft"];
empresas.map(empresa => console.log(empresa.toLowerCase())); // "empresa" herda os métodos de string

// ===================== TS-CHECK =====================
// O comentário "@ts-check" no início de um arquivo JS faz com que o VS Code avise sobre possíveis erros comuns, mas não substitui o uso do TypeScript completo.

// ===================== ERROS/PROBLEMAS =====================
// Exemplo 1 - Erro que só ocorre em tempo de execução:
total.toLowerCase(); // ❌ Uncaught TypeError: total.toLowerCase is not a function
// No TypeScript, esse erro seria apontado durante a escrita do código.

// Exemplo 2 - Resultado inesperado por erro de tipo
const t = total.toFixed();
console.log(t + 10); // ❌ 10010 (concatenação de string, não soma numérica)
// TS evitaria esse problema ao identificar o tipo "string" do retorno de "toFixed"

// Exemplo 3 - Operação estranha com JS
const operacao = 100 + {};
console.log(operacao); // ❌ "[object Object]" (comportamento inesperado)

// Exemplo 4 - Erro de digitação
document.body.style.backgrounds = "#000"; // ❌ Nenhum erro no JS, mas "backgrounds" não existe como propriedade

// Exemplo 5 - Interação com elemento inexistente:
const button = document.querySelector("button");
button.click(); // ❌ Cannot read properties of null (reading 'click')
// No TS, a tipagem evitaria erros de elementos nulos.
