
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PORTAL DO MOTORISTA
       VÍDEOS E TUTORIAIS
       JAVASCRIPT COMPLETO
       ===================================================== */


    /* =====================================================
       VÍDEOS
       ===================================================== */

    const videos = [
        {
            id: "-Ttyfx0j6Ho",
            title: "Checklist no Ônibus Florestal"
        }
    ];


    /* =====================================================
       MENU HAMBÚRGUER
       ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    function closeMobileMenu() {

        if (!menuButton || !mobileMenu) {
            return;
        }

        menuButton.classList.remove("active");

        mobileMenu.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    function openMobileMenu() {

        if (!menuButton || !mobileMenu) {
            return;
        }

        menuButton.classList.add("active");

        mobileMenu.classList.add("active");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.contains(
                        "active"
                    );

                if (isOpen) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            });

    }


    /* =====================================================
       TEMA CLARO / ESCURO
       ===================================================== */

    const themeButton =
        document.getElementById(
            "themeButton"
        );


    const savedTheme =
        localStorage.getItem(
            "portal-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

    }


    function updateThemeButton() {

        if (!themeButton) {
            return;
        }


        const dark =
            document.body.classList.contains(
                "dark"
            );


        themeButton.textContent =
            dark ? "☀" : "◐";


        themeButton.setAttribute(
            "aria-label",
            dark
                ? "Ativar tema claro"
                : "Ativar tema escuro"
        );


        themeButton.setAttribute(
            "title",
            dark
                ? "Tema claro"
                : "Tema escuro"
        );

    }


    updateThemeButton();


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "dark"
                );


                const dark =
                    document.body.classList.contains(
                        "dark"
                    );


                localStorage.setItem(
                    "portal-theme",
                    dark
                        ? "dark"
                        : "light"
                );


                updateThemeButton();

            }
        );

    }


    /* =====================================================
       CARROSSEL
       ===================================================== */

    const carousel =
        document.querySelector(
            ".portal-carousel"
        );


    const carouselTrack =
        document.getElementById(
            "carouselTrack"
        );


    const slides =
        Array.from(
            document.querySelectorAll(
                ".portal-slide"
            )
        );


    const prevButton =
        document.getElementById(
            "prevButton"
        );


    const nextButton =
        document.getElementById(
            "nextButton"
        );


    const carouselDots =
        document.getElementById(
            "carouselDots"
        );


    /*
       O carrossel somente é inicializado
       quando todos os elementos necessários
       existem na página.
    */

    if (
        carousel &&
        carouselTrack &&
        slides.length > 0 &&
        prevButton &&
        nextButton &&
        carouselDots
    ) {

        let currentSlide = 0;

        let autoPlayTimer = null;

        let isAnimating = false;

        let touchStartX = 0;

        let touchEndX = 0;


        /*
           Tempo entre os slides.
        */

        const AUTO_PLAY_TIME = 5000;


        /*
           Distância mínima para reconhecer
           um swipe.
        */

        const MINIMUM_SWIPE = 50;


        /* =================================================
           PREPARA SLIDES
           ================================================= */

        slides.forEach(
            (slide, index) => {

                slide.setAttribute(
                    "aria-hidden",
                    index === 0
                        ? "false"
                        : "true"
                );

            }
        );


        /* =================================================
           CRIA INDICADORES
           ================================================= */

        carouselDots.innerHTML = "";


        slides.forEach(
            (slide, index) => {

                const dot =
                    document.createElement(
                        "button"
                    );


                dot.type = "button";


                dot.setAttribute(
                    "aria-label",
                    `Ir para o slide ${index + 1}`
                );


                dot.setAttribute(
                    "aria-controls",
                    "carouselTrack"
                );


                if (index === 0) {

                    dot.classList.add(
                        "active"
                    );

                    dot.setAttribute(
                        "aria-current",
                        "true"
                    );

                }


                dot.addEventListener(
                    "click",
                    () => {

                        goToSlide(index);

                        restartAutoPlay();

                    }
                );


                carouselDots.appendChild(
                    dot
                );

            }
        );


        const dots =
            Array.from(
                carouselDots.querySelectorAll(
                    "button"
                )
            );


        /* =================================================
           ATUALIZA CARROSSEL
           ================================================= */

        function updateCarousel() {

            slides.forEach(
                (slide, index) => {

                    const active =
                        index === currentSlide;


                    slide.classList.toggle(
                        "active",
                        active
                    );


                    slide.setAttribute(
                        "aria-hidden",
                        active
                            ? "false"
                            : "true"
                    );

                }
            );


            dots.forEach(
                (dot, index) => {

                    const active =
                        index === currentSlide;


                    dot.classList.toggle(
                        "active",
                        active
                    );


                    if (active) {

                        dot.setAttribute(
                            "aria-current",
                            "true"
                        );

                    } else {

                        dot.removeAttribute(
                            "aria-current"
                        );

                    }

                }
            );

        }


        /* =================================================
           IR PARA SLIDE
           ================================================= */

        function goToSlide(index) {

            if (isAnimating) {
                return;
            }


            /*
               Volta para o último slide.
            */

            if (index < 0) {

                index =
                    slides.length - 1;

            }


            /*
               Volta para o primeiro slide.
            */

            if (index >= slides.length) {

                index = 0;

            }


            /*
               Evita animação desnecessária.
            */

            if (index === currentSlide) {
                return;
            }


            isAnimating = true;


            currentSlide = index;


            updateCarousel();


            setTimeout(
                () => {

                    isAnimating = false;

                },
                600
            );

        }


        /* =================================================
           PRÓXIMO SLIDE
           ================================================= */

        function nextSlide() {

            goToSlide(
                currentSlide + 1
            );

        }


        /* =================================================
           SLIDE ANTERIOR
           ================================================= */

        function previousSlide() {

            goToSlide(
                currentSlide - 1
            );

        }


        /* =================================================
           BOTÃO PRÓXIMO
           ================================================= */

        nextButton.addEventListener(
            "click",
            () => {

                nextSlide();

                restartAutoPlay();

            }
        );


        /* =================================================
           BOTÃO ANTERIOR
           ================================================= */

        prevButton.addEventListener(
            "click",
            () => {

                previousSlide();

                restartAutoPlay();

            }
        );


        /* =================================================
           AUTOPLAY
           ================================================= */

        function startAutoPlay() {

            stopAutoPlay();


            autoPlayTimer =
                setInterval(
                    () => {

                        nextSlide();

                    },
                    AUTO_PLAY_TIME
                );

        }


        function stopAutoPlay() {

            if (
                autoPlayTimer !== null
            ) {

                clearInterval(
                    autoPlayTimer
                );

                autoPlayTimer = null;

            }

        }


        function restartAutoPlay() {

            stopAutoPlay();

            startAutoPlay();

        }


        /* =================================================
           PAUSAR AO PASSAR O MOUSE
           ================================================= */

        carousel.addEventListener(
            "mouseenter",
            () => {

                stopAutoPlay();

            }
        );


        carousel.addEventListener(
            "mouseleave",
            () => {

                startAutoPlay();

            }
        );


        /* =================================================
           PAUSAR QUANDO O CARROSSEL RECEBE FOCO
           ================================================= */

        carousel.addEventListener(
            "focusin",
            () => {

                stopAutoPlay();

            }
        );


        carousel.addEventListener(
            "focusout",
            () => {

                startAutoPlay();

            }
        );


        /* =================================================
           VISIBILIDADE DA ABA
           ================================================= */

        document.addEventListener(
            "visibilitychange",
            () => {

                if (document.hidden) {

                    stopAutoPlay();

                } else {

                    startAutoPlay();

                }

            }
        );


        /* =================================================
           TECLADO
           ================================================= */

        carousel.setAttribute(
            "tabindex",
            "0"
        );


        carousel.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "ArrowLeft"
                ) {

                    event.preventDefault();

                    previousSlide();

                    restartAutoPlay();

                }


                if (
                    event.key === "ArrowRight"
                ) {

                    event.preventDefault();

                    nextSlide();

                    restartAutoPlay();

                }

            }
        );


        /* =================================================
           SWIPE — TOUCHSTART
           ================================================= */

        carousel.addEventListener(
            "touchstart",
            event => {

                touchStartX =
                    event.changedTouches[0]
                        .screenX;

                touchEndX =
                    touchStartX;

                stopAutoPlay();

            },
            {
                passive: true
            }
        );


        /* =================================================
           SWIPE — TOUCHEND
           ================================================= */

        carousel.addEventListener(
            "touchend",
            event => {

                touchEndX =
                    event.changedTouches[0]
                        .screenX;


                const difference =
                    touchStartX -
                    touchEndX;


                /*
                   Se o movimento foi pequeno,
                   não troca de slide.
                */

                if (
                    Math.abs(difference) <
                    MINIMUM_SWIPE
                ) {

                    startAutoPlay();

                    return;

                }


                /*
                   Arrastou para a esquerda.
                */

                if (difference > 0) {

                    nextSlide();

                }


                /*
                   Arrastou para a direita.
                */

                else {

                    previousSlide();

                }


                restartAutoPlay();

            },
            {
                passive: true
            }
        );


        /* =================================================
           SWIPE — CANCELAMENTO
           ================================================= */

        carousel.addEventListener(
            "touchcancel",
            () => {

                startAutoPlay();

            },
            {
                passive: true
            }
        );


        /* =================================================
           ESTADO INICIAL
           ================================================= */

        updateCarousel();

        startAutoPlay();

    }


    /* =====================================================
       CARDS DOS VÍDEOS
       ===================================================== */

    const videosGrid =
        document.getElementById(
            "videosGrid"
        );


    function createVideoCards() {

        /*
           Se esta página não possuir
           #videosGrid, não altera os
           cards que já estão no HTML.
        */

        if (!videosGrid) {
            return;
        }


        videosGrid.innerHTML = "";


        videos.forEach(
            video => {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "video-card";


                card.tabIndex = 0;


                card.setAttribute(
                    "role",
                    "button"
                );


                card.setAttribute(
                    "aria-label",
                    `Abrir ${video.title}`
                );


                card.innerHTML = `

                    <div class="video-thumbnail">

                        <img
                            src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
                            alt="${video.title}"
                            loading="lazy"
                        >

                        <div
                            class="play-button"
                            aria-hidden="true">
                        </div>

                    </div>

                    <div class="video-info">

                        <h3>${video.title}</h3>

                    </div>

                `;


                card.addEventListener(
                    "click",
                    () => {

                        openVideo(
                            video.id,
                            video.title
                        );

                    }
                );


                card.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {

                            event.preventDefault();


                            openVideo(
                                video.id,
                                video.title
                            );

                        }

                    }
                );


                videosGrid.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       MODAL / PLAYER
       ===================================================== */

    const videoModal =
        document.getElementById(
            "videoModal"
        );


    const videoPlayer =
        document.getElementById(
            "videoPlayer"
        );


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    const closeModal =
        document.getElementById(
            "closeModal"
        );


    function openVideo(
        videoId,
        title
    ) {

        if (
            !videoModal ||
            !videoPlayer
        ) {

            console.warn(
                "Modal de vídeo não encontrado nesta página."
            );

            return;

        }


        if (modalTitle) {

            modalTitle.textContent =
                title;

        }


        const youtubeUrl =
            `https://www.youtube.com/embed/${videoId}` +
            `?autoplay=1` +
            `&rel=0` +
            `&modestbranding=1` +
            `&playsinline=1`;


        videoPlayer.src =
            youtubeUrl;


        videoModal.classList.add(
            "active"
        );


        videoModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );


        closeMobileMenu();

    }


    /* =====================================================
       FECHAR MODAL
       ===================================================== */

    function closeVideoModal() {

        if (
            !videoModal ||
            !videoPlayer
        ) {

            return;

        }


        /*
           Remove o src para interromper
           completamente o vídeo.
        */

        videoPlayer.src = "";


        videoModal.classList.remove(
            "active"
        );


        videoModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    /* =====================================================
       BOTÃO FECHAR MODAL
       ===================================================== */

    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeVideoModal
        );

    }


    /* =====================================================
       FECHAR CLICANDO FORA
       ===================================================== */

    if (videoModal) {

        videoModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    videoModal
                ) {

                    closeVideoModal();

                }

            }
        );

    }


    /* =====================================================
       TECLA ESC
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeVideoModal();

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       HEADER AO ROLAR
       ===================================================== */

    const header =
        document.querySelector(
            ".portal-header"
        );


    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                header.classList.toggle(
                    "scrolled",
                    window.scrollY > 20
                );

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       FECHAR MENU AO REDIMENSIONAR
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 760
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       INICIALIZAÇÃO
       ===================================================== */

    createVideoCards();

});
