// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal ({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-End', 'Designer Gráfico'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




var container = document.querySelector('.home-img');
var img = document.getElementById('img');

container.addEventListener('mousemove', function(e) {
  var rect = container.getBoundingClientRect();
  var x = e.clientX - rect.left; // Coordenada X do mouse dentro do contêiner
  var y = e.clientY - rect.top; // Coordenada Y do mouse dentro do contêiner
  var centerX = rect.width / 2; // Coordenada X do centro do contêiner
  var centerY = rect.height / 2; // Coordenada Y do centro do contêiner
  var rotateX = -(y - centerY) / 10; // Cálculo do ângulo de rotação em X (negativo para inverter a direção)
  var rotateY = (x - centerX) / 10; // Cálculo do ângulo de rotação em Y

  img.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
});

container.addEventListener('mouseout', function() {
  img.style.transform = 'none'; // Redefine a transformação para o estado original
});