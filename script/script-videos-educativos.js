document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // VÍDEOS
    // =====================================================

    const videos = [

        {
            id: "CmMffm25ids",
            title: "O QUE FAZ UM INSTRUTOR DE MOTORISTA DE ÔNIBUS"
        },

        {
            id: "z7xgx8Vk1R8",
            title: "10 DICAS de como ser um INSTRUTOR DE MOTORISTA EXCELENTE"
        },

        {
            id: "fzPZYUdbTeI",
            title: "SIMULADO DE MOPP com resposta"
        },

        {
            id: "QJFt45cdi80",
            title: "SIMULADO DE MOPP com resposta"
        },

        {
            id: "snJjm07-afU",
            title: "SIMULADO DE MOPP com resposta"
        },

        {
            id: "Hb_WiZMlhdc",
            title: "SIMULADO TRANSPORTE DE PASSAGEIROS"
        },

        {
            id: "SfJjl50P88A",
            title: "10 QUESTÕES que os alunos MAIS ERRARAM"
        },

        {
            id: "necP5RFMZ8U",
            title: "SIMULADO TRANSPORTE DE PASSAGEIROS"
        },

        {
            id: "-Ttyfx0j6Ho",
            title: "Checklist no Ônibus Florestal"
        },

        {
            id: "8NBri6OEuPU",
            title: "Treinamento - Vídeo 1"
        },

        {
            id: "NV-ziFMkGSs",
            title: "Treinamento - Vídeo 2"
        },

        {
            id: "cuDME9av2X8",
            title: "Treinamento - Vídeo 3"
        },

        {
            id: "fYi5NVQp8c8",
            title: "Treinamento - Vídeo 4"
        },

        {
            id: "bFsn0Si-wUU",
            title: "Treinamento - Vídeo 5"
        },

        {
            id: "APzM8VJBK84",
            title: "Treinamento - Vídeo 6"
        },

        {
            id: "zFutD6ims2w",
            title: "Treinamento - Vídeo 7"
        },

        {
            id: "Lu2S417RFyc",
            title: "Treinamento - Vídeo 8"
        },

        {
            id: "BlulP3XRIiY",
            title: "Treinamento - Vídeo 9"
        }

    ];


    // =====================================================
    // MENU HAMBÚRGUER
    // =====================================================

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


    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    !mobileMenu.classList.contains("active");


                menuButton.classList.toggle(
                    "active",
                    isOpen
                );


                mobileMenu.classList.toggle(
                    "active",
                    isOpen
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                mobileMenu.setAttribute(
                    "aria-hidden",
                    String(!isOpen)
                );

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


    // =====================================================
    // TEMA CLARO / ESCURO
    // =====================================================

    const themeButton =
        document.getElementById("themeButton");


    const savedTheme =
        localStorage.getItem("portal-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }


    function updateThemeButton() {

        if (!themeButton) {
            return;
        }


        const dark =
            document.body.classList.contains("dark");


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
                    dark ? "dark" : "light"
                );


                updateThemeButton();

            }
        );

    }


    // =====================================================
    // CARDS DOS VÍDEOS
    // =====================================================

    const videosGrid =
        document.getElementById("videosGrid");


    function createVideoCards() {

        if (!videosGrid) {
            return;
        }


        videosGrid.innerHTML = "";


        videos.forEach(video => {

            const card =
                document.createElement("article");


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

                    <h3>
                        ${video.title}
                    </h3>

                </div>

            `;


            // Abrir com clique

            card.addEventListener(
                "click",
                () => {

                    openVideo(
                        video.id,
                        video.title
                    );

                }
            );


            // Abrir com teclado

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


            videosGrid.appendChild(card);

        });

    }


    // =====================================================
    // MODAL / PLAYER
    // =====================================================

    const videoModal =
        document.getElementById("videoModal");


    const videoPlayer =
        document.getElementById("videoPlayer");


    const modalTitle =
        document.getElementById("modalTitle");


    const closeModal =
        document.getElementById("closeModal");


    function openVideo(videoId, title) {

        if (!videoModal || !videoPlayer) {
            return;
        }


        // Título

        if (modalTitle) {

            modalTitle.textContent =
                title;

        }


        // URL do YouTube

        const youtubeUrl =
            `https://www.youtube.com/embed/${videoId}` +
            `?autoplay=1` +
            `&rel=0` +
            `&modestbranding=1` +
            `&playsinline=1`;


        videoPlayer.src =
            youtubeUrl;


        // Abrir modal

        videoModal.classList.add(
            "active"
        );


        videoModal.setAttribute(
            "aria-hidden",
            "false"
        );


        // Travar rolagem da página

        document.body.classList.add(
            "modal-open"
        );


        // Fechar menu mobile

        closeMobileMenu();

    }


    // =====================================================
    // FECHAR VÍDEO
    // =====================================================

    function closeVideoModal() {

        if (!videoModal || !videoPlayer) {
            return;
        }


        // Para o vídeo

        videoPlayer.src = "";


        // Fecha modal

        videoModal.classList.remove(
            "active"
        );


        videoModal.setAttribute(
            "aria-hidden",
            "true"
        );


        // Libera rolagem

        document.body.classList.remove(
            "modal-open"
        );

    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeVideoModal
        );

    }


    // Fechar clicando fora do modal

    if (videoModal) {

        videoModal.addEventListener(
            "click",
            event => {

                if (
                    event.target === videoModal
                ) {

                    closeVideoModal();

                }

            }
        );

    }


    // =====================================================
    // TECLA ESC
    // =====================================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeVideoModal();

                closeMobileMenu();

            }

        }
    );


    // =====================================================
    // HEADER AO ROLAR
    // =====================================================

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


    // =====================================================
    // INICIALIZAÇÃO
    // =====================================================

    createVideoCards();

});