document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        {
            category: "Economia de Combustível",
            items: [
                { id: "rFpxvueHpw4", title: "CUIDADOS COM O TURBO" },
                { id: "rnWuTFdfTPg", title: "FREIO MOTOR E FRENAGEM PLANEJADA" },
                { id: "CJT1_pwwfHs", title: "INÉRCIA E GRAVIDADE" },
                { id: "0P-WT6wj3eE", title: "PREVISIBILIDADE E DISTÂNCIA DE SEGMENTO" },
                { id: "yYZi35xCfcE", title: "SUBINDO A SERRA II" },
                { id: "DDQ6Qixt-o0", title: "SUBIR UMA SERRA MAIS RÁPIDO ECONOMIZA COMBUSTÍVEL" }
            ]
        },
        {
            category: "Telemetria",
            items: [
                { id: "9Y1VXhPp76s", title: "TELEMETRIA — TREINAMENTOS DE GESTORES, MOTORISTAS E INSTRUTORES" },
                { id: "3wZ0JaPg85M", title: "IMPORTÂNCIA DA TELEMETRIA PARA O TREINAMENTO DOS MOTORISTAS" },
                { id: "pw5qeQLFpA8", title: "DOMINANDO A TELEMETRIA — O GUIA PARA INICIANTES" },
                { id: "6j6_5odL1xQ", title: "TELEMETRIA & CONDUÇÃO — NA PRÁTICA" }
            ]
        }
    ];

    const videosGroups = document.getElementById("videosGroups");
    const videoModal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
    const modalTitle = document.getElementById("modalTitle");
    const closeModal = document.getElementById("closeModal");

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const themeButton = document.getElementById("themeButton");

    function closeMobileMenu() {
        if (!menuButton || !mobileMenu) return;

        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    }

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const opened = mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active", opened);
            menuButton.setAttribute("aria-expanded", String(opened));
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });
    }

    function updateThemeButton() {
        if (!themeButton) return;

        const isDark = document.body.classList.contains("dark");
        themeButton.textContent = isDark ? "☀" : "◐";
        themeButton.setAttribute(
            "aria-label",
            isDark ? "Ativar tema claro" : "Ativar tema escuro"
        );
        themeButton.setAttribute(
            "title",
            isDark ? "Ativar tema claro" : "Ativar tema escuro"
        );
    }

    if (localStorage.getItem("portal-theme") === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeButton();

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            localStorage.setItem(
                "portal-theme",
                document.body.classList.contains("dark") ? "dark" : "light"
            );

            updateThemeButton();
        });
    }

    function openVideo(id, title) {
        if (!videoModal || !videoPlayer) return;

        videoPlayer.src =
            `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

        if (modalTitle) {
            modalTitle.textContent = title;
        }

        videoModal.classList.add("active");
        videoModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        closeMobileMenu();
    }

    function closeVideo() {
        if (!videoModal || !videoPlayer) return;

        videoPlayer.src = "";
        videoModal.classList.remove("active");
        videoModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    }

    if (closeModal) {
        closeModal.addEventListener("click", closeVideo);
    }

    if (videoModal) {
        videoModal.addEventListener("click", event => {
            if (event.target === videoModal) {
                closeVideo();
            }
        });
    }

    function createVideoGroups() {
        if (!videosGroups) return;

        videosGroups.innerHTML = "";

        videos.forEach(group => {
            const section = document.createElement("section");
            section.className = "video-group";

            const title = document.createElement("h2");
            title.className = "video-group-title";
            title.textContent = group.category;

            const grid = document.createElement("div");
            grid.className = "video-group-grid";

            group.items.forEach(video => {
                const card = document.createElement("article");
                card.className = "video-card";
                card.tabIndex = 0;
                card.setAttribute("role", "button");
                card.setAttribute("aria-label", `Assistir ao vídeo: ${video.title}`);

                const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

                card.innerHTML = `
                    <div class="video-thumbnail">
                        <img src="${thumbnail}" alt="${video.title}" loading="lazy">
                        <span class="play-button" aria-hidden="true"></span>
                    </div>
                    <div class="video-info">
                        <h3>${video.title}</h3>
                    </div>
                `;

                card.addEventListener("click", () => openVideo(video.id, video.title));

                card.addEventListener("keydown", event => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openVideo(video.id, video.title);
                    }
                });

                grid.appendChild(card);
            });

            section.appendChild(title);
            section.appendChild(grid);
            videosGroups.appendChild(section);
        });
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeVideo();
            closeMobileMenu();
        }
    });

    createVideoGroups();
});
