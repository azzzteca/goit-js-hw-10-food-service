import menuItems from './menu.json';
import menuTemplate from './templates/menu-template.hbs';
import './styles.css';

const refs = {
  menu: document.querySelector('.js-menu'),
  switcher: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.menu.innerHTML = menuTemplate(menuItems);

refs.body.classList.add('light-theme');

refs.switcher.addEventListener('change', () => {
  refs.body.classList.toggle('dark-theme');
});
//
// 2. Написать код включения - выключения светлой темы на темную
// - получить доступ к кнопке
// - повесить слушателя на кнопку
// - по событию менять стиль темы - меять класс?
//
//

//
//
//
