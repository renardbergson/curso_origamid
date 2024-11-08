// ========================= FUNÇÕES - EXERCÍCIO =========================
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondarParaCima(valor: string): string;
function arredondarParaCima(valor: number): number;
function arredondarParaCima(valor: string | number): string | number {
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
