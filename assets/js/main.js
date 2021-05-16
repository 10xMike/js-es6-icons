/* Milestone 1: Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. */

const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

console.log(cards);

/* Milestone 2 Coloriamo le icone per tipo */

let getTypes = cards.map(a => a.type);
console.log(getTypes);

cards.forEach((card) =>{
	if (card.type === 'animal') {
		card.colorType = 'blue'
	} else if (card.type === 'vegetable') {
		card.colorType = 'orange'
	} else if (card.type === 'user') {
		card.colorType = 'purple'
	}
});

cards.forEach((card) =>{
	console.log(card.name, card.type);
	document.getElementById('container').insertAdjacentHTML('beforeend', `
	<i class="${card.family} ${card.prefix}${card.name}" style="color: ${card.colorType}"></i>
	<span>${card.name}</span>
	`)
});

/* Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

const selectIcon = document.getElementById('type');
selectIcon.addEventListener('change', () =>{
	document.querySelector('.cards').innerHTML = '';
	cards.forEach(card =>{
		if (selectIcon.value === card.type) {
			document.querySelector('.cards').insertAdjacentHTML('beforeend', 
			`
			<div class="card">
				<i class="${card.family} ${card.prefix}${card.name}" style="color: ${card.colorType}"></i>
				<span>${card.name}</span>
			</div>
			`)
		}
	});
});



