/* 
    Para compilar:

    I - tsc "nome do arquivo"   (compilar cada vez)

    ou

    II - tsc --init    +     tsc    (compilar / cria o arquivo tsconfig.json)

    ou

    III - tsc -w    (compilar continuamente)
*/

function somar (a: number, b: number) : number {
    // exemplo básico de type annotations
    return a + b;
}

console.log(somar(5,20));