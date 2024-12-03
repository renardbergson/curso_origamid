// =============== MANIPULAÇÃO DE DADOS ===============
// 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json

// 2 - Mostre em uma tabela os dados de cada transação.

// 3 - Calcule:

// 3.1 - Soma total dos valores

// 3.2 - Transações por meio de pagamento.

// 3.3 - Transações por status.

// 3.4 - Total de vendas por dia da semana.

// 3.5 - Dia da semana com mais vendas.

// 4 - Mostre as estatísticas na tela.

// 5 - Organize o código em pequenos módulos.

// 6 - Normalize os dados da API, se achar necessário. (remover espaços, remover caracteres especiais, deixar tudo minúsculo, etc)

// Link do projeto de referência: https://www.origamid.com/projetos/typescript/dados/ 💡
// ==================================================================================================
import fetchData from "./fetchData";

type PagamentoTransacao = "Boleto" | "Cartão de Crédito";
type StatusTransacao =
  | "Paga"
  | "Aguardando pagamento"
  | "Recusada pela operadora de cartão"
  | "Estornada";

interface TransacaoAPI {
  ["Status"]: StatusTransacao;
  ["ID"]: number;
  ["Data"]: string;
  ["Nome"]: string;
  ["Forma de Pagamento"]: PagamentoTransacao;
  ["Email"]: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}

const handleData = async () => {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );

  if (data) {
    data.forEach((transacao) => {
      console.log(transacao);
    });
  }
};

handleData();

/* async function fetchData(url: string): Promise<void> {
  try {
    const data = await fetch(url);
    const json = await data.json();
    const stringHTML = await handleData(json);
    handleHTML(stringHTML);
  } catch (error) {
    console.error("Não foi possível obter os dados das transações:" + error);
  }
}

interface Transacao {
  ["Status"]: string;
  ["ID"]: number;
  ["Data"]: string;
  ["Nome"]: string;
  ["Forma de Pagamento"]: "string";
  ["Email"]: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}

interface TransacaoTela {
  nome: string;
  email: string;
  compra: number;
  pagamento: string;
  status: string;
}

function checkInterface<Tipo>(
  data: unknown,
  ...keys: Array<keyof Tipo>
): data is Tipo[] {
  if (
    data &&
    Array.isArray(data) &&
    data.filter((transacao) => {
      typeof transacao === "object" && keys.filter((key) => key in transacao);
    })
  ) {
    return true;
  } else {
    return false;
  }
}

function normalizarTransacao(data: Transacao[]): TransacaoTela[] {
  return data.map((item) => {
    return {
      nome: item.Nome,
      email: item.Email,
      compra: parseFloat(item["Valor (R$)"]),
      pagamento: item["Forma de Pagamento"],
      status: item.Status,
    };
  });
}

async function handleData(data: unknown): Promise<string[] | void> {
  if (
    checkInterface<Transacao>(
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
    const dadosFormatados = normalizarTransacao(data);

    return dadosFormatados.map((transacao) => {
      return `
        <tr>
          <td>${transacao.nome}</td>
          <td>${transacao.email}</td>
          <td>${transacao.compra ? transacao.compra : "-"}</td>
          <td>${transacao.pagamento}</td>
          <td>${transacao.status}</td>
        </tr>
      `;
    });
  } else {
    console.error("Os dados obtidos não têm o formato esperado!");
  }
}

function handleHTML(data: string[] | void) {
  const tableBody = document.querySelector("table tbody");
  if (Array.isArray(data) && tableBody) {
    tableBody.innerHTML += data.join("");
  }
}

fetchData("https://api.origamid.dev/json/transacoes.json");

export default fetchData;
 */
