

Meteor.publish('chatRoom', function () {
	return ChatRoom.find({});
});

Meteor.methods({
	newChatRoomMessage: function (sender, message) {
		ChatRoom.insert({
			sender: sender,
			message: message,
			timestamp: Date()
		});
	}
});