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
    data: string;
    status: string;
    email: string;
    moeda: string;
    valor: number | null; // para os valores "-"
    pagamento: PagamentoTransacao;
    novo: boolean;
  }
}

// Como é um projeto solo/simples, vamos deixar os tipos como acesso global
