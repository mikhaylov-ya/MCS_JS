
const page = document.querySelector('.page');

function myFunc() {
	for (let i = 1; i <= 100000; i++)
		if (i % 6 === 0) page.innerText += ('\n' + i)
};

myFunc();

