document.addEventListener('DOMContentLoaded', function() {
    const saberButtons = document.querySelectorAll('.saber-button');
    const links = document.querySelectorAll('.header__links__item a');
    const hoverSound = document.querySelector('.hoverSound');
    const buttons = document.querySelectorAll('[data-tab-button]');
    const btnJoinForce = document.querySelector('[data-target]');
    const sections = document.querySelectorAll('section[id]'); // Seleciona todas as seções com um ID definido

    saberButtons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });

    links.forEach(link => {
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

    btnJoinForce.addEventListener('click', function(e) {
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

    // Adiciona a classe 'active' ao link correspondente à seção visível na página
    window.addEventListener('scroll', function() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // Remove a classe 'active' de todos os links
        links.forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link correspondente à seção atual
        const activeLink = document.querySelector(`.header__links__item a[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    });
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
