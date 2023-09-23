window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});
document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('.header')
    const container = document.querySelector('.container')
    const inicioPagina = document.querySelector('.primeira_pagina')
    const sessoes = document.querySelectorAll('.pagina');
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
            if (i == 0) {
                if(topoPagina > 350){
                    container.classList.add(animaHeader);
                    header.classList.add(animaHeader);
                    menus.forEach(menu => menu.classList.remove(classeAnima));
                    textos.forEach(texto => texto.classList.remove(animatexto));
                    menus[i].classList.add(classeAnima);
                    textos[i].classList.add(animatexto);
                }
            }
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

    const paginaLogo = document.getElementById('primeira_pagina'); // Substitua pelo ID correto da sua seção de logo
    let lastScrollY = window.scrollY;

    function applyBlur() {
        const blurAmount = Math.min(20, Math.max(0, lastScrollY / 200)); // Ajuste o valor conforme desejado
        paginaLogo.style.filter = `blur(${blurAmount}px)`;
    }

    function handleScroll() {
        lastScrollY = window.scrollY;
        applyBlur();
    }

    window.addEventListener('scroll', handleScroll);

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

const setaBaixo = document.querySelector('#botao_saiba_mais')

setaBaixo.addEventListener('click', function(){
    const pagina = document.querySelector('.pagina')
    const segundaPaginaOffsetTop = pagina.offsetTop
    window.scrollTo({
        
        top: segundaPaginaOffsetTop,
        behavior: 'smooth'
    });

})


const botao_footer_arandu = document.querySelector('#botao_footer_arandu')
botao_footer_arandu.addEventListener('click', function(){
    const segunda_pagina = document.querySelector('#segunda_pagina')
    const segunda_pagina_offset = segunda_pagina.offsetTop
    window.scrollTo({
        top: segunda_pagina_offset,
        behavior: "smooth"
    })
})


const botao_footer_projetos = document.querySelector('#botao_footer_projetos')
botao_footer_projetos.addEventListener('click', function(){
    const terceira_pagina = document.querySelector('#terceira_pagina')
    const terceira_pagina_offset = terceira_pagina.offsetTop
    window.scrollTo({
        top: terceira_pagina_offset,
        behavior: "smooth"
    })
})

const logo_minimal_footer = document.querySelector('#svg-footer-logo_minimal')
logo_minimal_footer.addEventListener('click', function(){
    location.reload()
})


const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if(entry.intersectionRatio >= 1){
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})


const frase = document.querySelector('.frase-primeira_pagina')

frase.addEventListener('animationend', () => {
    frase.classList.add('wrap')
})

