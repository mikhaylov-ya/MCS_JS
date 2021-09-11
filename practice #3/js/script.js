document.body.style['background-color'] = '#696969';

const page = document.querySelector('.page');
page.style['background-color'] = 'ghostwhite';

const name = document.querySelector('.name');
name.innerHTML = 'DJ Rashad';

const image = document.querySelector('img');
image.setAttribute('src','https://i.ytimg.com/vi/TYlMBJ0RmbY/maxresdefault.jpg');
image.style = 'width: 700px';

const short_bio = document.querySelector('.short-bio');
short_bio.className += ' animated';
