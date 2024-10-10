// 1 - Adicione um atributo data-anime="show-down" e data-anime="show-right" nas section's com descricão dos animais, de modo que uma tenha a animação vindo da esquerda para a direita e outra vindo de cima para baixo ✅
/*  
  <section data-anime="show-right"> ... </section>
  <section data-anime="show-down"> ... </section>
*/

// 2 - Utilizando estes atributos, adicione a classe "show-down" ou "show-right" à sua respectiva section, assim que ela aparecer na tela (animacao tab) ✅
const animaisMenu = document.querySelectorAll("[data-content='menu animais'] li");
const animaisDescricao = document.querySelectorAll("[data-content='descricao'] section");

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

mostrarDescricaoAnimal();

// 3 - No CSS faça com que "show-down" anime de cima para baixo e "show-right" continue com a mesma animação da esquerda para a direita ✅
/*  
  [data-content='descricao'] section.ativo {
    display: block;
  }

  [data-content='descricao'] section.ativo.show-right {
    animation: show-right .6s forwards ease;
    position: relative;
  }

  [data-content='descricao'] section.ativo.show-down {
    animation: show-down .6s forwards ease;
    position: relative;
  }

  @keyframes show-right {
    from {
      opacity: 0;
      left: -30px;
    }
    to {
      opacity: 1;
      left: 0;
    }
  }

  @keyframes show-down {
    from {
      opacity: 0;
      top: -30px;
    }
    to {
      opacity: 1;
      top: 0;
    }
  }
*/

// 4 - Substitua todas as classes js- por data atributes, a fim de deixar as classes mais concisas e os elementos html menos poluidos ✅
// Verifique os arquivos index.html, style.css e script.js para conferir as mudanças!