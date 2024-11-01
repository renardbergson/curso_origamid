// ===================== EVENTOS E CALLBACK - Exercício =====================
// Utilizando a estrutura HTML/CSS fornecida, crie o script que irá fazer o botão mobile funcionar, isto é, mostrar ou esconder a navegação no modo de visualização mobile (tela tamanho 600px)
/*  
  // Estado dos elementos:

  // 1 - menu inativo:
  // class="" em nav
  // aria-expanded="false" em button
  // aria-label="Abrir Menu" em button

  // 2 - menu ativo:
  // class="active" em nav
  // aria-expanded="true" em button
  // aria-label="Fechar Menu" em button
*/
const button = document.getElementById("btn-mobile");
button?.addEventListener("pointerdown", handleClick);
function handleClick(e: PointerEvent) {
  const alvo = e.currentTarget;
  if (alvo instanceof HTMLElement) {
    const nav = alvo.parentElement;
    nav?.classList.toggle("active");

    const isExpanded = alvo.getAttribute("aria-expanded") === "true";
    alvo.setAttribute("aria-expanded", isExpanded ? "false" : "true");

    const isClosed = alvo.getAttribute("aria-label") === "Abrir Menu";
    alvo.setAttribute("aria-label", isClosed ? "Fechar Menu" : "Abrir Menu");
  }
}
