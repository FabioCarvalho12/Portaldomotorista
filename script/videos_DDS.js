document.addEventListener("DOMContentLoaded", () => { // ===================================================== // VÍDEOS // ===================================================== const videos = [ { id: "yOBw73gmSMA", title: "Fadiga e Segurança" }, { id: "31bjZnMxt8Q", title: "álcool e Drogas" }, { id: "Zrtv2vQvhu8", title: "Segurança e Responsabilidade" }, { id: "MVJgO0Y2YiA", title: "Descanso e Segurança" } ]; // ===================================================== // MENU HAMBÚRGUER // ===================================================== const menuButton = document.getElementById("menuButton"); const mobileMenu = document.getElementById("mobileMenu"); function closeMobileMenu() { if (!menuButton || !mobileMenu) return; menuButton.classList.remove("active"); mobileMenu.classList.remove("active"); menuButton.setAttribute( "aria-expanded", "false" ); mobileMenu.setAttribute( "aria-hidden", "true" ); } if (menuButton && mobileMenu) { menuButton.addEventListener("click", () => { const isOpen = !mobileMenu.classList.contains("active"); menuButton.classList.toggle( "active", isOpen ); mobileMenu.classList.toggle( "active", isOpen ); menuButton.setAttribute( "aria-expanded", String(isOpen) ); mobileMenu.setAttribute( "aria-hidden", String(!isOpen) ); }); mobileMenu .querySelectorAll("a") .forEach(link => { link.addEventListener( "click", closeMobileMenu ); }); } // ===================================================== // TEMA CLARO / ESCURO // ===================================================== const themeButton = document.getElementById("themeButton"); const savedTheme = localStorage.getItem("portal-theme"); if (savedTheme === "dark") { document.body.classList.add("dark"); } function updateThemeButton() { if (!themeButton) return; const dark = document.body.classList.contains("dark"); themeButton.textContent = dark ? "☀" : "◐"; themeButton.setAttribute( "aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro" ); themeButton.setAttribute( "title", dark ? "Tema claro" : "Tema escuro" ); } updateThemeButton(); if (themeButton) { themeButton.addEventListener("click", () => { document.body.classList.toggle("dark"); const dark = document.body.classList.contains("dark"); localStorage.setItem( "portal-theme", dark ? "dark" : "light" ); updateThemeButton(); }); } // ===================================================== // CARDS DOS VÍDEOS // ===================================================== const videosGrid = document.getElementById("videosGrid"); function createVideoCards() { if (!videosGrid) return; videosGrid.innerHTML = ""; videos.forEach(video => { const card = document.createElement("article"); card.className = "video-card"; card.tabIndex = 0; card.setAttribute( "role", "button" ); card.setAttribute( "aria-label", Abrir ${video.title} ); card.innerHTML = <div class="video-thumbnail"> <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" loading="lazy" > <div class="play-button" aria-hidden="true"> </div> </div> <div class="video-info"> <h3> ${video.title} </h3> </div> ; card.addEventListener("click", () => { openVideo( video.id, video.title ); }); card.addEventListener("keydown", event => { if ( event.key === "Enter" || event.key === " " ) { event.preventDefault(); openVideo( video.id, video.title ); } }); videosGrid.appendChild(card); }); } // ===================================================== // MODAL / PLAYER // ===================================================== const videoModal = document.getElementById("videoModal"); const videoPlayer = document.getElementById("videoPlayer"); const modalTitle = document.getElementById("modalTitle"); const closeModal = document.getElementById("closeModal"); function openVideo(videoId, title) { if (!videoModal || !videoPlayer) return; if (modalTitle) { modalTitle.textContent = title; } // ================================================= // YOUTUBE - CORREÇÃO DO ERRO 153 // ================================================= const origin = window.location.origin; const youtubeUrl = https://www.youtube.com/embed/${videoId} + ?autoplay=1 + &rel=0 + &modestbranding=1 + &playsinline=1 + &origin=${encodeURIComponent(origin)}; videoPlayer.src = youtubeUrl; // Abrir modal videoModal.classList.add("active"); videoModal.setAttribute( "aria-hidden", "false" ); // Bloquear rolagem document.body.classList.add( "modal-open" ); // Fechar menu mobile closeMobileMenu(); } // ===================================================== // FECHAR VÍDEO // ===================================================== function closeVideoModal() { if (!videoModal || !videoPlayer) return; // Para o vídeo videoPlayer.src = ""; // Fecha modal videoModal.classList.remove( "active" ); videoModal.setAttribute( "aria-hidden", "true" ); // Libera rolagem document.body.classList.remove( "modal-open" ); } if (closeModal) { closeModal.addEventListener( "click", closeVideoModal ); } // Fechar clicando fora if (videoModal) { videoModal.addEventListener( "click", event => { if ( event.target === videoModal ) { closeVideoModal(); } } ); } // ===================================================== // TECLA ESC // ===================================================== document.addEventListener( "keydown", event => { if (event.key === "Escape") { closeVideoModal(); closeMobileMenu(); } } ); // ===================================================== // HEADER AO ROLAR // ===================================================== const header = document.querySelector( ".portal-header" ); if (header) { window.addEventListener( "scroll", () => { header.classList.toggle( "scrolled", window.scrollY > 20 ); }, { passive: true } ); } // ===================================================== // INICIALIZAÇÃO // ===================================================== createVideoCards(); });document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // VÍDEOS
    // =====================================================

    const videos = [
        {
            id: "yOBw73gmSMA",
            title: "Fadiga e Segurança"
        },
        {
            id: "31bjZnMxt8Q",
            title: "Álcool e Drogas"
        },
        {
            id: "Zrtv2vQvhu8",
            title: "Segurança e Responsabilidade"
        },
        {
            id: "MVJgO0Y2YiA",
            title: "Descanso e Segurança"
        }
    ];


    // =====================================================
    // MENU HAMBÚRGUER
    // =====================================================

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    function closeMobileMenu() {

        if (!menuButton || !mobileMenu) return;

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

        menuButton.addEventListener("click", () => {

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

        });


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

        if (!themeButton) return;

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

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const dark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "portal-theme",
                dark ? "dark" : "light"
            );

            updateThemeButton();

        });

    }


    // =====================================================
    // CARDS DOS VÍDEOS
    // =====================================================

    const videosGrid =
        document.getElementById("videosGrid");


    function createVideoCards() {

        if (!videosGrid) {
            console.error("Elemento videosGrid não encontrado.");
            return;
        }

        videosGrid.innerHTML = "";


        videos.forEach(video => {

            const card =
                document.createElement("article");

            card.className = "video-card";

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


            // Abrir vídeo ao clicar

            card.addEventListener("click", () => {

                openVideo(
                    video.id,
                    video.title
                );

            });


            // Abrir vídeo pelo teclado

            card.addEventListener("keydown", event => {

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

            });


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
            console.error(
                "Modal ou player não encontrado."
            );
            return;
        }


        if (modalTitle) {
            modalTitle.textContent = title;
        }


        // =================================================
        // YOUTUBE - PLAYER
        // =================================================

        const origin =
            window.location.origin;

        const youtubeUrl =
            `https://www.youtube.com/embed/${videoId}` +
            `?autoplay=1` +
            `&rel=0` +
            `&modestbranding=1` +
            `&playsinline=1` +
            `&origin=${encodeURIComponent(origin)}`;


        videoPlayer.src = youtubeUrl;


        // Abrir modal

        videoModal.classList.add("active");

        videoModal.setAttribute(
            "aria-hidden",
            "false"
        );


        // Bloquear rolagem

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

        if (!videoModal || !videoPlayer) return;


        // Parar vídeo

        videoPlayer.src = "";


        // Fechar modal

        videoModal.classList.remove(
            "active"
        );

        videoModal.setAttribute(
            "aria-hidden",
            "true"
        );


        // Liberar rolagem

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

                if (event.target === videoModal) {

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