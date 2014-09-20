Meteor.subscribe('chatRoom');
Meteor.subscribe('users');

Template.chatRoom.rendered = function () {
	$('#link-bottom').click();
}

Template.chatRoom.helpers({
	messages: function () {
		var messages = [];
		var chatRoom = ChatRoom.find({});

	// return messages with id not sure though...
	
		chatRoom.forEach(function (msg) {
			var message = msg.message,
				sender = Meteor.users.findOne({_id: msg.sender}),
				timestamp = new Date(msg.timestamp),
				date = new Date(),
				month = timestamp.getMonth() + 1,
				d;

			if("" + date.getFullYear() + date.getDate() + date.getMonth() === "" + timestamp.getFullYear() + timestamp.getDate() + timestamp.getMonth()){
				d = "" + timestamp.getHours() + ":" + timestamp.getMinutes() + ", " + month + "/" + timestamp.getDate() ;
			}else{
				d = "" + timestamp.getHours() + ":" + timestamp.getMinutes() + ", " + timestamp.getFullYear() + "/" + month + "/" + timestamp.getDate() ;
			}

			messages.push({
				sender: sender.profile.firstName,
				message: message,
				timestamp: d
			});
		});

		$('.wrapper').animate({
			scrollTop: $(".chat-room").height()
		}, 1000);

		return messages;
	}
});

Template.chatRoom.events({
	'keyup textarea#msg': function (e) {
		if(e.keyCode === 13){
			var sender = Meteor.userId();
				message = $('#msg').val();
			Meteor.call('newChatRoomMessage', sender, message);
			$('#msg').val('');
		}
	},
	'click a#logout': function () {
		Meteor.logout();
		Router.go('login');
	}
});