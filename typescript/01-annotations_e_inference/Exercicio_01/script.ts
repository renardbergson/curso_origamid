/*  
    EXERCÍCIO 1

    Cole a seguinte função JS no arquivo TS e tente resolver os erros que serão apresentados

    function normalizarTexto (texto) {
        return texto.trims().toLowercase();
    }
*/

function normalizarTexto (texto: string) {
    return texto.trim().toLowerCase();
    // .trim() remove espaços
}

const textoOrigem = ' Hello World ';

console.log(normalizarTexto(textoOrigem));