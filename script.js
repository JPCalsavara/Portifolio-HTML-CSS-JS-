const nav = document.getElementById('menu');
const introSection = document.querySelector('.intro');
const menuToggle = document.getElementById('menu-toggle'); // Botão para alternar o menu

window.addEventListener('scroll', () => {
    const introBottom = introSection.getBoundingClientRect().bottom;

    if (introBottom <= 0) {
        nav.classList.add('hidden'); // Esconde o menu quando a seção intro sai da tela
    } else {
        nav.classList.remove('hidden'); // Mostra o menu quando a seção intro está visível
    }
});

// Alterna a visibilidade do menu ao clicar no botão
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('hidden'); // Mostra ou esconde o menu
});