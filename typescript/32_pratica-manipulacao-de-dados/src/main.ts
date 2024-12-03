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
import checkInterface from "./checkInterface";
import fetchData from "./fetchData";
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
    console.log(transacoes);
    // Podemos passar a função "normalizarTransacao" diretamente no método .map() porque o .map() aceita uma função como argumento, e essa função é chamada automaticamente para cada elemento do array (data), recebendo como parâmetro o elemento atual de cada iteração. 💡
    // POR QUE ISSO FUNCIONA?
    // A função "normalizarTransacao" está definida para receber um **parâmetro** do tipo "TransacaoAPI" e retorna um **valor** do tipo "Transacao".
    // Essa assinatura corresponde exatamente ao que o .map() espera: uma função que itera sobre cada elemento de uma array (data), retornando uma nova array (transacoes). 💡
  }
};

handleData();
