export function headerMobileMenu(event) {
    const buttonToggle = document.querySelector("[data-menu-toggle]");
    buttonToggle.classList.toggle("active");
    
    const active = buttonToggle.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);

    const menu = document.querySelector("[data-menu]");
    menu.classList.toggle("active");

    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
    }
    
    else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
}