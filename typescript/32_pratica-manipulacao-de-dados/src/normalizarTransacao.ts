import MoedaParaNumero from "./moedaParaNumero";

function normalizarTransacao(transacao: TransacaoAPI) {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: transacao.Data,
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: MoedaParaNumero(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]), // ao invés de 0 e 1
  };
}

export default normalizarTransacao;
