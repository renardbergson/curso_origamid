/*
    EXERCÍCIO 2

    Cole o código a seguir no arquivo JS e veja que está totalmente funcional, depois resolva os possíveis erros que ocorrerão ao inserir o mesmo código em TS

    Neste exercício haverá um input onde o usuário inserirá um número, noutro campo será calculado e mostrado um valor final, esse valor deve também ser salvo no localStorage, a fim de ser recuperado, caso haja um refresh.

    

    const input = document.querySelector('input');

    const total = localStorage.getItem('total');
    input.value = total;
    calcularGanho(input.value);

    function calcularGanho (value) {
        const p = document.querySelector('p');
        p.innerHTML = `Ganho total: ${ (value + 100) - (value * 0.2) }`;
    }

    function calcularTotal () {
        const value = Number(input.value); // transformando input.value (string) em Number
        localStorage.setItem('total', value); // salvando no localStorage
        calcularGanho(value);
    }

    input.addEventListener('keyup', calcularTotal)
*/

const input = document.querySelector('input');

const total = localStorage.getItem('total');

if (input && total) {
    input.value = total;
    calcularGanho( Number(input.value) );
}

function calcularGanho (value: number) {
    const p = document.querySelector('p');

    if (p) {
        p.innerHTML = `Ganho total: ${ (value + 100) - (value * 0.2) }`;
    }
}

function calcularTotal () {
    if (input) {
        localStorage.setItem('total', input.value); // salvando no localStorage
        calcularGanho( Number(input.value) );
    }
}

if (input) {
    input.addEventListener('keyup', calcularTotal)
}