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

function mostrarQuadrado() {
    var sobreposicao = document.getElementById("sobreposicao");

    document.getElementById("quadrado").style.display = "block";
    document.getElementById("sobreposicao").style.display = "block";
    document.getElementById("sobreposicao").classList.add('borrar');
    document.body.style.overflow = "hidden"; // Permite rolagem da página
    sobreposicao.addEventListener("click", bloquearToque);

    setTimeout(function() {
            document.getElementById("quadrado").style.display ='none';
            document.getElementById("sobreposicao").classList.remove('borrar');
            document.body.style.overflow = "auto"; // Permite rolagem da página
        }, 15000
    )

}

function fecharQuadrado() {
    document.getElementById("quadrado").style.display = "none";
    document.getElementById("sobreposicao").style.display = "none";
    document.body.style.overflow = "auto"; // Permite rolagem da página
}
