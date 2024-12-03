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
import normalizarTransacao from "./normalizarTransacao";

const handleData = async () => {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );

  if (!data) return; // error

  const transacoes = data.map(normalizarTransacao);
  // Podemos passar a função "normalizarTransacao" diretamente no método .map() porque o .map() aceita uma função como argumento, e essa função é chamada automaticamente para cada elemento do array (data), recebendo como parâmetro o elemento atual de cada iteração. 💡
  // POR QUE ISSO FUNCIONA?
  // A função "normalizarTransacao" está definida para receber um **parâmetro** do tipo "TransacaoAPI" e retorna um **valor** do tipo "Transacao".
  // Essa assinatura corresponde exatamente ao que o .map() espera: uma função que itera sobre cada elemento de uma array (data), retornando uma nova array (transacoes). 💡
  console.log(transacoes);
};

handleData();

/* 
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
