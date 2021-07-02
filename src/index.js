import menuItems from './menu.json';
import menuTemplate from './templates/menu-template.hbs';
import './styles.css';

const refs = {
  menu: document.querySelector('.js-menu'),
  switcher: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
  darkTheme: 'dark-theme',
  lightTheme: 'light-theme',
};

refs.menu.innerHTML = menuTemplate(menuItems);

isDataSaved();

refs.switcher.addEventListener('change', onThemeChange);

function onThemeChange() {
  if (!isDataSaved() || refs.body.classList.contains(refs.lightTheme)) {
    refs.body.classList.remove(refs.lightTheme);
    refs.body.classList.add(refs.darkTheme);
    localStorage.setItem('theme', refs.darkTheme);
  } else if (refs.body.classList.contains(refs.darkTheme)) {
    refs.body.classList.remove(refs.darkTheme);
    refs.body.classList.add(refs.lightTheme);
    localStorage.setItem('theme', refs.lightTheme);
    refs.switcher.checked = false;
  }
}

function isDataSaved() {
  const savedData = localStorage.getItem('theme');

  if (savedData) {
    refs.body.classList.add(savedData);
    if (refs.body.classList.contains(refs.darkTheme)) {
      refs.switcher.checked = true;
    }
    return savedData;
  }
}
