//OWL Carousel Esportes
$(document).ready(function () {
    $('#carouselEsportes').owlCarousel({
        loop: true,             // Ativa o loop contínuo
        margin: 10,             // Espaçamento entre os slides
        nav: false,             // Remove as setas de navegação
        dots: true,             // Exibe apenas as bolinhas (indicadores)
        autoplay: true,         // Ativa a reprodução automática
        autoplayTimeout: 5000,  // Tempo entre os slides (5 segundos)
        autoplayHoverPause: true, // Pausa ao passar o mouse sobre o carrossel
        responsive: {
            0: {                // Telas menores (até 576px)
                items: 1        // Mostra 1 card por vez
            },
            768: {              // Telas médias (576px ou maior)
                items: 2        // Mostra 2 cards por vez
            },
            992: {              // Telas grandes (992px ou maior)
                items: 2        // Mostra 2 cards por vez
            }
        }
    })

    //Carousel Brasil e o Mundo
    $('#carouselBrasilMundo').owlCarousel({
        loop: true,             // Ativa o loop contínuo
        margin: 10,             // Espaçamento entre os slides
        nav: false,             // Remove as setas de navegação
        dots: true,             // Exibe apenas as bolinhas (indicadores)
        autoplay: true,         // Ativa a reprodução automática
        autoplayTimeout: 5000,  // Tempo entre os slides (5 segundos)
        autoplayHoverPause: true, // Pausa ao passar o mouse sobre o carrossel
        responsive: {
            0: {                // Telas menores (até 576px)
                items: 1        // Mostra 1 card por vez
            },
            768: {              // Telas médias (576px ou maior)
                items: 2        // Mostra 2 cards por vez
            },
            992: {              // Telas grandes (992px ou maior)
                items: 2        // Mostra 2 cards por vez
            }
        }
    })

    //Carousel Leia Tambem
    $('#carouselLeiaTambem').owlCarousel({
        loop: true,             // Ativa o loop contínuo
        margin: 10,             // Espaçamento entre os slides
        nav: false,             // Remove as setas de navegação
        dots: true,             // Exibe apenas as bolinhas (indicadores)
        autoplay: true,         // Ativa a reprodução automática
        autoplayTimeout: 5000,  // Tempo entre os slides (5 segundos)
        autoplayHoverPause: true, // Pausa ao passar o mouse sobre o carrossel
        responsive: {
            0: {                // Telas menores (até 576px)
                items: 1        // Mostra 1 card por vez
            },
            768: {              // Telas médias (576px ou maior)
                items: 2        // Mostra 2 cards por vez
            },
            992: {              // Telas grandes (992px ou maior)
                items: 2        // Mostra 2 cards por vez
            }
        }
    })
})

function abrirAnuncio() {
    window.location.href = 'noticia.html'
}

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

