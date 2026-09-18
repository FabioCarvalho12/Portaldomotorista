document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // VÍDEOS
    // =====================================================

    const videos = [
        {
            id: "-Ttyfx0j6Ho",
            title: "Checklist no Ônibus Florestal"
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

        menuButton.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
    }

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = !mobileMenu.classList.contains("active");

            menuButton.classList.toggle("active", isOpen);
            mobileMenu.classList.toggle("active", isOpen);

            menuButton.setAttribute("aria-expanded", String(isOpen));
            mobileMenu.setAttribute("aria-hidden", String(!isOpen));

        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });

    }


    // =====================================================
    // TEMA CLARO / ESCURO
    // =====================================================

    const themeButton = document.getElementById("themeButton");

    const savedTheme = localStorage.getItem("portal-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    function updateThemeButton() {

        if (!themeButton) return;

        const dark = document.body.classList.contains("dark");

        themeButton.textContent = dark ? "☀" : "◐";

        themeButton.setAttribute(
            "aria-label",
            dark ? "Ativar tema claro" : "Ativar tema escuro"
        );

        themeButton.setAttribute(
            "title",
            dark ? "Tema claro" : "Tema escuro"
        );

    }

    updateThemeButton();

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const dark = document.body.classList.contains("dark");

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

    const videosGrid = document.getElementById("videosGrid");

    function createVideoCards() {

        if (!videosGrid) {
            console.error("Elemento videosGrid não encontrado.");
            return;
        }

        videosGrid.innerHTML = "";

        videos.forEach(video => {

            const card = document.createElement("article");

            card.className = "video-card";

            card.tabIndex = 0;

            card.setAttribute("role", "button");

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

            card.addEventListener("click", () => {

                openVideo(video.id, video.title);

            });

            card.addEventListener("keydown", event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openVideo(video.id, video.title);

                }

            });

            videosGrid.appendChild(card);

        });

    }


    // =====================================================
    // MODAL / PLAYER
    // =====================================================

    const videoModal = document.getElementById("videoModal");

    const videoPlayer = document.getElementById("videoPlayer");

    const modalTitle = document.getElementById("modalTitle");

    const closeModal = document.getElementById("closeModal");


    function openVideo(videoId, title) {

        if (!videoModal || !videoPlayer) {

            console.error(
                "Elemento videoModal ou videoPlayer não encontrado."
            );

            return;

        }

        if (modalTitle) {

            modalTitle.textContent = title;

        }

        // URL do vídeo do YouTube

        const youtubeUrl =
            `https://www.youtube.com/embed/${videoId}` +
            `?autoplay=1` +
            `&rel=0` +
            `&modestbranding=1` +
            `&playsinline=1`;

        videoPlayer.src = youtubeUrl;

        videoModal.classList.add("active");

        videoModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add("modal-open");

        closeMobileMenu();

    }


    // =====================================================
    // FECHAR VÍDEO
    // =====================================================

    function closeVideoModal() {

        if (!videoModal || !videoPlayer) return;

        videoPlayer.src = "";

        videoModal.classList.remove("active");

        videoModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("modal-open");

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

    const header = document.querySelector(".portal-header");

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