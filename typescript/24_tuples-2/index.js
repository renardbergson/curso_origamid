"use strict";
// ========================= TUPLES - EXERCÍCIO =========================
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - OPCIONAL: imprima os dados na tela (fiz por conta própria)
// 4 - Some o total das vendas e mostre na tela
// 1
async function fetchVendas() {
    const data = await fetch("https://api.origamid.dev/json/vendas.json");
    const json = await data.json();
    const vendas = handleData(json);
    if (vendas)
        mostrarNaTela(vendas.join(""));
}
// Definir "Venda" como "type" especifica uma tupla com um número fixo de elementos e seus respectivos tipos 💡
// A presença de colchetes na definição é uma característica exclusiva de tuplas 💡
// 3
function isVenda(data) {
    return (Array.isArray(data) &&
        data.every((venda) => Array.isArray(venda) &&
            typeof venda[0] === "string" &&
            typeof venda[1] === "number" &&
            typeof venda[2] === "string" &&
            typeof venda[3] === "object" &&
            "marca" in venda[3] &&
            "cor" in venda[3] &&
            typeof venda[3].marca === "string" &&
            typeof venda[3].cor === "string"));
}
function handleData(data) {
    if (isVenda(data)) {
        let totalVendas = 0;
        function formatarPreco(preco) {
            return preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            });
        }
        return data.map((venda, index) => {
            const [produto, preco, dataHora, detalhesVenda] = venda;
            totalVendas += preco;
            const dataVenda = dataHora.split(" ")[0].split("-").reverse().join("-");
            const horaVenda = dataHora.split(" ")[1];
            return `
        <ul>
          <li>
            <h3>${produto}</h3>
            <p>Preço: ${formatarPreco(preco)}</p>
            <p>Data: ${dataVenda}</p>
            <p>Hora: ${horaVenda}</p>
            <p>Marca: ${detalhesVenda.marca}</p>
            <p>Cor: ${detalhesVenda.cor}</p>
          </li>
        </ul>
        ${index === data.length - 1
                ? `<br> 
              <p>TOTAL EM VENDAS: <b>${formatarPreco(totalVendas)}</b></p>`
                : ""}
      `;
        });
    }
    else {
        console.error("As vendas não possuem o formato esperado!");
    }
}
function mostrarNaTela(vendas) {
    document.body.innerHTML += vendas;
}
fetchVendas();
// ================ PONTO DE REFLEXÃO ================ 💡
// Por que a API retorna uma array de arrays e não uma array de objetos?
// Retornar uma array de objetos aumenta o consumo de bytes, já que cada chave + valor ocupa espaço adicional.
// Em situações com milhares ou milhões de registros, o formato compacto (como arrays) é mais eficiente para armazenamento e transmissão de dados.
// No lado do cliente, ao definirmos tuplas e adaptarmos os dados para manipulação, conseguimos manter o código legível e funcional.
// Essa escolha de design está alinhada a boas práticas de otimização em bancos de dados e comunicação entre sistemas.
