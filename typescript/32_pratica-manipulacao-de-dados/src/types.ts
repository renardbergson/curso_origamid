declare global {
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

  interface Transacao {
    nome: string;
    id: number;
    data: Date;
    status: StatusTransacao;
    email: string;
    moeda: string;
    valor: number | null; // para os valores "-"
    pagamento: PagamentoTransacao;
    novo: boolean;
  }

  type TransacaoNova = Transacao & { valor: number };
  // - Com o uso da interseção ao criar o tipo "TransacaoNova", ela se torna quase uma cópia perfeita da interface "Transacao", com a diferença de que naquela a propriedade "valor" será anotada apenas como sendo do tipo "number", ou seja, essa propriedade será reescrita 💡

  interface ContadorLista {
    [key: string]: number;
  }
}

// Como é um projeto solo/simples, vamos deixar os tipos como acesso global
