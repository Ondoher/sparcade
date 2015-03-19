package('Sparcade.Models', {
	Chat : new Class({
		Extends : Spa.Model,

		initialize : function()
		{
			this.parent();
		},

		connect : function(callback)
		{
			console.log('Sparcade.Models.Chat.connect');
			data = {name: 'Glenn'}
			SPARCADE.service.message('sparcade/chat/connect', data, function(result)
			{
				console.log('Sparcade.Models.Chat.connect', result);
				if (callback) callback(result);
			}.bind(this));
		}
	})
});
