"use strict";
function arredondarParaCima(valor) {
    if (typeof valor === "string") {
        const numero = parseFloat(valor);
        return Math.ceil(numero).toString();
    }
    return Math.ceil(valor);
}
const numeroString = arredondarParaCima("2.4");
const numero = arredondarParaCima(2.4);
console.log(numeroString);
console.log(numero);
