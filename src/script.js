
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header')
    const container = document.querySelector('.container')
    const inicioPagina = document.querySelector('.paginaLogo')
    const sessoes = document.querySelectorAll('.containers');
    const menus = document.querySelectorAll('.menu');
    const textos = document.querySelectorAll('.textoMenu');
    const classeAnima = 'atual';
    const animatexto = 'animatexto';
    const animaHeader = 'aparecer'

    function animaScroll() {
        const topoPagina = window.pageYOffset + (window.innerHeight / 3);
        if (topoPagina > inicioPagina.offsetTop) {
            container.classList.remove(animaHeader);
            header.classList.remove(animaHeader)
            menus.forEach(menu => menu.classList.remove(classeAnima));
            textos.forEach(texto => texto.classList.remove(animatexto));

        }
        for (let i = 0; i < sessoes.length; i++) {
            
            if (topoPagina > sessoes[i].offsetTop) {
                container.classList.add(animaHeader);
                header.classList.add(animaHeader);
                menus.forEach(menu => menu.classList.remove(classeAnima));
                textos.forEach(texto => texto.classList.remove(animatexto));
                menus[i].classList.add(classeAnima);
                textos[i].classList.add(animatexto);

            }
        }
    }

    window.addEventListener('scroll', function () {
        animaScroll();
    });

    animaScroll();
});





function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

const linksNavegacao = document.querySelectorAll('.menu');

linksNavegacao.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        scrollToSection(sectionId);
    });
});



const btnTopo = document.getElementById('btnTopo');

btnTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }
});

