import menuItems from './menu.json';
import menuTemplate from './templates/menu-template.hbs';
import './styles.css';

const menu = document.querySelector('.js-menu');

menu.innerHTML = menuTemplate(menuItems);


// 1. Создать разметку для добавления элементов меню
// - получить доступ к разделу, куда будем рендерить разметку
// - создать шаблон одного элемента
// - модифицировать шаблон одного элемента под массив
// - 
// 
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