import countBy from "./countBy";

class Estatisticas {
  private transacoes: Transacao[];
  total: number;
  pagamento;
  status;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  private filtrarValor(transacao: Transacao): transacao is TransacaoNova {
    return transacao.valor !== null;
  }

  private setTotal() {
    const filtrado = this.transacoes
      .filter(this.filtrarValor)
      .reduce((acc, item) => {
        return acc + item.valor;
      }, 0);

    return filtrado;
  }

  private setPagamento() {
    const pagamentos = this.transacoes.map(({ pagamento }) => pagamento); // destructuring
    const total = countBy(pagamentos);
    return total;
  }

  private setStatus() {
    const listaStatus = this.transacoes.map(({ status }) => status); // destructuring
    const status = countBy(listaStatus);
    return status;
  }
}

export default Estatisticas;

// - Mesmo após a filtragem, do método "setTotal", se não usarmos um type predicate, o TS não entende que cada item agora só poderia ser "number" e não "number | null", por isso criamos o método "filtrarValor", que só pode retornar "true" ou "false", caso a condição seja satisfeita 💡
