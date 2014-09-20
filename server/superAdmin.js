Meteor.publish('users', function () {
	return Meteor.users.find({});
});

Meteor.methods({
	reset: function () {
		ChatRoom.remove({});
	}
});