import countBy from "./countBy";

class Estatisticas {
  private transacoes: Transacao[];
  total;
  pagamento;
  status;
  semana;
  melhorDia;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
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

  private setSemana() {
    const semana = {
      ["Domingo"]: 0,
      ["Segunda"]: 0,
      ["Terça"]: 0,
      ["Quarta"]: 0,
      ["Quinta"]: 0,
      ["Sexta"]: 0,
      ["Sábado"]: 0,
    };

    for (let i = 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data.getDay();
      if (day === 0) semana["Domingo"] += 1;
      if (day === 1) semana["Segunda"] += 1;
      if (day === 2) semana["Terça"] += 1;
      if (day === 3) semana["Quarta"] += 1;
      if (day === 4) semana["Quinta"] += 1;
      if (day === 5) semana["Sexta"] += 1;
      if (day === 6) semana["Sábado"] += 1;
    }

    return semana;
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}

export default Estatisticas;

// - Mesmo após a filtragem, do método "setTotal", se não usarmos um type predicate, o TS não entende que cada item agora só poderia ser "number" e não "number | null", por isso criamos o método "filtrarValor", que só pode retornar "true" ou "false", caso a condição seja satisfeita 💡

/*  
  LÓGICA DO MÉTODO "setMelhorDia()":

  1 - O que são os parâmetros
    1.1 - A função nativa sort() pode receber uma função de callback e, nesse caso, utiliza os argumentos "a" e "b".
    1.2 - "a" e "b" podem ser quaisquer dois elementos do array que precisam ser comparados para ordenar o array.
    1.3 - A ordem em que "a" e "b" são escolhidos não segue a sequência exata do array original.

  2 - Cálculo 
    2.1 - A função de comparação determina a posição relativa de "a" e "b" no array.
    2.1 - O valor resultante da comparação (a - b) decide a posição dos elementos na reorganização:
      - Negativo: "a" antes de "b".
      - Zero: os elementos são iguais (sem mudança).
      - Positivo: "b" antes de "a".

  3 - Ordem de reorganização (sintaxe do retorno)
    3.1 - Crescente: a - b
    3.2 - Decrescente: b - a
*/
