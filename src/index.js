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

refs.body.classList.add(refs.lightTheme);

refs.switcher.addEventListener('change', () => {
  //   isThemeSaved();

  refs.body.classList.toggle(refs.lightTheme);
  refs.body.classList.toggle(refs.darkTheme);

  console.log(localStorage.setItem('theme', refs.darkTheme));
  console.log(localStorage.getItem('theme'));
});

// 3. сохранить в хранилище настройки темы

// function isThemeSaved() {
//   const savedTheme = localStorage.getItem('theme');

//   if (savedTheme) {
//     console.log('тема в наличии', savedTheme);
//   }
// }
