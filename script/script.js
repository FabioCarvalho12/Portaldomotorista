/* =====================================================
   PORTAL DO MOTORISTA
   JAVASCRIPT — MENU, TEMA E CARROSSEL
   ===================================================== */


/* =====================================================
   ELEMENTOS
   ===================================================== */

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

const themeButton = document.getElementById('themeButton');

const slides = Array.from(
    document.querySelectorAll('.portal-slide')
);

const dotsContainer = document.getElementById('carouselDots');

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


/* =====================================================
   VARIÁVEIS DO CARROSSEL
   ===================================================== */

let currentSlide = 0;
let autoPlay;


/* =====================================================
   MENU MOBILE
   ===================================================== */

function toggleMenu(force) {

    const open =
        typeof force === 'boolean'
            ? force
            : !mobileMenu.classList.contains('active');


    /* Abre/fecha o menu */

    mobileMenu.classList.toggle(
        'active',
        open
    );


    /* Transforma hambúrguer em X */

    menuButton.classList.toggle(
        'active',
        open
    );


    /* Acessibilidade */

    menuButton.setAttribute(
        'aria-expanded',
        String(open)
    );

    menuButton.setAttribute(
        'aria-label',
        open
            ? 'Fechar menu'
            : 'Abrir menu'
    );

    mobileMenu.setAttribute(
        'aria-hidden',
        String(!open)
    );
}


/* =====================================================
   CLIQUE NO BOTÃO
   ===================================================== */

menuButton.addEventListener(
    'click',
    () => toggleMenu()
);


/* =====================================================
   FECHAR MENU AO CLICAR EM UM LINK
   ===================================================== */

mobileMenu
    .querySelectorAll('a')
    .forEach((link) => {

        link.addEventListener(
            'click',
            () => toggleMenu(false)
        );

    });


/* =====================================================
   FECHAR MENU AO CLICAR FORA
   ===================================================== */

document.addEventListener(
    'click',
    (event) => {

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);


        if (
            mobileMenu.classList.contains('active') &&
            !clickedInsideMenu &&
            !clickedButton
        ) {

            toggleMenu(false);

        }

    }
);


/* =====================================================
   FECHAR MENU AO VOLTAR PARA DESKTOP
   ===================================================== */

window.addEventListener(
    'resize',
    () => {

        if (window.innerWidth > 760) {
            toggleMenu(false);
        }

    }
);


/* =====================================================
   TEMA CLARO / ESCURO
   ===================================================== */

themeButton.addEventListener(
    'click',
    () => {

        const dark =
            document.body.classList.toggle('dark');


        themeButton.textContent =
            dark ? '☀' : '◐';


        themeButton.setAttribute(
            'aria-label',
            dark
                ? 'Ativar modo claro'
                : 'Ativar modo escuro'
        );


        localStorage.setItem(
            'portal-theme',
            dark ? 'dark' : 'light'
        );

    }
);


/* =====================================================
   RECUPERAR TEMA SALVO
   ===================================================== */

if (
    localStorage.getItem('portal-theme') === 'dark'
) {

    document.body.classList.add('dark');

    themeButton.textContent = '☀';

    themeButton.setAttribute(
        'aria-label',
        'Ativar modo claro'
    );

}


/* =====================================================
   CRIAR INDICADORES DO CARROSSEL
   ===================================================== */

slides.forEach((_, index) => {

    const dot =
        document.createElement('button');


    dot.type = 'button';


    dot.setAttribute(
        'aria-label',
        `Ir para imagem ${index + 1}`
    );


    dot.addEventListener(
        'click',
        () => {

            showSlide(index);

            restartAutoPlay();

        }
    );


    dotsContainer.appendChild(dot);

});


/* =====================================================
   MOSTRAR SLIDE
   ===================================================== */

function showSlide(index) {

    currentSlide =
        (index + slides.length) %
        slides.length;


    slides.forEach(
        (slide, slideIndex) => {

            slide.classList.toggle(
                'active',
                slideIndex === currentSlide
            );

        }
    );


    dotsContainer
        .querySelectorAll('button')
        .forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    'active',
                    dotIndex === currentSlide
                );

            }
        );
}


/* =====================================================
   PRÓXIMO SLIDE
   ===================================================== */

function nextSlide() {

    showSlide(
        currentSlide + 1
    );

}


/* =====================================================
   SLIDE ANTERIOR
   ===================================================== */

function previousSlide() {

    showSlide(
        currentSlide - 1
    );

}


/* =====================================================
   INICIAR CARROSSEL AUTOMÁTICO
   ===================================================== */

function startAutoPlay() {

    autoPlay =
        window.setInterval(
            nextSlide,
            5000
        );

}


/* =====================================================
   REINICIAR CARROSSEL
   ===================================================== */

function restartAutoPlay() {

    window.clearInterval(autoPlay);

    startAutoPlay();

}


/* =====================================================
   BOTÃO PRÓXIMO
   ===================================================== */

nextButton.addEventListener(
    'click',
    () => {

        nextSlide();

        restartAutoPlay();

    }
);


/* =====================================================
   BOTÃO ANTERIOR
   ===================================================== */

prevButton.addEventListener(
    'click',
    () => {

        previousSlide();

        restartAutoPlay();

    }
);


/* =====================================================
   INICIAR
   ===================================================== */

showSlide(0);

startAutoPlay();