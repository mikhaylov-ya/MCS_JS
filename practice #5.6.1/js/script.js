const form = document.forms[0];
const result = document.getElementsByTagName('p');


form.onsubmit = function(elem) {
	elem.preventDefault();
	return result[1].innerText = Math.sin(form.elements.numb.value);
}

	