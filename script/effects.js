// adicionar e remover classe hidden e show dos icones habilidades

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // O elemento entrou na área visível, adiciona a classe show
            entry.target.classList.add('show');
        } else {
            // O elemento saiu da área visível, remove a classe show
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));


// verificar seção ativa para hover

// Função que será chamada quando a página for rolada

window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let links = document.querySelectorAll('.navlist li a');
  
    sections.forEach((section, index) => {
      let rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        links[index].classList.add('active');
      } else {
        links[index].classList.remove('active');
      }
    });
  });
  
  // animar botão mobile menu

  const menuDiv = document.getElementById('navlist-mobile');
  const btnAnimation = document.getElementById('mobile-btn');

  menuDiv.addEventListener('click', mobileAnimationButton)

  function mobileAnimationButton(){
    const btnMobile = document.getElementById('mobile-btn');
    btnMobile.classList.toggle('activeMobileBtn');
    menuDiv.classList.toggle('activeNav')
  }