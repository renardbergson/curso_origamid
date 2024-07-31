// Navegação por Tabs
// A ideia por trás da navegação por tabs é ter uma lista de itens que controla a visibilidade de uma outra lista, só que de conteúdo. Então, no nosso caso, cada item da primeira lista possuirá um item na segunda lista relacionado a ela
// Note que, nos elementos que iremos manipular, adicionamos uma segunda classe que começa com "js", dessa forma, fica explícito que estaremos manipulando essa classe com javascript. Isso também evita que, caso seja preciso mudar a outra classe principal por algum motivo, tenhamos que alterar isso também no arquivo javascript, ou que isso quebre o funcionamento do projeto

const animaisMenu = document.querySelectorAll(".js-animaisMenu li");
const animaisDescricao = document.querySelectorAll(".js-animaisDescricao section");

if (animaisMenu.length && animaisDescricao.length) { // zero é igual a falso
  animaisDescricao[0].classList.add("ativo");
  
  function ativarDescricao(index) {
    // função de callback
    // recebe o index alvo como parâmetro
    // Sempre que for ativada, remove a classe "ativo" de todas as li`s e adiciona apenas naquela que possui o index alvo
    animaisDescricao.forEach((descricao) => {
      descricao.classList.remove("ativo");
    })
    animaisDescricao[index].classList.add("ativo");
  }
  
  animaisMenu.forEach((item, index) => {
    item.addEventListener("click", () => ativarDescricao(index));
  })
}