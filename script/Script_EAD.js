
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================
       CADASTRO DOS CURSOS
       Adicione os cursos dentro da categoria.
    ========================================= */

    const gruposCursos = [
       {
categoria: "SEST SENAT",

cursos: [
    {
        imagem: "Imagens/Imagens cursos/Sinalização de veículos e equipamentos para transporte rodoviário de produtos perigosos.png",
        titulo: "Sinalização de veículos e equipamentos para transporte rodoviário de produtos perigosos",
        descricao: "Aprenda a aplicar corretamente os requisitos de sinalização no transporte rodoviário de produtos perigosos.",
        link: "https://digital.sestsenat.org.br/cursos/sinalizacao-de-veiculos-e-equipamentos-para-transporte-rodoviario-de-produtos-perigosos",
        categoria: "ONLINE",
        selo: "SEST SENAT",
        preco: "Gratuito"
    },
    {
        imagem: "Imagens/Imagens cursos/Olho Vivo - Prevenção de Comportamentos Inseguros para Motoristas - 2026.jpeg",
        titulo: "Olho Vivo - Prevenção de Comportamentos Inseguros para Motoristas - 2026",
        descricao: "Nesse curso você vai aprender mais sobre prevenção de comportamentos inseguros na condução de veículos.",
        link: "https://digital.sestsenat.org.br/cursos/olho-vivo-prevencao-de-comportamentos-inseguros-para-motoristas-2026",
        categoria: "ONLINE",
        selo: "SEST SENAT",
        preco: "Gratuito"
    },
    {
        imagem: "Imagens/Imagens cursos/TRANSPORTE SEGURO Gestão da Segurança no Transporte de Cargas.jpg",
        titulo: "[TRANSPORTE SEGURO] | Gestão da Segurança no Transporte de Cargas",
        descricao: "Conheça o desenvolvimento do setor de transporte no Brasil, sua importância para o país e saiba como o cenário de roubo e furto de cargas pode afetar o setor.",
        link: "https://digital.sestsenat.org.br/cursos/transporte-seguro-gestao-da-seguranca-no-transporte-de-cargas",
        categoria: "ONLINE",
        selo: "SEST SENAT",
        preco: "Gratuito"
    },
    {
        imagem: "Imagens/Imagens cursos/[TRANSPORTE SEGURO]  Ferramentas tecnológicas.jpg",
        titulo: "[TRANSPORTE SEGURO] | Ferramentas tecnológicas",
        descricao: "Tecnologia e segurança para o transporte eficiente!",
        link: "https://digital.sestsenat.org.br/cursos/transporte-seguro-ferramentas-tecnologicas",
        categoria: "ONLINE",
        selo: "SEST SENAT",
        preco: "Gratuito"
    },
    {
        imagem: "Imagens/Imagens cursos/[TRANSPORTE SEGURO]  Recrutamento e seleção para empresas transportadoras de cargas.jpg",
        titulo: "[TRANSPORTE SEGURO] | Recrutamento e seleção para empresas transportadoras de cargas",
        descricao: "Eficiência no transporte começa com a seleção de talentos.",
        link: "https://digital.sestsenat.org.br/cursos/transporte-seguro-recrutamento-e-selecao-para-empresas-transportadoras-de-cargas",
        categoria: "ONLINE",
        selo: "SEST SENAT",
        preco: "Gratuito"
    },
    {
        imagem: "Imagens/Imagens cursos/[TRANSPORTE SEGURO]  Postura e comportamento de segurança.png",
        titulo: "[TRANSPORTE SEGURO] | Postura e comportamento de segurança",
        descricao: "Curso da trilha TRANSPORTE SEGURO, nível básico, voltado a gestores de risco, gestores de operação no setor transportador e agentes públicos, com foco no alinhamento dos conhecimentos sobre postura e comportamento de segurança.",
        link: "https://digital.sestsenat.org.br/cursos/transporte-seguro-postura-e-comportamento-de-seguranca",
        categoria: "ONLINE",
        selo: "SEST SENAT",
        preco: "Gratuito"
    }
]


}
,

       {
categoria: "Escola MobiFácil",


cursos: [

    {
        imagem: "Imagens/Imagens cursos/Capacitação em Compliance.png",
        titulo: "Capacitação em Compliance",
        descricao: "Conheça os valores, as normas e as diretrizes que orientam o comportamento dos profissionais do Grupo Comporte. Conteúdo obrigatório.",
        link: "https://www.escolamobifacil.com.br/catalog?view=MmM2ZGQ4OWMzZGMyYzQ2OTA5OTQ4NzEwMGY4Nzc0OGU3",
        categoria: "OBRIGATÓRIO",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },
    {
        imagem: "Imagens/Imagens cursos/Telemetria.png",
        titulo: "Telemetria",
        descricao: "Vídeo de engajamento sobre telemetria, com foco na conscientização e no acompanhamento da condução dos motoristas.",
        link: "https://www.escolamobifacil.com.br/catalog?view=NjAzNDc0NDYwZjA1MDRiZTM5MDEyNTUxN2U2Zjk1OWQ5",
        categoria: "TREINAMENTO",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },
    {
        imagem: "Imagens/Imagens cursos/Mercedes Benz  Tecnologia Euro 6.png",
        titulo: "Mercedes-Benz | Tecnologia Euro 6",
        descricao: "Conheça a tecnologia Euro 6 e os investimentos realizados pelo Grupo Comporte em 2023, com a aquisição de 682 novos ônibus mais eficientes e sustentáveis.",
        link: "https://www.escolamobifacil.com.br/catalog?view=MDZhOGMyNGZlZWUyYzQ3YmNhNThjZGI4MjljZWZiNTZm",
        categoria: "TREINAMENTO",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },
    {
        imagem: "Imagens/Imagens cursos/Padrão Comporte de Condução.png",
        titulo: "Padrão Comporte de Condução",
        descricao: "Material desenvolvido com o apoio da MiX Telematics para orientar e inspirar motoristas a alcançar a excelência operacional, valorizando a profissão e incentivando uma condução de qualidade.",
        link: "https://www.escolamobifacil.com.br/catalog?view=MDc0ZmY0M2M4YWI3ZjRkZDNiN2Q4N2IyZD",
        categoria: "TREINAMENTO",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },
    
    {
        imagem: "Imagens/Imagens cursos/saude mental.png",
        titulo: "Saúde Mental",
        descricao: "Aprenda sobre a importância de cuidar da saúde mental, manter o equilíbrio no dia a dia e contribuir para o bem-estar da família, dos amigos e dos colegas de trabalho.",
        link: "https://www.escolamobifacil.com.br/catalog?view=MDVlYzhlYTBkNDNjODRjN2FhNGQ4MzgwYmU2YzAxMTU0",
        categoria: "BEM-ESTAR",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },
    {
        imagem: "Imagens/Imagens cursos/Capacitação para Motoristas de Transporte Coletivo Interestadual de Passageiros.png",
        titulo: "Capacitação para Motoristas de Transporte Coletivo Interestadual de Passageiros",
        descricao: "Entenda as regulamentações da ANTT e como as mudanças contribuem para modernizar e tornar mais ágeis e eficientes os processos do transporte rodoviário interestadual de passageiros.",
        link: "https://www.escolamobifacil.com.br/catalog?view=MGJlZjhiZmJjNzRlNDRkNDE4YjdiM2ZmODAzZjYxZDM1",
        categoria: "CAPACITAÇÃO",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },
    {
        imagem: "Imagens/Imagens cursos/Operação segura em linhas de fronteiras.png",
        titulo: "Operação segura em linhas de fronteiras",
        descricao: "Aprenda procedimentos essenciais para operar com segurança em rotas próximas às fronteiras, incluindo responsabilidades legais e operacionais, identificação de bagagens, itens proibidos, fiscalizações e prevenção de riscos.",
        link: "https://www.escolamobifacil.com.br/catalog?view=MGJmYzQ3NjdkMmFjZDQyMTI5ODI0ZjIxMTM1NzdiMzQ5",
        categoria: "SEGURANÇA",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },
    {
        imagem: "Imagens/Imagens cursos/Olhares na Estrada.png",
        titulo: "Olhares na Estrada",
        descricao: "Conheça a importância das câmeras de segurança no acompanhamento da operação e na promoção de uma condução mais segura nas estradas.",
        link: "https://www.escolamobifacil.com.br/catalog?view=MDY0MWFjZWZkYmNlNzQ3YzZhZGY2NGI5ZDRlMzQxYTg4",
        categoria: "SEGURANÇA",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    },

    {
        imagem: "Imagens/Imagens cursos/Manutenção Preventiva.png",
        titulo: "Olhares na Estrada",
        descricao: "Chegou a hora de entrar em ação com a Manutenção Preventiva! Aqui, você vai entender o fluxo completo da Ordem de Manutenção, seguir checklists de inspeção, reconhecer falhas, usar corretamente os recursos disponíveis e atuar de forma ainda mais assertiva em sua função, seja você mecânico, eletricista, borracheiro, funileiro ou parte da equipe de tapeçaria e limpeza.Vamos juntos colocar em prática os processos que fazem toda a diferença na operação e no bem-estar dos nossos passageiros?",
        link: "https://www.escolamobifacil.com.br/catalog?view=MjAxZDdkODY3MjRmZDQ3YjZiNTA3NzBmMGZkMTZkYjVi",
        categoria: "SEGURANÇA",
        selo: "MOBIFÁCIL",
        preco: "Conteúdo interno"
    }
   
]


}

    ];

    /* =========================================
       ELEMENTOS DO HTML
    ========================================= */

    const cursosGroups = document.getElementById("cursosGroups");
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const themeButton = document.getElementById("themeButton");

    /* =========================================
       MENU MOBILE
    ========================================= */

    function fecharMenu() {
        if (!menuButton || !mobileMenu) return;

        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");

        mobileMenu.inert = true;
    }

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const aberto = !mobileMenu.classList.contains("active");

            menuButton.classList.toggle("active", aberto);
            mobileMenu.classList.toggle("active", aberto);

            menuButton.setAttribute("aria-expanded", String(aberto));
            menuButton.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );

            mobileMenu.inert = !aberto;
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", fecharMenu);
        });

        document.addEventListener("click", event => {
            if (
                mobileMenu.classList.contains("active") &&
                !mobileMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                fecharMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                fecharMenu();
            }
        });
    }

    /* =========================================
       TEMA CLARO E ESCURO
    ========================================= */

    function aplicarTema(tema) {
        const temaEscuro = tema === "dark";

        document.body.classList.toggle("dark", temaEscuro);

        document.documentElement.dataset.theme =
            temaEscuro ? "dark" : "light";

        if (themeButton) {
            themeButton.textContent = temaEscuro ? "☀" : "◐";

            themeButton.setAttribute(
                "aria-label",
                temaEscuro
                    ? "Ativar tema claro"
                    : "Ativar tema escuro"
            );

            themeButton.setAttribute(
                "title",
                temaEscuro
                    ? "Ativar tema claro"
                    : "Ativar tema escuro"
            );
        }
    }

    let temaInicial = "light";

    try {
        temaInicial = localStorage.getItem("portal-theme") || "light";
    } catch (error) {
        console.warn("Não foi possível recuperar o tema salvo.");
    }

    aplicarTema(temaInicial);

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const novoTema = document.body.classList.contains("dark")
                ? "light"
                : "dark";

            aplicarTema(novoTema);

            try {
                localStorage.setItem("portal-theme", novoTema);
            } catch (error) {
                console.warn("Não foi possível salvar o tema.");
            }
        });
    }

    /* =========================================
       CRIAÇÃO DOS CARDS
    ========================================= */

    function criarCard(curso) {
        const article = document.createElement("article");
        article.className = "curso-card";

        /* IMAGEM */

        const linkImagem = document.createElement("a");

        linkImagem.className = "curso-imagem-link";
        linkImagem.href = curso.link;
        linkImagem.target = "_blank";
        linkImagem.rel = "noopener noreferrer";

        linkImagem.setAttribute(
            "aria-label",
            `Acessar o curso: ${curso.titulo}`
        );

        const areaImagem = document.createElement("div");
        areaImagem.className = "curso-imagem";

        const imagem = document.createElement("img");

        imagem.src = curso.imagem;
        imagem.alt = curso.titulo;
        imagem.loading = "lazy";
        imagem.decoding = "async";

        imagem.addEventListener("error", () => {
            imagem.classList.add("imagem-indisponivel");
            imagem.alt = "Imagem do curso indisponível";
        });

        const selo = document.createElement("span");
        selo.className = "curso-selo";

        const iconeSelo = document.createElement("span");
        iconeSelo.className = "curso-selo-icone";
        iconeSelo.setAttribute("aria-hidden", "true");
        iconeSelo.textContent = "✓";

        const textoSelo = document.createElement("span");
        textoSelo.textContent = curso.selo || "CURSO EAD";

        selo.append(iconeSelo, textoSelo);
        areaImagem.append(imagem, selo);
        linkImagem.appendChild(areaImagem);

        /* CONTEÚDO */

        const conteudo = document.createElement("div");
        conteudo.className = "curso-conteudo";

        const categoria = document.createElement("span");
        categoria.className = "curso-categoria";
        categoria.textContent = curso.categoria || "ONLINE";

        const titulo = document.createElement("h3");
        titulo.className = "curso-titulo";
        titulo.textContent = curso.titulo;

        const descricao = document.createElement("p");
        descricao.className = "curso-descricao";
        descricao.textContent = curso.descricao;

        /* RODAPÉ DO CARD */

        const rodape = document.createElement("div");
        rodape.className = "curso-rodape";

        const preco = document.createElement("span");
        preco.className = "curso-preco";
        preco.textContent = curso.preco || "Gratuito";

        const saibaMais = document.createElement("a");

        saibaMais.className = "curso-link";
        saibaMais.href = curso.link;
        saibaMais.target = "_blank";
        saibaMais.rel = "noopener noreferrer";
        saibaMais.appendChild(document.createTextNode("SAIBA MAIS"));

        const seta = document.createElement("span");
        seta.className = "curso-seta";
        seta.setAttribute("aria-hidden", "true");
        seta.textContent = "→";

        saibaMais.appendChild(seta);

        rodape.append(preco, saibaMais);
        conteudo.append(categoria, titulo, descricao, rodape);

        article.append(linkImagem, conteudo);

        return article;
    }

    /* =========================================
       RENDERIZAÇÃO DAS CATEGORIAS
    ========================================= */

    function renderizarCursos() {
        if (!cursosGroups) {
            console.error(
                'Não foi encontrado o elemento "cursosGroups" no HTML.'
            );
            return;
        }

        cursosGroups.replaceChildren();

        gruposCursos.forEach(grupo => {
            const secao = document.createElement("section");
            secao.className = "curso-group";

            const tituloGrupo = document.createElement("h2");
            tituloGrupo.className = "curso-group-title";
            tituloGrupo.textContent = grupo.categoria;

            const grade = document.createElement("div");
            grade.className = "cursos-grid";

            grade.setAttribute(
                "aria-label",
                `Cursos da categoria ${grupo.categoria}`
            );

            const listaCursos = Array.isArray(grupo.cursos)
                ? grupo.cursos
                : [];

            listaCursos.forEach(curso => {
                const dadosValidos =
                    curso.imagem &&
                    curso.titulo &&
                    curso.descricao &&
                    curso.link;

                if (!dadosValidos) {
                    console.warn("Curso incompleto ignorado:", curso);
                    return;
                }

                try {
                    const url = new URL(curso.link);

                    if (!["http:", "https:"].includes(url.protocol)) {
                        console.warn("Link inválido:", curso.link);
                        return;
                    }
                } catch (error) {
                    console.warn("URL inválida:", curso.link);
                    return;
                }

                grade.appendChild(criarCard(curso));
            });

            secao.append(tituloGrupo, grade);
            cursosGroups.appendChild(secao);
        });
    }

    /* =========================================
       ACESSIBILIDADE: FECHAR COM ESC
    ========================================= */

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            fecharMenu();
        }
    });

    /* =========================================
       INICIALIZAÇÃO
    ========================================= */

    renderizarCursos();
});