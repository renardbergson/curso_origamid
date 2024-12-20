import MoedaParaNumero from "./moedaParaNumero";
import stringToDate from "./stringToDate";

function normalizarTransacao(transacao: TransacaoAPI): Transacao {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: MoedaParaNumero(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]), // ao invés de 0 e 1
  };
}

export default normalizarTransacao;
