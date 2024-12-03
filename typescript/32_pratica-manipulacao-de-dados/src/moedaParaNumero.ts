/**
 * Converte um valor monetário em formato de string para número.
 * Exemplo de entrada: "1.200,50" ou "-"
 * Exemplo de saída: 1200.50 ou null
 *
 * A função remove os separadores de milhar (.) e substitui a vírgula (,) por ponto (.) para que a string possa ser convertida corretamente para um número.
 *
 * @param moeda - A string representando um valor monetário, como "1.200,50".
 * @returns O valor numérico equivalente ou null se a string não for um número válido.
 *
 * Observação: O JavaScript/TypeScript usa ponto (.) para separar decimais e não usa separador de milhar,
 * portanto a string de entrada precisa ser tratada antes da conversão.
 */
function MoedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
  return isNaN(numero) ? null : numero;
}

export default MoedaParaNumero;

// As anotações acima funcionam como uma pequena documentação
// Ela será mostrada ao permanecer com o mouse sobre o nome da função, no local em que ela for chamada 💡
