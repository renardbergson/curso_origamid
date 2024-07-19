// CLASSES E ATRIBUTOS
// Como manipular classes e atributos de elementos do DOM

// CLASSLIST
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém
const menu = document.querySelector(".menu");

console.log(menu.className); // string
console.log(menu.classList); // lista de classes, array-like
menu.classList.add("ativo"); // adiciona classe
menu.classList.add("ativo", "mobile"); // é possível adicionar mais de uma classe de uma vez
menu.classList.remove("ativo"); // remove classe
menu.classList.toggle("ativo"); // adiciona / remove classe
console.log(menu.classList.contains("ativo")); // booleano, true or false
menu.classList.replace("ativo", "inativo"); // troca uma classe por outra

console.log(menu.classList);

// Método antigo de manipular classes
menu.classList += " teste-método-antigo"; // a string de classes será igual à string mais alguma coisa
console.log(menu.className);

// ATTRIBUTES
// Retorna uma array-like com os atributos do elemento
const animais = document.querySelector(".animais");
console.log(animais.attributes); // retorna todos os atributos
console.log(animais.attributes[1]); // retorna o segundo atributo
console.log(animais.attributes.class); // retorna o atributo de classes direto
console.log(animais.attributes["data-texto"].value); // retorna o valor de um atributo "data" em específico

// GET ATTRIBUTE e SETATTRIBUTE
// São métodos que retornam ou definem, de acordo com o atributo selecionado
const img = document.querySelector("img");
console.log(img.getAttribute("src")); // retorna o source do atributo src
console.log(img.getAttribute("alt")); // retorna o valor do texto alternativo
img.setAttribute("alt", "É uma Raposa"); // define, se não existir ou, se existir, atualiza o atributo
console.log(img.attributes["alt"].value);
console.log(img.hasAttribute("alt")); // booleano, true or false
img.removeAttribute("alt"); // remove o atributo
console.log(img.hasAttribute("alt"));

// READ ONLY x WRITABLE
// Algumas propriedades não permitem a mudança de seus valores, pois são read-only, somente leitura
console.log(animais.className); // string com os nomes das classes
animais.className = "azul"; // substitui completamente a string
animais.className += " vermelho"; // adiciona "vermelho" à string
console.log(animais.className);

animais.attributes = "teste='teste'"; // não funciona, read-only
// através da documentação verificamos as permissões de cada propriedade

// EXERCÍCIOS
console.log("====== EXERCÍCIOS ======");
// Adicione a classe "ativo" a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item, index) => {
  item.classList.add("ativo");

  if (--itensMenu.length === index) {
    console.log(item.classList.value);
  }
});

// Remove a classe "ativo" de todos os itens do menu, exceto do primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");
console.log(itensMenu[0].classList);

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");
imagens.forEach((img) => {
  const possuiAtributoAlt = img.hasAttribute("alt");
  console.log(img, possuiAtributoAlt);
});

// Modifique o href do link externo no menu
const linkExternoMenu = document.querySelector(".menu a[href^='https']");
linkExternoMenu.setAttribute("href", "https://www.google.com.br");
console.log(linkExternoMenu.getAttribute("href"));
