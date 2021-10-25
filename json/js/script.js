const APIkey = '69a2a03e267544a63fc6b19e9e34ac2a';
const form = document.forms[0];
const result = document.querySelector('.result');






form.onsubmit = function(elem) {
	elem.preventDefault();
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=69a2a03e267544a63fc6b19e9e34ac2a';

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();
	if (xhr.status != 200) console.log(xhr.status + ' ' + xhr.statusText);
	else {
		data = JSON.parse(xhr.responseText);
		console.log(data);
		result.innerText = `Температура: ${(data.main.temp - 273).toPrecision(2)}
		Скорость ветра: ${data.wind.speed} м/с`
	}
}



const group = {
	name : 'Spiritualized',
	nationality : 'Great Britain',
	genre : 'post-rock',
	members : ['Jason Pierce','Doggen Foster','John Coxon','Kevin Bales','Tom Edwards','Thomas Wayne'],
	formed : 1990,
	split : false,
	albums : [
	{
		name : 'Lazer Guided Melodies',
		released : 1992
	},
	{
		name : 'Pure Phase',
		released : 1995
	},
	{
		name : 'Ladies and Gentlemen We Are Floating in Space',
		released : 1997
	},
	{
		name : 'Let It Come Down',
		released : 2001
	},
	{
		name : 'Amazing Grace',
		released : 2003
	},
	{
		name : 'Songs in A&E',
		released : 2008
	},
	{
		name : 'Sweet Heart Sweet Light',
		released : 2012
	},
	{
		name : 'And Nothing Hurt',
		released : 2018
	}
		]
};




bandInfo = `The band's name is ${group.name} and they are formed in ${group.formed} in ${group.nationality}. The band consists of ${group.members.join(', ')} and playing ${group.genre}.
${group.name} released ${group.albums.length} albums: 
${group.albums.map(album => `${album.name} in ${album.released}`).join('\n')}`;

function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}; // добавляем ф-ию в прототип


class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {return this.sides * this.sideLength;}
}

class Square extends Shape {
  constructor(sideLength) {
    super()
    this.name = 'square'
    this.sides = 4
  }
  calcArea() {return this.sideLength * this.sideLength;}
}

const square = new Square(5);

console.log(square.calcArea());
