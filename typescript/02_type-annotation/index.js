// @ts-check

// =================== TYPE ANNOTATION ===================
// O JavaScript, por padrão, não permite especificar o tipo de dados em variáveis ou parâmetros de funções 💡
// Isso significa que, ao trabalhar com funções, não é possível prever o tipo do argumento que será passado, o que pode levar a erros e falta de sugestões de código
// É aqui que entram as anotações de tipo do TypeScript, que ajudam a prever esses tipos e evitam problemas

// Exemplo de um array de objetos, sem anotação de tipo:
const produtos = [
  { nome: 'O Senhor dos Anéis', tipo: 'livro' },
  { nome: 'A Guerra dos Tronos', tipo: 'livro' },
  { nome: 'Dark Souls', tipo: 'jogo' },
];

// Função para filtrar objetos do tipo 'livro', sem anotação de tipo:
function filtrarLivros(dados) {
  // Sem anotações de tipo, o VS Code não consegue sugerir métodos ou propriedades ao teclar "dados." ou "item." 🔴
  // Isso ocorre porque o JavaScript não sabe a estrutura de "dados" e "item"
  // Mesmo com "@ts-check", esse problema persiste, já que o JS não tem como inferir o tipo sem uma anotação explícita

  return dados.filter((item) => item.tipo === 'livro');
}

// Exibindo os objetos do tipo 'livro':
console.log("Objetos do tipo 'Livro':");
console.log(filtrarLivros(produtos));