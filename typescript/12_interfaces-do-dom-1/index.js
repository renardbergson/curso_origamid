// ===================== INTERFACES DO DOM =====================
// TYPEOF x INSTANCEOF
// Lembre-se: qualquer elemento retornado pelo DOM é um objeto construído a partir de uma classe construtora.
// Então, "typeof" não será útil em casos mais complexos, visto que sempre retornará "object".
// Usaremos "typeof" com tipos primitivos (string, number, boolean, etc).
// QUERY SELECTOR
// Quando selecionamos um elemento do DOM com querySelector, o objeto retornado dependerá da string passada no método.
// Para saber quais objetos o DOM pode retornar, é preciso consultar a documentação que detalha esses objetos e suas propriedades/métodos.
// Referência: https://developer.mozilla.org/en-US/docs/Web/API
/*
  Por exemplo: se pesquisarmos pelo objeto "HTMLAnchorElement", podemos ver que essa classe extende outras 4 classes,
  sendo instância de cada uma delas e herdando suas propriedades:

  EventTarget ⬅ Node ⬅ Element ⬅ HTMLElement ⬅ HTMLAnchorElement
*/
// No exemplo a seguir, vamos selecionar o mesmo elemento de vídeo de duas formas diferentes.
// A segunda forma resultará em erro, mas usaremos "instanceof" para corrigir:
const video = document.querySelector("video"); // : HTMLVideoElement (inferência correta)
video?.volume;
// Problema (selecionar o mesmo elemento via ID)
// A anotação "HTMLVideoElement" também resolveria o erro a seguir! 💡
const videoDiv = document.querySelector("#video"); // : HTMLElement 🔴
videoDiv?.volume; // erro: A propriedade 'volume' não existe no tipo 'HTMLElement' 🔴 (TS não verifica o tipo de elemento)
// Solução
// Usando "instanceof" para verificar se o elemento selecionado é do tipo HTMLVideoElement antes de acessar "volume"
if (videoDiv instanceof HTMLVideoElement) {
    videoDiv.volume; // 🟢 Correto, sem necessidade de optional chaining
}
// Outros exemplos de querySelector
document.querySelector("img"); // : HTMLImageElement
const link1 = document.querySelector("a"); // : HTMLAnchorElement
const link2 = document.querySelector("#origamid"); // : Element
// QUERY SELECTOR ALL
// O querySelectorAll retorna uma NodeList de elementos.
// Atenção: não confundir a interface NodeListOf com a classe NodeList 💡
// No nosso HTML temos 3 elementos (2 âncoras e 1 botão) com a mesma classe "link"
const links = document.querySelectorAll(".link"); // : NodeListOf<Element>
// A anotação "NodeListOf<HTMLAnchorElement>" também resolveria o erro a seguir! 💡
console.log(links instanceof NodeList); // true
links.forEach((item) => {
    item.href; // erro: A propriedade 'href' não existe no tipo 'Element'. 🔴
    // O erro ocorre porque "button" não possui "href"
    // Cenário 1 (exemplo do console.log)
    /*
      http://127.0.0.1:5500/
      http://127.0.0.1:5500/produtos
      undefined
    */
    // Cenário 2 (correto)
    if (item instanceof HTMLAnchorElement) {
        console.log(item.href);
        /*
          http://127.0.0.1:5500/
          http://127.0.0.1:5500/produtos
        */
    }
});
