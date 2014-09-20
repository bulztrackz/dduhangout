var center = [

	{
		name: 'Montalban',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Cubao',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Commonwealth',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'COA Holy Spirit',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Graceville',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Sucat',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Pandacan',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Taguig',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'C5',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Angono',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Cainta',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Teresa',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Eastridge',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Cabuyao',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Calamba',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Carmona',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Sta. Rosa',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Batangas',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Lipa Lodlod',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Bulacan',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Minalin',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'San Nicolas',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Bautista',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Malisiqui',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Villasis',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Urdaneta',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Muñoz',
		address: '',
		bannerName: '',
		bannerVerse: ''
	},
	{
		name: 'Baguio',
		address: '',
		bannerName: '',
		bannerVerse: ''
	}
];

// import center listed above

/*
	Check if center is existing:
	if center existing ignore
	else import.
*/
center.forEach(function (c) {
	var isExisting = Center.findOne({
		$and: [
			{name: c.name},
			{address: c.address},
			{bannerName: c.bannerName},
			{bannerVerse: c.bannerVerse}
		]
	});

	if(!isExisting){
		Center.insert({
			name: c.name,
			address: c.address,
			bannerName: c.bannerName,
			bannerVerse: c.bannerVerse
		});
		console.log('Imported center: \'' + c.name + '\'');
	}else{
		console.log('Center \'' + c.name + '\' existing');
	}
});