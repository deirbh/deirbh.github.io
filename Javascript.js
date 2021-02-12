var randomNumber = Math.floor(Math.random() * 20);

var restaraunt = [
	'Mcdonalds',
	'KFC',
	'Boojum',
	'Lana',
	'Supermacs',
	'Papa Johns',
	'Apache',
	'Shake Dog'
]

function newRestaurant() {
	var randomNumber = Math.floor(Math.random() * (restaraunt.length));
	document.getElementById('restaurantDisplay').innerHTML = restaraunt[randomNumber];
}