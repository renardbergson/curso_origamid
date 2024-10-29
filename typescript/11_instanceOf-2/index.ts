// ===================== INSTANCEOF - EXERCÍCIOS =====================

// 1 - Selecione o link disponível no HTML, utilizando o método getElementById.
const link = document.getElementById("origamid");

// Observação:
// A inferência automática do TypeScript para a variável "link" é "HTMLElement | null".
// Entretanto, "link" pode ser um "HTMLAnchorElement" (elemento <a>) caso o elemento com id "origamid" seja um link.
// Podemos confirmar o tipo real verificando o protótipo em "console.dir(link)".

// Importante:
// "HTMLAnchorElement" é uma classe que estende "HTMLElement". Isso explica a inferência,
// pois, internamente, a estrutura do TypeScript reflete algo como "HTMLAnchorElement extends HTMLElement".

// ===================== ERRO AO ACESSAR PROPRIEDADES =====================

// I - Quando tentamos acessar "link.href" diretamente após a seleção, recebemos um erro:
//   🔴 "A propriedade 'href' não existe no tipo 'HTMLElement'"

// II - Mesmo que o link tenha sido selecionado, o TypeScript não garante que ele seja de fato um "HTMLAnchorElement",
//     pois a inferência apenas sabe que ele pode ser "HTMLElement" ou "null".

// ===================== USO DO 'instanceof' =====================

// III - Com o operador "instanceof", podemos confirmar se "link" é uma instância de "HTMLAnchorElement".
//      Isso nos dá acesso ao autocomplete e às propriedades específicas de um link (como "href").

if (link instanceof HTMLAnchorElement) {
  // Agora podemos acessar e modificar o "href" corretamente
  link.href = link.href.replace("http", "https"); // substitui 'http' por 'https'
  console.log(link); // exibe o link modificado no console
}
