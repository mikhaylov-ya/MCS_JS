const subtopic = document.querySelector('.subtop');
const result = document.querySelector('.result');
const subtName = document.getElementById('subtopic');
const tassRef = document.getElementById('tassRef');
const riaRef = document.getElementById('riaRef');
const tassTime = document.getElementById('tassTime');
const riaTime = document.getElementById('riaTime');
const onlyTass = document.querySelector('.onlyTass');
const onlyRia = document.querySelector('.onlyRia');


// arr.sort( (a, b) => a - b );

subtopic.onsubmit = function(e) {
	if (subtName.value == '') {
		e.preventDefault();
		result.innerHTML += '';
	}

  else if (tassTime.value == false && riaTime.value == false && riaRef.value == false) {
    e.preventDefault();
    let tag = document.createElement("p");
    let tex = document.createTextNode(`${subtName.value} - ${tassRef.value}`);
    tag.append(tex);
    onlyTass.append(tag);
    subtopic.reset();
  }
  else if (tassTime.value == false && riaTime.value == false && tassRef.value == false) {
    e.preventDefault();
    let tag = document.createElement("p");
    let tex = document.createTextNode(`${subtName.value} - ${riaRef.value}`);
    tag.append(tex);
    onlyRia.append(tag);
    subtopic.reset();
  }
	else if (tassTime.value == false || riaTime.value == false) {
		e.preventDefault();
		let tag = document.createElement("p");
		tag.className = 'ital';
		let tex = document.createTextNode(`${subtName.value} (${tassRef.value} / ${riaRef.value})`);
		tag.append(tex);
		result.append(tag);
		//result.innerHTML = result.innerHTML += `${subtName.value} (${tassRef.value} / ${riaRef.value})\n`;
		//result.style.fontStyle = 'italic';
		subtopic.reset();
	}

	else {
		e.preventDefault();
		let tag = document.createElement("p");
		let tex = document.createTextNode(`${subtName.value} (${tassTime.value} / ${riaTime.value}) (${tassRef.value} / ${riaRef.value})`);
		tag.append(tex);
		result.append(tag);
		subtopic.reset();
	}
};






/*function populateOutput() {
  var yourName = document.getElementById("your-name");
  var theOuput = document.getElementById("NameEcho");
  theOuput.innerText = yourName.value;
}

function fakeValidate() {
  var boxErrors = document.getElementById("Errors");
  var yourName = document.getElementById("your-name");
  var yourEmail = document.getElementById("your-email");
  var yourSubject = document.getElementById("your-subject");
  var yourMessage = document.getElementById("your-message");
  var errName = document.getElementById("errName");
  var errEmail = document.getElementById("errEmail");
  var errSubject = document.getElementById("errSubject");
  var errMessage = document.getElementById("errMessage");
  if (yourName.value == "") {
    errName.removeAttribute("hidden");
    yourName.setAttribute("aria-invalid","true");
    yourName.setAttribute("aria-describedby",errName.id);
    boxErrors.removeAttribute("hidden");
    boxErrors.focus();
    event.preventDefault();
  }
  if (yourEmail.value == "") {
    errEmail.removeAttribute("hidden");
    yourEmail.setAttribute("aria-invalid","true");
    yourEmail.setAttribute("aria-describedby",errEmail.id);
    boxErrors.removeAttribute("hidden");
    boxErrors.focus();
    event.preventDefault();
  }
  if (yourSubject.value == "") {
    errSubject.removeAttribute("hidden");
    yourSubject.setAttribute("aria-invalid","true");
    yourSubject.setAttribute("aria-describedby",errSubject.id);
    boxErrors.removeAttribute("hidden");
    boxErrors.focus();
    event.preventDefault();
  }
  if (yourMessage.value == "") {
    errMessage.removeAttribute("hidden");
    yourMessage.setAttribute("aria-invalid","true");
    yourMessage.setAttribute("aria-describedby",errMessage.id);
    boxErrors.removeAttribute("hidden");
    boxErrors.focus();
    event.preventDefault();
  }*/

