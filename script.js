document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');
    const menuItems = document.querySelectorAll('.menu-item');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    const indicator = document.querySelector('.indicator');

    // Função para abrir/fechar o menu em dispositivos móveis
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        menuPrincipal.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', menuToggle.classList.contains('open'));
        closeAllSubmenus(); // Garante que submenus estejam fechados ao abrir/fechar o menu mobile
    });

    // Função para fechar todos os submenus abertos
    const closeAllSubmenus = () => {
        hasSubmenuItems.forEach(item => {
            item.classList.remove('open-submenu');
        });
    };

    // Funcionalidade para desktop (mouseover para abrir, mouseleave para fechar)
    if (window.innerWidth > 768) {
        hasSubmenuItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                closeAllSubmenus();
                item.classList.add('open-submenu');
            });
            item.addEventListener('mouseleave', () => {
                item.classList.remove('open-submenu');
            });
        });
    } else {
        // Funcionalidade para mobile (click para abrir/fechar)
        hasSubmenuItems.forEach(item => {
            const link = item.querySelector('a');
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Impede o clique no link de navegar
                item.classList.toggle('open-submenu');
            });
        });
    }

    // Indicador visual do item selecionado
    const moveIndicator = (element) => {
        const rect = element.getBoundingClientRect();
        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${rect.offsetLeft}px`;
    };

    // Adiciona a classe 'active' ao item clicado e move o indicador
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', (e) => {
            menuItems.forEach(mi => mi.classList.remove('active'));
            item.classList.add('active');
            moveIndicator(item);

            // Fechar menu mobile ao clicar em um item
            if (window.innerWidth <= 768 && menuPrincipal.classList.contains('open')) {
                menuToggle.classList.remove('open');
                menuPrincipal.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', false);
                closeAllSubmenus();
            }
        });
    });

    // Define o indicador para o primeiro item ao carregar a página (opcional)
    if (menuItems.length > 0) {
        moveIndicator(menuItems[0]);
        menuItems[0].classList.add('active');
    }

    // Fechar submenus ao redimensionar a tela para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // Garante que os submenus estejam fechados e os listeners de desktop ativos
            closeAllSubmenus();
            hasSubmenuItems.forEach(item => {
                const link = item.querySelector('a');
                link.removeEventListener('click', handleMobileSubmenuClick);
                item.addEventListener('mouseover', handleDesktopSubmenuMouseover);
                item.addEventListener('mouseleave', handleDesktopSubmenuMouseleave);
            });
        } else {
            // Garante que os listeners de mobile estejam ativos
            hasSubmenuItems.forEach(item => {
                const link = item.querySelector('a');
                item.removeEventListener('mouseover', handleDesktopSubmenuMouseover);
                item.removeEventListener('mouseleave', handleDesktopSubmenuMouseleave);
                link.addEventListener('click', handleMobileSubmenuClick);
            });
            closeAllSubmenus();
        }
    });

    // Handlers separados para evitar duplicação de listeners
    function handleDesktopSubmenuMouseover() {
        closeAllSubmenus();
        this.classList.add('open-submenu');
    }

    function handleDesktopSubmenuMouseleave() {
        this.classList.remove('open-submenu');
    }

    function handleMobileSubmenuClick(event) {
        event.preventDefault();
        this.parentNode.classList.toggle('open-submenu');
    }
});