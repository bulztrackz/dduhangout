Router.configure({
	layoutTemplate: 'index'
});

// route with data are for redirections
// links has name key & value are for anchor tag

Router.map(function () {
	this.route('splash', {
		path: '/',
		data: {
			links: [
				{
					href: 'login',
					name: 'Login'
				}
			],
			errors: [
				{
					id: 'err',
					message: 'Links are missing'
				}
			]
		}
	});

	this.route('login', {
		path: '/login',
		data: {
			links: [
				{
					href: 'register',
					name: 'Register'
				}
			],
			errors: [
				{
					id: 'err',
					message: 'Links are missing'
				}
			]
		}
	});

	this.route('register', {
		path: '/register',
		data: {
			links: [
				{
					href: 'login',
					name: 'Login'
				}
			],
			errors: [
				{
					id: 'err',
					message: 'Links are missing'
				}
			]
		}
	});

	this.route('home', {
		path: '/home',
		data: {
			links: [
				{
					href: 'chatroom',
					name: 'Chatroom'
				},
				{
					href: 'anootherLink',
					name: 'Another Link'
				}
			],
			errors: [
				{
					id: 'err',
					message: 'Links are missing'
				}
			]
		}
	});

	this.route('chatRoom', {
		path: '/chatRoom'
	})

// admin pages

	this.route('admin', {
		path: '/admin',
		data: {
			links: [
				{
					href: 'configuration',
					name: 'Configurations'
				},
				{
					href: 'resetCollection',
					name: 'Reset Collection'
				}
			],
			errors: [
				{
					id: 'err',
					message: 'Links are missing'
				}
			]
		}
	});

	this.route('resetCollection', {
		path: 'resetCollection'
	});
});