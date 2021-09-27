const form = document.forms[0];
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=69a2a03e267544a63fc6b19e9e34ac2a';
const xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();

class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {return this.happiness += 1;}
	hasRest() {return this.happiness += 1;}
	hasMoney() {return this.happiness += 1;}

	isSunny() {
		const data = JSON.parse(xhr.responseText);
		if ((data.main.temp - 273) > 15) {
			this.happiness += 1;
			return this.happiness;
		}
		else return this.happiness
	}
}

form.onsubmit = function(elem) {
	elem.preventDefault();
	const inpname = document.getElementById('name');
	const cat = document.querySelector('input[name="cat"]:checked').value;
	const rest = document.querySelector('input[name="rest"]:checked').value;
	const money = document.querySelector('input[name="money"]:checked').value;
	const usname = document.querySelector('.personName');
	const icon = document.querySelector('.icon');

	const person = new Person(inpname.value);

	if (cat === 'yes') person.hasCat();
	if (rest === 'yes') person.hasRest();
	if (money === 'yes') person.hasMoney();

	person.isSunny();
	usname.textContent = inpname.value;

	if (person.happiness == 4) icon.textContent = '😄'
	else if (person.happiness == 3 || person.happiness == 2) {icon.textContent = '😐'}
	else icon.textContent = '☹️'
}