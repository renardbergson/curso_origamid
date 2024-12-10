// =============== MANIPULAÇÃO DE DADOS ===============
// 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json

// 2 - Organize o código em pequenos módulos.

// 5 - Normalize os dados da API, se achar necessário. (remover espaços, remover caracteres especiais, deixar tudo minúsculo, etc)

// 4 - Mostre em uma tabela os dados de cada transação.

// 5 - Calcule:

// 5.1 - Soma total dos valores

// 5.2 - Transações por meio de pagamento.

// 5.3 - Transações por status.

// 5.4 - Total de vendas por dia da semana.

// 5.5 - Dia da semana com mais vendas.

// 6 - Mostre as estatísticas na tela.

// Link do projeto de referência: https://www.origamid.com/projetos/typescript/dados/ 💡
// ==================================================================================================
import checkInterface from "./checkInterface";
import Estatisticas from "./Estatisticas";
import fetchData from "./fetchData";
import formatarEmReal from "./formatarEmReal";
import normalizarTransacao from "./normalizarTransacao";

const handleData = async () => {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?" // "?" p/ pegar o mais atual possível
  );

  if (!data) return; // error

  if (
    checkInterface<TransacaoAPI>(
      data,
      "Status",
      "ID",
      "Data",
      "Nome",
      "Forma de Pagamento",
      "Email",
      "Valor (R$)",
      "Cliente Novo"
    )
  ) {
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    // Podemos passar a função "normalizarTransacao" diretamente no método .map() porque o .map() aceita uma função como argumento, e essa função é chamada automaticamente para cada elemento do array (data), recebendo como parâmetro o elemento atual de cada iteração. 💡
    // POR QUE ISSO FUNCIONA?
    // A função "normalizarTransacao" está definida para receber um **parâmetro** do tipo "TransacaoAPI" e retorna um **valor** do tipo "Transacao".
    // Essa assinatura corresponde exatamente ao que o .map() espera: uma função que itera sobre cada elemento de uma array (data), retornando uma nova array (transacoes). 💡
  } else {
    throw new Error("Os dados obtidos não possuem o formato esperado!");
  }
};

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody");

  if (!tabela) return; // error

  transacoes.forEach((transacao) => {
    let style = transacao.valor === null ? "center" : "left";

    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td style="text-align: ${style};">
          ${transacao.valor ? formatarEmReal(transacao.valor) : "-"}
        </td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `;
  });

  preencherEstatisticas(transacoes);
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = `${formatarEmReal(data.total)}`;
  }

  function preencherListas(lista: ContadorLista, parentElementID: string) {
    const parentElement = document.getElementById(parentElementID);

    if (parentElement) {
      Object.keys(lista).forEach((key) => {
        parentElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
      });
    }
  }

  preencherListas(data.pagamento, "pagamento");
  preencherListas(data.status, "status");
}

handleData();
