export function projectComingSoon() {
    const comingSoon = document.createElement("span");
    const text = "/* Em breve ! */";
    comingSoon.innerHTML = text;
    comingSoon.classList.add("coming-soon");

    const projectComingSoon = document.querySelector('.project__menu[aria-disabled="true"]');
    projectComingSoon.before(comingSoon);
    
    comingSoon.previousElementSibling.style.marginBottom = "var(--spacing)";
    
    return projectComingSoon;
}