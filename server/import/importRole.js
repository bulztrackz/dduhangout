var role = [
	{
		name: 'admin',
		description: 'Administrator',
		privilege: []
	},
	{
		name: 'pastor',
		description: 'Pastor',
		privilege: []
	},
	{
		name: 'user',
		description: 'User',
		privilege: []
	}
];

// import role listed above

/*
	Check if role is existing:
	if role existing ignore
	else import.
*/
role.forEach(function (r) {
	var isExisting = Role.findOne({
		$and: [
			{name: r.name},
			{description: r.description},
			{privilege: r.privilege}
		]
	});

	if(!isExisting){
		Role.insert({
			name: r.name,
			description: r.description,
			privilege: r.privilege
		});
		console.log('Imported role: \'' + r.name + '\'');
	}else{
		console.log('Role \'' + r.name + '\' existing');
	}
});