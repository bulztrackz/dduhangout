Meteor.publish('center', function () {
	return Center.find({});
});

Meteor.publish('role', function () {
	return Role.find({});
});