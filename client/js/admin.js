Template.admin.events({
	'click input#reset': function () {
		Meteor.call('reset');
	}
});