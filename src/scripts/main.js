document.addEventListener('DOMContentLoaded', function() {
    const saberButtons = document.querySelectorAll('.saber-button');
    const links = document.querySelectorAll('.saber-button');
    const hoverSound = document.querySelector('.hoverSound');
    const buttons = document.querySelectorAll('[data-tab-button]');
    const btnJoinForce = document.querySelector('[data-target]');

    saberButtons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });

    links.forEach(link => { //usado para vários botões com o mesmo atributo (forEact)
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            smoothScrollTo(targetElement);
            // Removendo a classe 'active' de todos os links
            links.forEach(link => {
                link.classList.remove('active');
            });            
            // Adicionando a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });

    btnJoinForce.addEventListener('click', function(e) { //não precisa usar o forEach ja que tem apenas 1 botao
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        smoothScrollTo(targetElement);
    });
    
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('explore__content__item--is-active'); //conteúdo
            removeBotaoAtivo();
            botao.target.classList.add('explore__content__tabs__button--is-active'); //botao
        })
    }
});

function smoothScrollTo(target) {
    const targetPosition = target.offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}


function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('explore__content__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('explore__content__item--is-active');
    }
}
