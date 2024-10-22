// ========================= EXERCÍCIOS =========================

/*  
  1 - Conserte a função a seguir com TypeScript

    function normalizarTexto(texto) {
      return texto.trims().toLowercase();
    }

  2 - Conserte o código a seguir com TypeScript

    const input = document.querySelector('input');
    const total = localStorage.getItem('total');
    
    input.value = total;
    calcularGanho(input.value);

    function calcularGanho(value) {
      const p = document.querySelector('p');
      p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }

    function totalMudou() {
      const value = Number(input.value);
      localStorage.setItem('total', value);
      calcularGanho(value);
    }

    input.addEventListener('keyup', totalMudou);

    Este exercício envolve um input onde o usuário insere um número. 
    O valor final será calculado e exibido em um parágrafo, e também será salvo no localStorage para persistência.
*/

// SOLUÇÃO - EXERCÍCIO 1
function normalizarTexto(texto: string): string {
  return texto.trim().toLowerCase();
  // Remove espaços em branco do início e do fim de uma string e transforma tudo em letras minúsculas
}

const frase = " Somos Tão Jovens   ";
const fraseNormalizada = normalizarTexto(frase);
console.log(fraseNormalizada); // Output: somos tão jovens

// SOLUÇÃO - EXERCÍCIO 2
// Seleciona o input e recupera o total do localStorage
const input = document.querySelector("input");
const total = localStorage.getItem("total");

// Verifica se o input e o total estão disponíveis
if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

// Função chamada quando o valor do input muda
function totalMudou(): void {
  // o operador "void" é usado como um tipo de retorno de função para indicar que a função não retorna um valor. Em outras palavras, uma função que tem o tipo de retorno "void" não deve retornar explicitamente nenhum valor; se tentar fazê-lo, o TypeScript emitirá um erro. 💡
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value)); // transformando string em número
  }
}

// Função para calcular ganhos
function calcularGanho(value: number): void {
  const p = document.querySelector("p");

  if (p) {
    p.innerHTML = "";

    if (value >= 200) {
      p.innerText = `Seus ganhos: ${100 + value * 0.2}`;
      return;
    }

    p.innerText = "🔴 O total de vendas precisa ser de pelo menos 200 reais!";
  }
}

// Adiciona evento para monitorar mudanças no input
if (input) {
  input.addEventListener("keyup", totalMudou);
}

/*  
  ⚠ OBSERVAÇÕES IMPORTANTES ⚠:

  I - No código problemático, uma série algumas ações eram tomadas sem antes verificar se os elementos envolvidos existiam no DOM, o que poderia ocasionar erros, caso não estivessem

  II - Ao digitar no input, o valor era calculado corretamente mas, ao dar refresh na página, o valor não era somado e sim concatenado, porque:
    - um tratamento de dados (conversão) era feito dentro da função "totalMudou", mas o mesmo não ocorria em "calcularGanho" e, nenhum erro era retornado, porque não foi especificado que o parâmetro "value" em "calcularGanho" deveria ser um number 💡

  III - A lógica de cálculo do bônus foi modificada por mim, pois achei mais condizente com a realidade de um suposto funcionário e empresa
*/
