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

myFunc = (elem,color) => elem.style.backgroundColor = color // то же, но в стрелочной функции

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

// ФОРМЫ И ДЕФОЛТНЫЕ СОБЫТИЯ

form.onsubmit = function(elem) {

}

/************************* КОМПЛЕКСНЫЕ ДАННЫЕ ************************/

// Объекты!
let person = {
	age : 30,
	name : 'Ярослав',
	surname : "Михайлов",
	sayHello : function() {return `Hello ${this.name}`}
}

// Массивы - объекты с ординалами (упорядоченные)
// В объекты можно вкладывать другие объекты

let bigObject {
	groceries : ['buckwheat', 'rice', 'oatmeal'],
	prices : [
	{
		wholesale : 123,
		retail : 110
	},
	{
		wholesale : 23,
		retail    : 20
	},
	{
		wholesale : 17.5,
		retail    : 14
	}
	]
}

// Методы работы с массивами

// (unshift / push) - добавляют и (shift / pop) - удаляют

myArr.unshift('wow',1,true) // добавит в начало массива 3 элемента
myArr.shift(1) // что бы не было аргументом, удаляет первый элемент
push/pop - в конец массива


// delete и splice()

delete myArr[1] // удалит элемент, но оставит пустой слот с undefined в массиве

myArr.splice(0,3,'yo','ass',3) // начиная с 0 элемента удаляет 3 элемента myArr[0-2], и добавляет три новых элемента на их место


// slice(), reverse() и concat()


Array.slice(x,y) - вырезает фрагмент массива от x до y (не включая y) и возвращает его
исходный массив НЕ МЕНЯЕТСЯ

arr = [1..10]
const sliced = arr.slice(1,5) // sliced = [1,2,3,4]

reverse() // обратный порядок

Array.concat(Array) // прибавляет в конец массива другой массива

const newArr = arr.concat(arr.slice(1,5).reverse()) // newArr = [1,2,3,4,5,6,7,8,9,10,4,3,2,1]


// Поиска в массиве indexOf(num) и сортировка sort()

arr.indexOf(elem) // ищет названный элемент и возвращает его индекс, если не находит возвращает (-1)

arr.sort() // либо сортирует по порядку, либо принимает на вход функцию (алгоритм сорировки)


// for of и for in -- для перебора

for (elem of Array) // перебор элементов в массиве

for (key in Object) // перебор по ключам в ОБЪЕКТЕ


//forEach

array.forEach(function(item) {

});								// кладем функцию которая применяется к каждому элементу массива



/************************* API И ООП ************************/

//JSON -- структуры данных, представляющие из себя ОБЪЕКТЫ двух типов:
// 1. Массив (упорядоченный)
// 2. Ключи/значения (неупорядоченный)
// ключи ДОЛЖНЫ быть в КАВЫЧКАХ + одинарные кавычки НЕЛЬЗЯ использовать

// Может храниться как список ключей в смысле JS
const apiDATA = [{
	"city" : "Moscow",
	"temp" : 10,
	"pressure" : 250
},
{
	"city" : "Saint-Petersburg",
	"temp" : 15,
	"pressure" : 180
},
{
	"city" : "Omsk",
	"temp" : -5,
	"pressure" : 200
}]

// Или как строка!

const apiString = '[{"city" : "Moscow", "temp" : 10, "pressure" : 250},{"city" : "Saint-Petersburg", "temp" : 15, "pressure" : 180},{"city" : "Omsk", "temp" : -5, "pressure" : 200}]'

// Методы работы с JSON -- parse и stringify

const wow = JSON.parse(apiString); // превращает строку в типичный JS объект

const wow2 = JSON.stringify(apiDATA) // превратит объект в строку

// Подключение к внешнему серверу, JSON-API


const APIkey = '69a2a03e267544a63fc6b19e9e34ac2a';
const city = 'Moscow';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;

let xhr = new XMLHttpRequest();

xhr.open('GET',url,false);

xhr.send();

console.log(xhr.status + ' ' + xhr.statusText);

// Прототипирование и наследование

// __proto__ показывает прототип объекта/строки/числа, любой сущности, в консол
// то есть "предка" и присущие ему СВОЙСТВА и МЕТОДЫ

let Animal = {
	canEat: true,
	hasParents: true
}

let Cow = {				//Cow унаследует свойства от animal
	givesMilk: true,
	__proto__: Animal
}


console.log(Cow.givesMilk);
console.log(Cow.canEat);

// Class и экземляр

// 1. Создание класса через ФУНКЦИЮ-КОНСТРУКТОР с this и инстанциация через NEW

function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}	
// Инстанциация: способ 1
let person1 = new Person('Bob');

// Инстанциация: способ 2 - create создает новый объект используя другой как прототип

let triangle = Object.create(Shape)

// Без сахара в виде THIS создание класса выглядело бы так:
function createNewPerson(name) {
  const obj = {};						// создаем объект...
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;							// возвращаем его...
}


// Классы и подклассы в ES6

class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}  // конструктор с ключами отдельно, методы отдельно (см скобки)

	sayHi() {
		return 'Hello' + this.name;
	}
		
	
}


class Female extends User {
	sayHi() {
		return `Hello ${this.name}! Ты зарегистрирована.`
}



let func = (data) => {
 let [temp,action] = data.toString().trim().split('\n');
 let [current, target] = temp.split(' ').map(n => parseInt(n));

    //тут решение

    return result;
};
