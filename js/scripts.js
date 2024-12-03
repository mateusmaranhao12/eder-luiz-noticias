//OWL Carousel Esportes
$(document).ready(function () {
    $('#carouselEsportes').owlCarousel({
        loop: true,  // Permite rotação infinita
        margin: 10,  // Espaço entre os itens
        nav: false,   // Exibe os botões de navegação
        responsive: {
            0: {
                items: 1  // Exibe 1 item em telas de celular
            },
            768: {
                items: 2  // Exibe 2 itens em telas de iPad (min-width: 768px)
            },
            1116: {
                items: 4  // Exibe 4 itens em telas de computador (min-width: 1024px)
            }
        }
    })

    //Carousel Brasil e o Mundo
    $('#carouselBrasilMundo').owlCarousel({
        loop: true,  // Permite rotação infinita
        margin: 10,  // Espaço entre os itens
        nav: false,   // Exibe os botões de navegação
        responsive: {
            0: {
                items: 1  // Exibe 1 item em telas de celular
            },
            768: {
                items: 2  // Exibe 2 itens em telas de iPad (min-width: 768px)
            },
            1116: {
                items: 4  // Exibe 4 itens em telas de computador (min-width: 1024px)
            }
        }
    })

    //Carousel Leia Tambem
    $('#carouselLeiaTambem').owlCarousel({
        loop: true,  // Permite rotação infinita
        margin: 10,  // Espaço entre os itens
        nav: false,   // Exibe os botões de navegação
        responsive: {
            0: {
                items: 1  // Exibe 1 item em telas de celular
            },
            768: {
                items: 2  // Exibe 2 itens em telas de iPad (min-width: 768px)
            },
            1116: {
                items: 4  // Exibe 4 itens em telas de computador (min-width: 1024px)
            }
        }
    })
})

function abrirAnuncio() {
    window.location.href = 'noticia.html'
}

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

