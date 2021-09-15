/************************* РАБОТА С ДОКУМЕНТАМИ   ************************/
//Селекторы элементов структуры документы

document.getElementsByTagName('div') // по тегу
document.getElementsByClassName('class_name') // по классу!
document.getElementById('id_name') // по id, в единственном числе

document.querySelectorAll('any selector') // любой селектор
document.querySelector('selector') // выдает один элемент, первый найденный по селектору

const byId = document.getElementById('id_name');
byId.innerHTML = '<h2>WOWOWOWOWOOW</h2>'; // меня содержанием элемента, выбранного по селектору, добавляем текст


// Управление атрибутами

//пусть будет выбран элемент док-а и сохранен в переменную:
const image = document.querySelector('img');

имя_селектора.hasAttribute('имя_атрибута');
	image.hasAttribute('src'); // возвращает булево значение -- есть ли у эл-та этот атрибут

имя_селектора.getAttribute('имя_атрибута'); // возвращает значение атрибута

имя_селектора.removeAttribute('имя_атрибута'); //удаляет атрибут у выбранного элемента

имя_селектора.setAttribute('имя_атрибута','значение_атрибута'); //присваивает новое значение атрибуту
	image.setAttribute('src','img/001.png');

// Добавляем элементу еще один класс
Element.className += 'имя класса';

//задавать стиль
elementName.style['имя_атрибута'] = 'значение_атрибута'; //скобочный синтаксис
elementName.style.имяАтрибута = 'значение_атрибута'; //синтаксис с точкой
elementName.style = 'width: 700px', "имя_атрибута: значение_атрибута"; //имя атрибута в значении ф-ии


/************************* ИНТЕРАКТИВНЫЙ МАКЕТ ************************/

//Анонимные функции
let myFunc = function(elem) {
	elem.style.backgroundColor = 'red';
}
