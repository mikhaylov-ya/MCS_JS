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
let myFunc = function(elem, color) {
	elem.style.backgroundColor = color; //функция, лежащая в переменной!
}

//let && var
//var - глобальная переменная, let - блочная область видимости. 
//let не действует за пределами условного блока, в отличии от var

function myFunc() {
	var a = 3;	//не видно за пределами функции
	let b = 5; //не видно за пределами функции
	console.log(a+b)
}

if (true) let c = 5

console.log(c) //ошибка, за пределами блока условий переменной не существует

// Обработчики событий / слушатели событий

elem.onclick = функция // либо переменная с функцией либо определение прямо тут
onload / ondblclick / onfocus / onblur / onkeypress / onmouseover / onmouseout / oncontext

elem.AddEventListener('click',function() {

});											// этот метод отличается тем, что на одно событие можно навесить несколько функций
// и тем, что обработчик можно УДАЛИТЬ через removeEventListener


/************************* КОМПЛЕКСНЫЕ ДАННЫЕ ************************/

// Объекты!
let person = {
	age : 30,
	name : 'Ярослав',
	surname : "Михайлов",
	sayHello : function() {return `Hello ${this.name}`}
}















