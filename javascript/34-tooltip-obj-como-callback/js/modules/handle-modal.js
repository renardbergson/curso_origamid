import nomeClasse from "../script.js";

function handleModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");
  
  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      // não faz sentido haver duas funções estilo "abrirModal" e "fecharModal"
      // geralmente, quando há funções muito parecidas, significa que elas podem ser simplificadas
      containerModal.classList.toggle(nomeClasse);
    }
    
    function cliqueForaModal(event) {
      // quando adicionamos um evento a algum elemento, esse elemento torna-se o "this" 💡
      // neste caso, o "this" é o "containerModal"
      if (event.target === this)
        // não passar o evento (e) que "toggleModal" espera resulta em erros! 💡
        toggleModal(event);
    }
    
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

export default handleModal;