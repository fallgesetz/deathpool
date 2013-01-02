Accounts.ui.config({
	requestPermissions: {
		facebook: ['publish_actions'],
	}
});


Template.loggedin.events({
	'click #add_button' : function (event) {
		var li = document.createElement('li');
		var name = $('#name_of_the_dead').val()
		// TODO: this logic sucks
		if (!name) {
			return;
		}
		li.appendChild(document.createTextNode(name));
		var deathol = document.getElementById('deathol');
		deathol.appendChild(li);
		$("#name_of_the_dead").val('');
	},

	'click #submit_button' : function (event) {
		var list = [];
		$('#deathol li').each(function() {
			list.push( $(this).text() );
		});
		Meteor.call('createUserList', Meteor.userId(), list);
	},
});

Template.loggedin.helpers({
	'doesUserHaveList' : function () {
		return UserList.findOne({'user_id': Meteor.userId()});
	},
});

Template.loggedin.user_list = function() {
	return UserList.findOne({'user_id': Meteor.userId()})['list'];
};
