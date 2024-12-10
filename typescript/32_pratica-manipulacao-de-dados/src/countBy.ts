function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: ContadorLista, item) => {
    acc[item] = acc[item] || 0; // captura o valor da propriedade ou inicializa com 0, se ainda não existir
    acc[item] += 1; // soma o valor anterior + 1, a cada nova ocorrência da mesma chave
    // console.log(acc); 💡
    return acc;
  }, {});
}

export default countBy;

// "arr" deve ser uma array de strings ou números porque, se for um array de objetos, dará erro, pois o programa tentará converter cara objeto em string, para ser a chave do objeto que vamos construir 💡

// 1 - POR QUE ESSA FUNÇÃO FUNCIONA TANTO PARA ARRAY DE STRINGS QUANDO PARA ARRAY DE NÚMEROS?
/* 
  Caso 1: Array de strings
    Se o array contiver apenas strings, o código funciona perfeitamente, como o código implementado:

    const pagamentos = ["Boleto", "Cartão de Crédito", "Boleto"];

    const total = pagamentos.reduce((acc: ContadorLista, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    console.log(total); // { Boleto: 2, 'Cartão de Crédito': 1 }
    
    O reduce cria chaves no acumulador (acc) usando as strings do array.
    Incrementa os valores associados às chaves conforme as strings aparecem no array.

  Caso 2: Array de números
    Se o array contiver apenas números, o código também funciona, porque os números podem ser usados como chaves de um objeto em JavaScript. Por exemplo:

    const pagamentos = [1, 2, 1, 3];

    const total = pagamentos.reduce((acc: ContadorLista, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    console.log(total); // { '1': 2, '2': 1, '3': 1 }
    Observação:
    As chaves no objeto resultante serão automaticamente convertidas para strings, mesmo que os números sejam usados como valores no array. 
  
  Caso 3: Array misto (strings e números)
  Se o array contiver uma mistura de strings e números, o código também funcionará, porque tanto strings quanto números podem ser usados como chaves no objeto acumulador. Por exemplo:

  const pagamentos = ["Boleto", 1, "Boleto", 2, 1];

  const total = pagamentos.reduce((acc: ContadorLista, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  console.log(total); // { Boleto: 2, '1': 2, '2': 1 }
  Resultado:
  "Boleto" é contado normalmente.
  Os números 1 e 2 são convertidos em chaves "1" e "2" no objeto.
*/

// 2 - EXPLICAÇÃO DA LÓGICA IMPLEMENTADA NA FUNÇÃO
/* 
  1 - Objeto de referência para o que está acontecendo
    const obj = {
      ["Boleto"]: 30,
      ["Cartão de Crédito"]: 70
    }

  2 - Interface definida para o acumulator (segue a mesma estrutura de referência)
    interface ContadorLista {
      [key: string]: number;
    }

  3 - Quando o código encontra uma chave (item) que ainda não existe no acumulador (acc), ele assume que a contagem inicial é 0. Isso é feito com esta verificação: 
    "acc[item] = acc[item] || 0;"  ...Inicializa com 0, se necessário 💡

    a - acc[item]: Verifica se a chave já existe no objeto acumulador.
    b - acc[item] || 0: Se a chave não existe (ou seja, é undefined), assume que o valor inicial é 0.
    c - Logo, a primeira vez que o reduce encontra um item, ele soma corretamente 0 + 1, representando a primeira ocorrência daquele item no array.
  
  4 - O valor inicial (0) só será usado quando uma chave encontrada ainda não existe no objeto. Isso acontece apenas na primeira ocorrência de cada item. Para ocorrências posteriores, o valor existente no acumulador é utilizado.
    Por exemplo:

    const = pagamentos = ["Boleto", "Cartão de Crédito", "Boleto"]:
    
    a - Primeira iteração: "Boleto" não existe → acc["Boleto"] = 0 + 1 → acc["Boleto"] = 1.
    b - Segunda iteração: "Cartão de Crédito" não existe → acc["Cartão de Crédito"] = 0 + 1 → acc["Cartão de Crédito"] = 1.
    c - Terceira iteração: "Boleto" já existe → acc["Boleto"] = 1 + 1 → acc["Boleto"] = 2.

  5 - Possíveis cenários de erro:
  Um erro poderia ocorrer se o valor inicial fosse algo diferente de 0 ou se não houvesse lógica para verificar a existência da chave. 
    Por exemplo:

    acc[item] = acc[item] + 1; // Erro na primeira ocorrência!

    a - Quando item aparece pela primeira vez, acc[item] é undefined.
    b - undefined + 1 resulta em NaN (Not a Number).
    c - Por isso a inserção + inicialização da propriedade com valor inicial de 0 corrige o bug

  6 - Outras possíveis sintaxes da mesma solução: 
    A - 
    if (acc[item]) {
      acc[item] + 1;
    } else {
      acc[item] = 1; 
    }
    return acc;

    B - 
    acc[item] = (acc[item] || 0) + 1;
    return acc;
*/
