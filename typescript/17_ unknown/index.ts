// ========================= UNKNOWN =========================
// A anotação "unknown" indica que não sabemos o tipo de dado que pode ser passado
// Diferentemente da anotação "any", só irá permitir o uso de métodos quando a type safety estiver garantida, caso contrário, o TS sinalizará um erro
// Por isso, é preferível utilizar "unknown", visto que "any" nos faz perder toda a segurança de tipo

function typeGuard(value: unknown) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

console.log(typeGuard("Origamid"));
console.log(typeGuard(200));
console.log(typeGuard(document.body));
