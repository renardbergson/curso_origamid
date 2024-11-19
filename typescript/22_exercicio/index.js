"use strict";
// ========================= EXERCÍCIO 1 =========================
// 1 - Crie uma interface UserData para o formulário disponível no HTML
// 2 - Crie uma variável global "userData" no window, ela deve ser um objeto qualquer
// 3 - Adicione um evento de "keyup" ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em "window.UserData" novamente
window.userData = {};
// 3
const form = document.querySelector("#form");
form?.addEventListener("keyup", handleInput);
// 4
function handleInput({ target }) {
    // estamos desestruturando o objeto do evento
    if (target instanceof HTMLInputElement) {
        // Atualizando o objeto global "userData"
        // O nome das propriedades será dinâmico (sintaxe alternativa para string [""])
        window.userData[target.id] = target.value;
        // Enviando o que foi inserido em "window.userData" para a função que guarda no LocalStorage
        handleLocalStorage(window.userData);
    }
}
// 5
function isValidJson(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
}
function handleLocalStorage(data) {
    localStorage.setItem("userData", JSON.stringify(data));
    const userData = localStorage.getItem("userData");
    if (userData && isValidJson(userData)) {
        handleSetUser(userData);
    }
}
// 6
function isUserData(obj) {
    if (obj &&
        typeof obj === "object" &&
        ("nome" in obj || "email" in obj || "cpf" in obj)
    // Utilizar "||" permite recuperar dados parciais, mesmo que nem todos os campos estejam preenchidos 💡
    ) {
        return true;
    }
    else {
        return false;
    }
}
// 7
function handleSetUser(userData) {
    if (isUserData(userData)) {
        // Iterando sobre as entradas do objeto
        // desestruturação de arrays ([]) 💡
        Object.entries(userData).forEach(([chave, valor]) => {
            const input = document.getElementById(chave);
            if (input instanceof HTMLInputElement) {
                input.value = valor;
                window.userData[chave] = valor;
                // ⚠️ Prevenindo um bug onde os dados sumiam se o usuário não preenchesse todos os campos antes de um reload
                // Com isso, garantimos que "userData" seja atualizado aqui também, mesmo após um recarregamento da página
            }
        });
        console.log("Formulário preenchido com os seguintes dados:", userData);
    }
    else {
        console.error("Os dados do usuário não têm o padrão esperado");
    }
}
// Refresh/Load
window.addEventListener("load", () => {
    const user = localStorage.getItem("userData");
    if (user && isValidJson(user)) {
        const parsedUser = JSON.parse(user);
        handleSetUser(parsedUser);
    }
    else {
        console.error("Não foi possível obter os dados do usuário");
    }
});
