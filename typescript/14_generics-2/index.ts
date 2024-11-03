// ========================= GENERICS 2 =========================
// Generics permitem que funções, classes ou interfaces trabalhem com qualquer tipo de dado. No entanto, isso pode ser um problema quando queremos restringir o tipo de dado aceito.
// O uso de `extends` ajuda a limitar o tipo de dado, tornando generics mais específicos.

// ============ EXTENDS ===========
// EXEMPLO 1: Função genérica para extrair texto, restrita a elementos do tipo HTMLElement.
function extrairTexto<T extends HTMLElement>(elemento: T) {
  // Extendemos o tipo de T para HTMLElement, evitando o uso de type guards, como "instanceof".
  return {
    texto: elemento.innerText,
    elemento,
  };
}

const link = document.querySelector("a");
link ? console.log(extrairTexto(link).elemento.href) : "";
// A extensão do tipo permite acessar "href" diretamente, mantendo a referência de HTMLAnchorElement.

// EXEMPLO 2: Função genérica semelhante ao querySelector(), permitindo seleção de elementos como no jQuery.
function $<T extends Element>(seletor: string): T | null {
  return document.querySelector(seletor);
}

const link2 = $<HTMLAnchorElement>("a");
console.log(link2?.innerText);
// A extensão de link2 para o tipo "HTMLAnchorElement" permite que TS identifique link2 como "HTMLAnchorElement", ao invés de Element | null.

// ============ MÉTODOS NATIVOS ===========
// Muitos métodos nativos usam generics por padrão, permitindo especificar o tipo no momento da execução.

// EXEMPLO 1: querySelector() com tipo especificado.
const link3 = document.querySelector<HTMLAnchorElement>(".link");
link3?.href;

// EXEMPLO 2: Atenção ao uso de generics!
// Mesmo especificando um tipo, isso não garante que o elemento existe ou é do tipo esperado.
const supostoVideo = document.querySelector<HTMLVideoElement>(".link");
console.log(supostoVideo?.volume); // undefined

// Sempre verifique o tipo com "instanceof" para evitar erros.
if (supostoVideo instanceof HTMLVideoElement) {
  console.log(supostoVideo.volume); // Apenas executa se for um HTMLVideoElement.
}

// EXEMPLO 3: Função assíncrona usando generics para o fetch de dados de uma API.
async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    // sintaxe alternativa à anotação de tipo diretamente em "notebook"
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(
    "Produto: " + notebook.nome + " || " + "Preço: " + notebook.preco
  );
}

handleData();
// Ao usar uma interface como Notebook, evitamos que o tipo seja inferido como "any".
