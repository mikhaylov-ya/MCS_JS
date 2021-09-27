class Tiger {
	constructor(name) {
		this.name = name;
	}
	
	feedCat() {
		return console.log('Purrrrrr');
	}
	
}

class angryTiger extends Tiger {
	throwDart() {
		return console.log('ZzZzzZzZz');
	}
} 