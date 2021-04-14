import creatMarkupHbs from '../templates/cards-template.hbs';
import menu from '../data/menu.json';

const ref = {
    menuList: document.querySelector('.js-menu'),
    checkBox: document.querySelector('.theme-switch__toggle'),
    body: document.body,
}
creatMarkupHbs(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
ref.menuList.insertAdjacentHTML('beforeend', creatMarkupHbs(menu));
const localTheme = localStorage.getItem('theme');
const currentTheme = localTheme === null ? Theme.LIGHT : localTheme;

ref.body.classList.add(currentTheme);
ref.checkBox.checked = localStorage.getItem('theme') === Theme.DARK;

function changeTheme({ target: {checked}}) {
    if (checked) {
        toggleTheme(Theme.DARK, Theme.LIGHT);
    } else {
        toggleTheme(Theme.LIGHT, Theme.DARK);
    }
}

function toggleTheme(add, rem) {
    ref.body.classList.replace(rem, add);
    localStorage.setItem('theme', add)
}

ref.checkBox.addEventListener('change', changeTheme);
