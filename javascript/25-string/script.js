// STRING
// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String
// A seguir, perceba que, a única diferença entre os exemplos é que o primeiro retorna uma string direto e os demais retornam um objeto, mas todos possuem os mesmos métodos e propriedades de String
const comida = "pizza"; 
const agua = new String("água"); 
const ano = new String(2024);

// STR.LENGTH
// Retorna um number com o total de caracteres da string
console.log(comida.length); // 5
console.log(agua.length); // 4

// Também é possível acessar partes de uma string como se fosse um array
// Neste caso, o retorno é uma string com o caracter selecionado
console.log(comida[0]);
console.log(agua[0]);
console.log(ano[ano.length -1]); // último

// STR.CHARAT(n)
// Tem um funcionamento bem parecido com a abordagem anterior, só que, neste caso, é um método
const linguagem = "JavaScript";
console.log(linguagem.charAt(0)); // J
console.log(linguagem.charAt(2)); // v
console.log(linguagem.charAt(linguagem.length -1)); // t (último)

// STR.CONCAT(str1, str2...)
// Concatena strings e retorna o resultado
// Funciona exatamente como quando concatenamos strings utilizando o sinal de "+"
const frase  = "A melhor linguagem é ";
const fraseCompleta = frase.concat(linguagem, "!!"); 
console.log(fraseCompleta); // A melhor linguagem é JavaScript!!

// STR.INCLUDES(search, position)
// Procura pela string exata dentro de outra string, retornando um boolean. A procura é case sensitive
// "position" significa: procure a partir do caracter de posição tal
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";
console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.includes(listaFrutas)); // false
console.log(listaFrutas.includes(fruta, 15)); // false (a)

// STR.ENDSWITH(search) e STR.STARTSWITH(search)
// Procura pela string exata dentro de outra string. A procura é case sensitive
console.log(fruta.startsWith("ba")); // false (b minúsculo)
console.log(fruta.endsWith("na")); // true
console.log(fruta.startsWith("na")); // false

// STR.SLICE(start, end)
// Corta a string de acordo com os valores de start e end
// * "start" e "end" aqui funcionam como "casas" e não como índices *
const transacao1 = "Depósito do cliente";
const transacao2 = "Depósito do fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3)); // Dep (começa na casa 0 e retorna as 3 seguintes)
console.log(transacao2.slice(5, 8)); // ito (começa na casa 5 e retorna as 3 seguintes)
console.log(transacao3.slice(12, 15)); // sas (começa na casa 12 e retorna as 15 seguintes)

console.log(transacao1.slice(12)); // cliente (corta as 12 primeiras casas);
console.log(transacao1.slice(0, -2)); // Depósito do clien (mantém tudo desde o início, removendo só as últimas duas casas)
console.log(transacao3.slice(-5)); // misas (retorna as últimas 5 casas

// STR.SUBSTRING(start, end)
// Funciona semelhante ao método anterior
// Corta a string de acordo com os valores de start e end.
// Não funciona com valores negativos, como o str.slice()
console.log(linguagem.substring(0, 3)); // Jav (começa na casa 0 e retorna as 3 seguintes)
console.log(linguagem.substring(-3)); // JavaScript *(não funciona com valores negativos)

// STR.INDEXOF(search) e STR.LASTINDEXOF(search)
// * aqui nos referimos ao índice, não à casa *
// O primeiro, assim que achar o primeiro ele já retorna um number com o índice, o segundo retorna o último resultado de índice, também com um number
const instrumento = "Guitarra";
console.log(instrumento.indexOf("r")); // 5
console.log(instrumento.lastIndexOf("r")); // 6
console.log(instrumento.indexOf("ta")); // 3
console.log(instrumento.lastIndexOf("rra")); // 5

// STR.PADSTART(N, STR) e STR.PADEND(N STR)
// Aumenta o tamanho da string (length) para o valor de n, no início ou no final, respectivamente. Por exemplo, uma string com 8 caracteres, se passarmos n=10, ela passará a ter 10 caracteres, e o preenchimento é feito com espaços, caso não seja declarado o segundo argumento, caso contrário, será preenchido com o caracter passado no segundo argumento
// Exemplo de caso de uso: digamos que queremos alinhar os valores de uma lista de preços na tela, para isso, faremos com que tenham o mesmo número de caracteres
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];
listaPrecos.forEach(preco => {
  console.log(preco.padStart(10, "-"));
})
console.log(listaPrecos[2].padEnd(10, ".")); // R$ 12000...

// STR.REPEAT(N)
// Repete a string (n) vezes
const palavra = "Ta";
console.log(palavra.repeat(5)); // TaTaTaTaTa

// STR.REPLACE(regexp|substr, newstr|function)
// Troca parte de uma string por outra. 
// Com esse método podemos utilizar regular expressions ou um valor direto. 
// Se usarmos um valor direto, e não uma regular expression, ele irá trocar apenas o primeiro valor que encontrar
// * Note que, no caso de querermos alterar permanentemente a string, é preciso utilizar "let" ao invés de "const" *
const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
console.log(listaItens.replace(/[ ]+/g, ", ")); // Camisas, Bonés, Calças... (todos)

const listaPrecos2 = "R$ 1215,62 R$ 2250,08 R$ 3000,20";
console.log(listaPrecos2.replace(",", ".")); // R$ 1215.62 R$ 2250,08... (só o primeiro)

// STR.SPLIT(padrao)
// Divide a string na ocorrência do padrão informado e retorna uma array!
// ** Perceba que a ocorrência informada é removida e não é incluida na array **
const arrayItens = listaItens.split(" ");
console.log(arrayItens);
// Exemplo de caso de uso: manipular uma string de texto HTML
const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div"); // '<', '>O melhor item</', '><', '>A melhor lista</', '>'
const novoHtmlText = htmlArray.join("h1") // "join()" é um método de array, ele junta todos os itens, transformando a array em string. 
// I - Se nenhum argumento for passado, ele apenas junta as partes
// II - Se passarmos como argumento aspas (""), ele remove as virgulas oriundas da array e junta tudo 
// III - Se passarmos alguma coisa entre aspas como argumento, ele remove as vírgulas e substitui os gaps por aquilo que estiver entre parênteses
console.log(novoHtmlText);

// STR.TOLOWERCASE() e STR.TOUPPERCASE()
// Retorna a string em letras maiúsculas e minúsculas, respectivamente
// Exemplo de caso de uso: para verificar o input de um usuário, o ideal seria limpar (igualar) os caracteres todos em maiúsculos ou todos em minúsculos, já que geralmente não se tem controle sobre a forma de que um input foi inserido
const nome = "Renard";
console.log(nome.toUpperCase()); // RENARD
console.log(nome.toLowerCase()); // renard
// exemplo de caso de uso
if (nome.toLowerCase() === "renard") {
  console.log("O nome foi inserido corretamente");
}

// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove todos os espaços em branco, espaços do início ou do fim, respectivamente
// Exemplo de caso de uso: remover/limpar strings "sujas", oriundas de algum input ou base de dados
const valor = " R$ 2250.00 ";
console.log(valor.trim()); // R$ 2250.00 (remove todos)
console.log(valor.trimStart()); // R$ 2250.00_ (remove do início)
console.log(valor.trimEnd()); // _R$ 2250.00// (remove do final)



// =============== EXERCÍCIOS ===============
console.log("================= EXERCÍCIOS =================");
// 1 - Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxasTotal = 0;
let recebimentosTotal = 0;
transacoes.forEach(trans => {
  const numeroLimpo = parseFloat(trans.valor.replace("R$ ", ""));
  if (trans.descricao.toLocaleLowerCase().includes("taxa")) {
    taxasTotal += numeroLimpo;
    // poderia ser com "substring()", "startsWith()", "slice()", etc. 
  } else if (trans.descricao.toLocaleLowerCase().includes("recebimento")) {
    recebimentosTotal += numeroLimpo;
  }
})
console.log(`Soma das Taxas: ${taxasTotal.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}`);
console.log(`Soma dos Recebimentos: ${recebimentosTotal.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}`);

// 2 - Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// 3 - Substitua todos os span's por a's
const html = `
  <ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
  </ul>
`;
const arrayHtml = html.split("span").join("a");
console.log(arrayHtml);

// 4 - Retorne o último caracter da frase
const _frase = 'Melhor do ano!';
console.log(`Último caracter da variável _frase: "${_frase.slice(-1)}"`); // Há outras maneiras de fazer!

// 4 - Retorne o total de taxas
const gastos = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totalTaxas = 0;
gastos.forEach(item => {
  if (item.trim().toLocaleLowerCase().startsWith("taxa")) {
    totalTaxas++;
  }
})
console.log(`Total de itens que contém a palavra "taxa": ${totalTaxas}`);