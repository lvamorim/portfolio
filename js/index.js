import carousel from './carousel.js';
import { mobileMenuToggle, activeMenuLink } from './headerMenu.js';
import { age, currentTime, currentYear } from './timeData.js';
import fieldValidation from './fieldValidation.js';

window.addEventListener('load', carousel);
window.addEventListener('scroll', activeMenuLink);
document.getElementById('menu-button').addEventListener('click', mobileMenuToggle);
document.getElementById('age').innerText = age();
document.getElementById('time').innerText = currentTime();
document.getElementById('year').innerText = currentYear;
document.querySelectorAll('[data-input]').forEach(field => field.addEventListener('blur', fieldValidation));
