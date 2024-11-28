"use strict";
$("body").addClass("Usando jQuery");
console.log("Estamos usando jQuery: " + $("body").hasClass("Usando jQuery"));
const array1 = [1, 2, 3, 5, 6];
const array2 = [2, 3, 1, 9];
console.log("Diferença entre as arrays 'array1' e 'array2': " +
    _.difference(array1, array2));
console.log("Elementos comuns entre as arrays 'array1' e 'array2': " +
    _.intersection(array1, array2));
const vimeo = $("#vimeo");
const player = new Vimeo.Player(vimeo);
//# sourceMappingURL=index.js.map