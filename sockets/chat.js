
var ChatServer = new Class({
	connect : function(socket, data, callback)
	{
		if (callback) callback({result: 'ok'});
	}
});


exports.getService = function()
{
	return new ChatServer();
};
