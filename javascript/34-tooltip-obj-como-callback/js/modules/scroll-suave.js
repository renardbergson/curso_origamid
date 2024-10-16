const linksInternos = document.querySelectorAll("[data-content='menu'] a[href^='#']");

function scrollSuave() {
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        let topo = section.offsetTop;
  
        window.scrollTo({
          top: topo,
          behavior: "smooth"
        });
  
        // ALTERNATIVA
        /* section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }); */
      })
    })
  }
}

export default scrollSuave;