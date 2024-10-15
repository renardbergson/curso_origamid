const animaisMenu = document.querySelectorAll("[data-content='menu animais'] li");
const animaisDescricao = document.querySelectorAll("[data-content='descricao'] section");
const nomeClasse = "ativo";

function mostrarDescricaoAnimal() {
  if (animaisMenu.length && animaisDescricao.length) {
    animaisDescricao[0].classList.add(nomeClasse);
    
    function ativarDescricao(index) {
      animaisDescricao.forEach((item) => {
        item.classList.remove(nomeClasse);
      })
      const direcaoAnimacao = animaisDescricao[index].dataset.anime;
      animaisDescricao[index].classList.add(nomeClasse, direcaoAnimacao); 
      // * lembre-se: podemos adicionar mais de uma nomeClasse utilizando vírgula! *
      // Note que, NÃO precisamos excluir "nomeClasse", utilizaremos para controlar só o display block!
      // Note que, NÃO há necessidade de excluir o valor obtido do dataset, pois a classe "nomeClasse" se encarregará da exibição
    }
    
    animaisMenu.forEach((item, index) => {
      item.addEventListener("click", () => ativarDescricao(index));
    })
  }
}

export default mostrarDescricaoAnimal;