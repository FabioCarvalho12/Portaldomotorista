/* Portal do Motorista — menu, tema e compartilhamento da página de currículo */
(() => {
    'use strict';
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const themeButton = document.getElementById('themeButton');
    const shareButton = document.getElementById('shareButton');
    const shareFeedback = document.getElementById('shareFeedback');

    function setMenu(open) {
        if (!menuButton || !mobileMenu) return;
        mobileMenu.classList.toggle('active', open);
        menuButton.classList.toggle('active', open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        mobileMenu.setAttribute('aria-hidden', String(!open));
    }
    menuButton?.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('active')));
    mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('click', event => {
        if (mobileMenu?.classList.contains('active') && !mobileMenu.contains(event.target) && !menuButton?.contains(event.target)) setMenu(false);
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); });

    function applyTheme(dark) {
        document.body.classList.toggle('dark', dark);
        if (themeButton) {
            themeButton.textContent = dark ? '☀' : '◐';
            themeButton.setAttribute('aria-label', dark ? 'Ativar modo claro' : 'Ativar modo escuro');
        }
    }
    try { applyTheme(localStorage.getItem('portal-theme') === 'dark'); } catch (_) { applyTheme(false); }
    themeButton?.addEventListener('click', () => {
        const dark = !document.body.classList.contains('dark');
        applyTheme(dark);
        try { localStorage.setItem('portal-theme', dark ? 'dark' : 'light'); } catch (_) {}
    });

    const FORM_URL = 'https://docs.google.com/forms/d/1qPIHqgf3pd81_Ei6E0afKxkggZUvFLYpAnft4mR5UnE/viewform';

    async function copyText(text) {
        // Clipboard API exige contexto seguro em vários navegadores; use fallback compatível.
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch (_) {}
        try {
            const field = document.createElement('textarea');
            field.value = text;
            field.setAttribute('readonly', '');
            field.style.position = 'fixed';
            field.style.left = '-9999px';
            document.body.appendChild(field);
            field.select();
            field.setSelectionRange(0, field.value.length);
            const copied = document.execCommand('copy');
            field.remove();
            return copied;
        } catch (_) {
            return false;
        }
    }

    shareButton?.addEventListener('click', async () => {
        const shareData = {
            title: 'Envio de currículo | Portal do Motorista',
            text: 'Conhece alguém que gostaria de trabalhar conosco? Preencha e compartilhe o formulário para envio de currículo:',
            url: FORM_URL
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
                if (shareFeedback) shareFeedback.textContent = 'Formulário compartilhado!';
                return;
            } catch (error) {
                if (error?.name === 'AbortError') return;
            }
        }

        const copied = await copyText(FORM_URL);
        if (copied) {
            if (shareFeedback) shareFeedback.textContent = 'Link do formulário copiado! Agora é só colar na conversa do WhatsApp.';
            return;
        }

        // Fallback final: abre o WhatsApp com o texto e o link prontos para enviar.
        const message = encodeURIComponent(`${shareData.text} ${FORM_URL}`);
        const whatsappUrl = `https://wa.me/?text=${message}`;
        const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        if (shareFeedback) {
            shareFeedback.textContent = opened
                ? 'O WhatsApp foi aberto com o link do formulário pronto para enviar.'
                : 'Não foi possível abrir o compartilhamento. Copie este link: ' + FORM_URL;
        }
    });
})();
