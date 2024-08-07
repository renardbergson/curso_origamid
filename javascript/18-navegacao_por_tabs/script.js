const animaisMenu = document.querySelectorAll(".js-animaisMenu li");
const animaisDescricao = document.querySelectorAll(".js-animaisDescricao section");
const className = "ativo";

function mostrarDescricaoAnimal() {
  if (animaisMenu.length && animaisDescricao.length) {
    animaisDescricao[0].classList.add(className);
    
    function ativarDescricao(index) {
      animaisDescricao.forEach((descricao) => {
        descricao.classList.remove(className);
      })
      animaisDescricao[index].classList.add(className);
    }
    
    animaisMenu.forEach((item, index) => {
      item.addEventListener("click", () => ativarDescricao(index));
    })
  }
}

mostrarDescricaoAnimal();