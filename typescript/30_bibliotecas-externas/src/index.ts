// ==================== BIBLIOTECAS EXTERNAS ====================
// Nesta aula, veremos como utilizar bibliotecas externas, as quais foram inicialmente escritas em JavaScript, mas que podem ser usadas com TypeScript e oferecer suporte a ele

// ==================== UTILIZAÇÃO DAS BIBLIOTECAS COM TS ====================
// Observe que baixar o build dos plugins e adicionar o script deles no HTML não é suficiente para torná-los totalmente funcionais no TypeScript
// Para que os tipos dessas bibliotecas sejam reconhecidos corretamente, precisamos baixar seus respectivos arquivos do tipo .d.ts (assunto abordado na aula passada)
// Esses arquivos já estão disponíveis no acervo do NPM (node package manager), basta que procuremos pelos arquivos com a identificação "@type", e os instalemos via terminal, usando "npm install", normalmente 💡

// ===== JQUERY =====
// Biblioteca famosa que facilita a seleção e interação com elementos do DOM
// <script src="./plugins/jquery-3.7.1.js"></script> 💡
// npm install --save @types/jquery 💡
$("body").addClass("Usando jQuery");
console.log("Estamos usando jQuery: " + $("body").hasClass("Usando jQuery")); // true

// ===== LODASH =====
// Biblioteca que fornece funções extras, a fim de manipular dados de forma mais simples
// <script src="./plugins/lodash.min.js"></script> 💡
// npm install --save @types/lodash 💡
const array1 = [1, 2, 3, 5, 6];
const array2 = [2, 3, 1, 9];
console.log(
  "Diferença entre as arrays 'array1' e 'array2': " +
    _.difference(array1, array2)
);

console.log(
  "Elementos comuns entre as arrays 'array1' e 'array2': " +
    _.intersection(array1, array2)
);

// ==================== UTILIZAÇÃO DE BIBLIOTECAS SEM SUPORTE A TS ====================
// No exemplo a seguir, utilizaremos a biblioteca do player de video Vimeo
// Essa biblioteca já tem seus tipos definidos (@types vimeo) mas, suponhamos que não exista e que queremos usar essa biblioteca mesmo assim
// Nesse caso, podemos utilizar a seguinte sintaxe:
declare const Vimeo: any;
const vimeo = $("#vimeo");
const player = new Vimeo.Player(vimeo);
// o TS agora nos permite utilizar a biblioteca externa sem a declaração de tipos, porém não teremos o autocomplete nem a segurança de tipagem 🚨
