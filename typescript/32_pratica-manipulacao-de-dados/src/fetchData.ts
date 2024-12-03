// Função para buscar dados de uma URL e retornar no formato de uma interface genérica ou null em caso de erro.
async function fetchData<Interface>(url: string): Promise<Interface | null> {
  try {
    const response = await fetch(url);

    // Erro
    if (!response.ok) {
      throw new Error(
        "Não foi possível obter os dados das transações: " + response.status
      );
    }

    // Sucesso
    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.error("fetchData: " + error.message);
    }

    // "Null" garante que o chamador possa lidar com a ausência de dados sem quebrar o código.
    return null;
  }
}

export default fetchData;

/*
  💡 Anotações:

  1. Uso de Generics:
     - A função utiliza a sintaxe de generics (`<Interface>`), permitindo que o chamador especifique o tipo de dados esperado.
     - Isso garante que o retorno seja uma Promise que resolve para o tipo fornecido ou `null` em caso de erro.

  2. Tratamento de erros com `catch`:
     - O bloco `catch` captura qualquer erro lançado dentro do bloco `try`, incluindo o erro explicitamente lançado pela verificação de status HTTP.
     - O objetivo é retornar um valor controlado (`null`) em caso de erro.
     - Justificativa: Erros de fetch não interrompem o código, mas acessar ou iterar sobre dados `undefined` pode causar falhas.

  3. Verificação de instância de `Error`:
     - O `catch` captura qualquer coisa que seja lançada, não apenas instâncias da classe `Error`.
     - Como erros genéricos podem não possuir a propriedade `.message`, a verificação `instanceof Error` é necessária para garantir que o acesso seja seguro.
     - Caso o erro não seja uma instância de `Error`, ele será silenciosamente ignorado.

  4. Uso do retorno `null`:
     - Retornar `null` em caso de erro permite que o chamador trate a ausência de dados de forma previsível.
     - É importante documentar essa possibilidade no contrato da função para evitar comportamentos inesperados.
*/
