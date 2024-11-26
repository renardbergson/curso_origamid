"use strict";
// ========== CHECAGEM GENÉRICA DE INTERFACE ==========
// O operador "keyof" pode ser usado para criar funções genéricas utilitárias.
// Por exemplo, vamos criar uma função genérica capaz de verificar se um objeto
// retornado de um JSON possui uma interface do tipo "Jogo" ou do tipo "Livro".
// É basicamente o mesmo princípio utilizado anteriormente (type guards + is),
// só que agora a função será mais genérica, podendo ser reutilizada para verificar ambas as interfaces.
async function fetchData(url) {
    const base = "https://api.origamid.dev/json";
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, ...keys) {
    // console.log(keys)
    if (obj &&
        typeof obj === "object" &&
        keys.filter((key) => key in obj).length === keys.length
    // Utilizamos "filter" ao invés de "every", para obter e comparar o tamanho da array de chaves com o objeto recebido 💡
    ) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData("/jogo.json");
    if (checkInterface(jogo, "nome", "desenvolvedora", "ano", "plataformas")) {
        console.log("Jogo válido:", jogo);
    }
    const livro = await fetchData("/livro.json");
    if (checkInterface(livro, "nome", "autor", "ano", "paginas")) {
        console.log("Livro válido:", livro);
    }
}
handleData();
