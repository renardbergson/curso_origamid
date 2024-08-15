// NATIVE, HOST E USER

// Native
// São objetos nativos, definidos na especificação da linguagem, eles são implementados independente do host. São exemplos de construtores de OBJETOS NATIVOS:
Object
String
Array
Function

// Host
// São objetos implementados pelo ambiente. Por exemplo, no browser existem os objetos do DOM, como DomList, HTMLCollection, etc. Já em NodeJS os objetos do Host são diferentes, já que o ambiente não se trata de um browser. São exemplos de OBJETOS DO BROWSER:
NodeList
HTMLCollection
Element

// User
// São objetos definidos pelo aplicativo do usuário, ou seja, qualquer objeto que criado ou importado de alguma biblioteca externa. Exemplo de um OBJETO DO USUÁRIO:
const Pessoa = {
  nome: "Renard",
}

// API
// "Application Programming Interface" é uma interface de software criada para interagir com outros softwares. Ou seja, toda interação que fazemos com o browser, utilizando Objetos, Métodos e Propriedades, estamos, na verdade, interagindo com a API do browser.
// Um exemplo pertinente são os métodos provenientes do "webkit", disponíveis apenas na API do Google Chrome

// EXERCÍCIOS
// Liste 5 objetos nativos
Math
Function
Object
String
Array

// Liste 5 objetos do browser (host)
NodeList
HTMLCollection
Element
Location
History

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
document.webkitHidden;
document.webkitVisibilityState;