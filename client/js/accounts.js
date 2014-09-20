// seed default user account

// var users = [
// 	{
// 		username: "rommel",
// 		email: "rdd911@hotmail.com",
// 		password: "rommel",
// 		name: "Rommel David"
// 	},
// 	{
// 		username: "winner",
// 		email: "winner@email.com",
// 		password: "winner",
// 		name: "Pastor Joiy"
// 	},
// 	{
// 		username: "joever",
// 		email: "joever@email.com",
// 		password: "joever",
// 		name: "Joever"
// 	},
// 	{
// 		username: "marj",
// 		email: "marj@email.com",
// 		password: "marj",
// 		name: "Ninang Marjorie"
// 	}
// ];

/*
users.forEach(function (user) {
	var username = user.username,
		email = user.email,
		password = user.password,
		name = user.name;

	Accounts.createUser({
		username: username,
		email: email,
		password: password,
		profile: {
			name: name
		}
	},
	function (err) {
		if (err) {
		  if (err.message === 'Email already exists. [403]') {
		    // console.log('We are sorry but this email is already used.');
		  	console.log('User ' + username + ' existing.')
		  }else{
		      console.log('We are sorry but something went wrong. ' + err.message);
		  }
		}else{
	   		console.log(username + ' registered!');

	 assigning user role code will be added here.
	   
	   // var userId = Meteor.users.findOne({username: newUserData.email});

	   // // Adding user role to user
	   // Meteor.call('addRole', userId, function(err){
	   //  if(err){
	   //    console.log(err.message);
	   //  }else{
	   //    console.log('Added \'user role\' to user');
	   //  }
	   // });
		}

	});
});*/

Template.register.centerName = {
	position: 'bottom',
	limit: 20,
	rules: [
		{
			// token: '',
			collection: Center,
			field: 'name',
			mathAll: true,
			template: Template.centerName
		}
	]
};

Template.register.rendered = function () {
	// Setup parsley form validation
	$('#registerForm').parsley({
		trigger: 'change',
		excluded: 'input[type=submit]'
	});
}

Template.login.events({
	'click #login': function (e) {
		e.preventDefault();

		var username = $("#username").val(),
			password = $("#password").val();

		console.log('User '+ username +' logging in...');

		Meteor.loginWithPassword(username, password)
		Router.go('home');
		console.log('User '+ username +' logged successful.')
	}
});

Template.register.events({
	'submit #registerForm': function (e, t) {
		e.preventDefault();
		var regForm = $(e.currentTarget);
		console.log('regForm');

		var user_role_id = Role.findOne({name: 'user'})._id;

		var newUserData = {
			firstName: regForm.find('#regFirstName').val(),
			middleName: regForm.find('#regMiddleName').val(),
			lastName: regForm.find('#regLastName').val(),
			birthDate: regForm.find('#regBirthDate').val(),
			centerName: regForm.find('#centerName').val(),
			email: regForm.find('#regEmail').val(),
			username: regForm.find('#regUsername').val(),
			password: regForm.find('#regPassword').val(),
			role_id: user_role_id
		};

		console.log(newUserData);

		createUser(newUserData);
	}
});

function createUser (userData) {
	Accounts.createUser({
		email: userData.email,
		username: userData.username,
		password: userData.password,
		role_id: userData.role_id,
		profile: {
			firstName: userData.firstName,
			middleName: userData.middleName,
			lastName: userData.lastName,
			birthDate: userData.birthDate,
			centerName: userData.centerName
		}
	},
	function (err) {
		if(err){
			if (err.message === 'Email already exists. [403]') {
	          console.log('We are sorry but this email is already used.');
	      } else {
	          console.log('We are sorry but something went wrong. ' + err.message);
	      }
	    }else{
	    	console.log('Registered!');
	    	
	    	Router.go('login');
	    }
	});
};