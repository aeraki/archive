function daimei() {
	let res = '';
	var consonants = [
		'k', 'r', 'l', 'n', 'f', 'd', 'h', 't', 't', 'v', 's', '', ''
	];
	var vowels = [
		'a', 'e', 'i', 'o', 'u'
	];
	let startvow = Math.floor(Math.random() * 2);
	if (startvow == 1) {
		res+=vowels[Math.floor(Math.random() * vowels.length)];
	};
	let pairs = Math.floor(Math.random() * 2) + 2; // 2-4 pairs
	for (let i=0; i<pairs; i++) {
		let rancon = Math.floor(Math.random() * consonants.length);
		let ranvow = Math.floor(Math.random() * vowels.length);
		res += consonants[rancon] + vowels[ranvow];
	};
	let endcon = Math.floor(Math.random() * 2);
	if (endcon == 1) {
		res+=consonants[Math.floor(Math.random() * (consonants.length - 1))];
	};
	res=res.charAt(0).toUpperCase() + res.slice(1);
	return res;
};


function username() {
	var nou = [
		'control', 'piano', 'salad', 'lady', 'pizza', 'depression', 'coffee', 'tea', 'teatime', 'dinner', 'disk',
		'sausage', 'tiger', 'puppy', 'trickster', 'whale', 'racoon', 'box', 'sword', 'dugong', 'frog', 'wolf',
		'fish', 'tape', 'camera', 'cracker', 'rubberband', 'candle', 'soap', 'dictionary', 'spatula', 'eraser',
		'cowboy', 'domino', 'glue', 'man', 'maplesyrup', 'tree', 'leaf', 'weed', 'mop', 'cement', 'radio', 'key',
		'pocket', 'needle', 'banana', 'hammer', 'book', 'sofa', 'bullet', 'gun', 'jam', 'jar', 'chocolates', 'light',
		'pants', 'bed', 'baloon', 'robot', 'brick', 'gamer', 'dragon', 'raptor', 'cookie', 'king', 'payback', 'toe',
		'hamster', 'bowl', 'mouse', 'pillow', 'scallop', 'rabbit', 'thief', 'ring', 'flag', 'car', 'soda', 'sailboat',
		'boat', 'wagon', 'money', 'beef', 'thermostat', 'sponge', 'sex', 'condom', 'oppai', 'regret', 'sunlight', 
		'stripper', 'weather', 'lobster', 'queen', 'emperor', 'mother', 'father', 'butler', 'wood', 'tsundere',
		'catgirl', 'nyandere', 'bakadere', 'troll', 'monster', 'ghost', 'diner', 'floyd', 'miracle', 'dream',
		'machine', 'dust', 'polygon', 'ocean', 'snow', 'sky', 'water', 'cave', 'oxygen', 'hyrdogen', 'icecream',
		'river', 'jalepeno', 'café', 'baguette', 'ocean', 'loop', 'wish', 'ice', 'dance', 'nostalgia', 'weeb',
		'goose', 'taco', 'burrito', 'cannoli', 'pastry', 'calzone', 'sandwich', 'peanut', 'cheese', 'ramen',
		'steak', 'noodle', 'soup', 'mushroom', 'rice', 'cake', 'chicken', 'dumpling', 'pork', 'sushi', 'quesadilla',
		'lime', 'chips', 'tomato', 'dough', 'pussy', 'dick', 'ass', 'tiddies', 'heat', 'donut', 'umbrella', 'insanity',
		'poet', 'program', 'cola', 'boob', 'boobs', 'prison', 'sodium', 'tin', 'sulfur'
	];
	var ers = [
		'fucker', 'eater', 'thrower', 'holder', 'king', 'lord', 'can', 'jar', 'murderer', 'theif', 'kidnapper',
		'crafter', 'god', 'conqueror', 'boat', 'wagon', 'photographer', 'visualizer', 'developer', 'caretaker',
		'engineer', 'gardener', 'sorcerer', 'market', 'seller', 'bus', 'pizza', 'ender', 'cleaner', 'queen',
		'emperor', 'mother', 'father', 'farmer', 'gaming', 'racer', 'diner', 'dream', 'dust', 'ocean', 'connector',
		'flow', 'noises', 'feet', 'hands', 'nose', 'master', 'circulation', 'river', 'store', 'shop', 'jungle', 
		'song', 'duet', 'vision', 'watcher', 'dance', 'nostalgia', 'weeb', 'calzone', 'sandwich', 'president',
		'priest', 'bishop', 'ramen', 'soup', 'cake', 'kebab', 'porn', 'sex', 'sushi', 'scientist', 'science',
		'chef', 'painter', 'pussy', 'dick', 'ass', 'tiddies', 'humper', 'impregnation', 'hole', 'party', 'ceremony',
		'frustration', 'insanity', 'poet', 'discovery', 'explorer', 'loser', 'breasts', 'fondler', 'groper', 'prison',
		'evangelion', 'reaction'
	];
	var adj = [
		'red', 'blue', 'green', 'purple', 'orange', 'yellow', 'aqua', 'royal', 'grassy', 'gross', 'posionous', 'delicious',
		'teal', 'sunlight', 'mint', 'coral', 'future', 'sore', 'terrible', 'uneasy', 'fruity', 'nutty', 'horny',
		'angry', 'happy', 'sad', 'shy', 'quiet', 'loud', 'fast', 'slow', 'thin', 'fat', 'neat', 'untidy', 'lazy', 'social',
		'fresh', 'lucky', 'short', 'tall', 'smooth', 'rushed', 'rough', 'cool', 'hot', 'scalding', 'burning', 'freezing',
		'honest', 'dishonest', 'rotten', 'flat', 'shiny', 'flashy', 'jealous', 'annoying', 'bitter', 'hollow', 'new', 'old',
		'odd', 'normal', 'strange', 'tiny', 'huge', 'chocoloate', 'endless', 'afterschool', 'morning', 'nightime', 'easy',
		'hard', 'tight', 'loose', 'strong', 'weak', 'clueless', 'smart', 'cyber', 'holy', 'unholy', 'anti', 'iron', 'gold',
		'silver', 'metal', 'stone', 'diamond', 'wooden', 'chill', 'ghost', 'hyper', 'pink', 'white', 'black', 'solid',
		'open', 'closed', 'surged', 'flickering', 'static', 'baby', 'sudden', 'lone', 'far', 'distant', 'future', 'vivid',
		'wondering', 'wandering', 'thinking', 'live', 'master', 'new', 'seaside', 'floating', 'rainy', 'sunny', 'bright', 
		'dark', 'minty', 'walking', 'early', 'late', 'innocent', 'guilty', 'stylish', 'ugly', 'afternoon', 'midnight',
		'summer', 'spring', 'winter', 'autumn', 'icy', 'groovy', 'dancing', 'french', 'american', 'british', 'english',
		'german', 'japanese', 'indian', 'chinese', 'italian', 'canadian', 'mexican', 'spanish', 'brazilian', 'polish',
		'irish', 'portuguese', 'korean', 'cuban', 'chewy', 'russian', 'norwegian', 'greek', 'sexy', 'horrible', 'awful',
		'lime', 'fried', 'cooked', 'doughy', 'pintsized', 'pornographic', 'saturated', 'humping', 'caged', 'canned',
		'simple', 'complex', 'overcomplicated', 'virtual', 'ruinous', 'drunk', 'alcoholic', 'neon', 'titanium', 'nitrogen',
		'tin', 'sulfur', 'chemical', 'toxic', 'gaming', 'swine', 'wet', 'dry', 'soaking', 'flooded', 'crusty', 'moist'
	];

	let n = nou[Math.floor(Math.random() * nou.length)];
	let e = ers[Math.floor(Math.random() * ers.length)];
	let a = adj[Math.floor(Math.random() * adj.length)];
	let i = '';

	// Is there an "er" in the username?
	let erin = Math.floor(Math.random() * 4);
	if (erin !== 0) {
		e = '';
	};

	// Capitalizations?
	let capi = Math.floor(Math.random() * 3);
	if (capi === 1) {
		n = n.charAt(0).toUpperCase() + n.slice(1);
		if (e !== '') {e = e.charAt(0).toUpperCase() + e.slice(1);}
	} else if (capi === 2) {
		n = n.charAt(0).toUpperCase() + n.slice(1);
		a = a.charAt(0).toUpperCase() + a.slice(1);
		if (e !== '') {e = e.charAt(0).toUpperCase() + e.slice(1);}
	};

	// No adj?
	let adji = Math.floor(Math.random() * 4);
	if (adji === 0) {
		adj = '';
	};

	// Number at end?
	let numi = Math.floor(Math.random() * 10);
	if (numi >= 2 && numi <= 4) {
		i = Math.floor(Math.random() * 100);
	};
	if (numi >= 5 && numi <=7) {
		i = Math.floor(Math.random() * 1000);
	};
	if (numi === 8) {i = 69};
	if (numi === 9) {i = 420};

	let res = a + n + e + i;

	let specials = Math.floor(Math.random() * 10000000);
	if (specials === 0) {res = 'irothecookielord'};
	if (specials === 1) {res = 'Merel'};
	if (specials === 2) {res = 'Chris64'};
	if (specials === 3) {res = 'Aeraki'}

	return res;

};

var currentgenerator = daimei;
var currentstorage = 'daimei';

function generate() {
	$('#genres').empty();
	for (let i=0; i<5; i++) {
		let res = currentgenerator()
		$('#genres').append( $('<b>').html(res).click(savefavorite) );
	};
};

function setgenerator(id,func) {
	$('#generators div').attr('sel', 'false');
	$('#'+id).attr('sel', 'true');
	currentgenerator = func;
	currentstorage = id;
	generate();
	loadfavorites();
};

function savefavorite(click) {
	let res = click.target.innerText;
	let target = click.target;

	if (window.localStorage.getItem(currentstorage) === null) {
		window.localStorage.setItem(currentstorage, '[]')
	};

	let saved = JSON.parse(window.localStorage.getItem(currentstorage));

	if (!target.classList.contains('saved')) {
		target.classList.add('saved');
		saved.push(target.innerText);
	} else if (target.classList.contains('saved')) {
		target.classList.remove('saved');
		saved = saved.filter(e => e !== res);
	};

	saved = JSON.stringify(saved);
	window.localStorage.setItem(currentstorage, saved);

	loadfavorites();
};

function loadfavorites() {
	if (window.localStorage.getItem(currentstorage) === null) {
		window.localStorage.setItem(currentstorage, '[]')
	};

	let saved = JSON.parse(window.localStorage.getItem(currentstorage));

	$('#genfav').empty();
	for (let i=0; i<saved.length; i++) {
		$('#genfav').append(
			$('<b>').html(saved[i]).click( () => {
				removefavorites(saved[i]);
			})
		);
	};

};

function removefavorites(res) {
	let saved = JSON.parse(window.localStorage.getItem(currentstorage));
	saved = saved.filter(e => e !== res);
	saved = JSON.stringify(saved);
	window.localStorage.setItem(currentstorage, saved);	
	loadfavorites();

};