// colocando data atual no footer
let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1; // Janeiro é 0
let ano = dataAtual.getFullYear();
let dataFormatada = `${dia}/${mes}/${ano}`;
document.getElementById("data").innerHTML = dataFormatada;

// Iteração do MENU


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav.menu a');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });