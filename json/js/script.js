const APIkey = '69a2a03e267544a63fc6b19e9e34ac2a';
const city = document.getElementById('city');
const form = document.forms[0];
const result = document.querySelector('.result');






form.onsubmit = function(elem) {
	elem.preventDefault();
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid='+APIkey;

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

