function abrirAnuncio() {
    window.location.href = "noticia.html"
}

// Para o carrossel BrasilMundo
const indicatorsBrasilMundo = document.querySelectorAll('.carousel-indicators-cards button');
const carouselBrasilMundo = document.querySelector('#carouselBrasilMundo');

carouselBrasilMundo.addEventListener('slide.bs.carousel', function (event) {
    const index = event.to; // Índice do slide ativo
    indicatorsBrasilMundo.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
});

// Para o carrossel Esportes
const indicatorsEsportes = document.querySelectorAll('.carousel-indicators-cards-esportes button');
const carouselEsportes = document.querySelector('#carouselEsportes');

carouselEsportes.addEventListener('slide.bs.carousel', function (event) {
    const index = event.to; // Índice do slide ativo
    indicatorsEsportes.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
});

//Botao de pesquisa

// Abrir o modal
function abrirPesquisa() {
    const modal = document.getElementById('modal-pesquisa')
    modal.classList.remove('closing')
    modal.classList.add('active')
}

// Fechar o modal
function fecharPesquisa() {
    const modal = document.getElementById('modal-pesquisa')
    modal.classList.add('closing')

    // Aguarda o fim da animação para esconder o modal
    modal.addEventListener('animationend', () => {
        if (modal.classList.contains('closing')) {
            modal.classList.remove('active', 'closing')
        }
    }, { once: true })
}

