// Function for opening menu

const menu = () => {

    menuButton = document.querySelector('.menu-button')
    fullMenuButton = document.querySelector('.full-menu__button')
    fullMenu = document.querySelector('.full-menu')


    const toggleMenu = () => {
        fullMenu.classList.toggle('open')
    }

    menuButton.addEventListener('click', toggleMenu)
    fullMenuButton.addEventListener('click', toggleMenu)
}

menu ()