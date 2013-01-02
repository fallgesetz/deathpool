People = new Meteor.Collection("People");
// { name: "Margaret Thatcher", meta_data: {birth: ..., etc} }
UserList = new Meteor.Collection("UserList");
// { user_id: whatever, list: [] }

// enforce an interface for inserts and shit
Meteor.methods({
	'doesUserHaveList' : function() {
		return UserList.findOne({'user_id': Meteor.userId()});
	},

	'createUserList' : function(user_id, list) {
		// TODO: sanitize?
		UserList.insert({'user_id' : user_id,
				 'list' : list});
});
