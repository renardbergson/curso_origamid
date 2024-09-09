// ===================== EXERCÍCIOS =====================
console.log("Objeto com os dados de curso vindos do DOM");
/*  
  1 - Selecione cada curso (dom) e retorne uma array com objetos contendo: 
  I - título
  II - descricao 
  III - quantidade de aulas 
  IV - duração de cada curso
*/
const cursos = Array.from(document.querySelectorAll(".curso"));
const relacaoCursos = cursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas
    // note: se o nome da chave e do valor forem iguais, podemos escrever somente uma vez!
  }
})
console.log(relacaoCursos);

// 2 = Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaioresQue100 = numeros.filter(numero => numero > 100);
console.log("Lista de números maiores que cem");
console.log(numerosMaioresQue100);

// 3 - Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const temBaixo = instrumentos.some(instrumento => instrumento === "Baixo");
console.log(temBaixo);

// 4 - Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  }
]

const valorTotalCompras = compras.reduce((acumulador, item) => {
  const numeroPreco = +item.preco.replace("R$", "").replace("," , ".");
  const soma = acumulador + numeroPreco;
  return soma;
  // lembre-se: sem um valor inicial, o reduce() pula o primeiro item/iteração
  // lembre-se: o acumulador sempre assumirá o valor retornado a cada iteração
}, 0)
console.log("Valor total das compras: " + valorTotalCompras.toLocaleString("pt-br", {style: "currency", currency: "BRL"}));