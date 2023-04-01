export function footerYear() {
    const currentYear = document.querySelector("[data-year]");
    currentYear.append("©" + new Date().getFullYear());
}