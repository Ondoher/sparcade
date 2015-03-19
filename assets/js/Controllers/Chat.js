package('Sparcade.Controllers', {
	Chat : new Class({
		Extends: Spa.Controller,


		initialize : function()
		{
			this.parent();
			SPA.application.listen('ready', this.onReady.bind(this));
		},

		onReady : function()
		{
			this.model = new Sparcade.Models.Chat();
			this.model.connect();
		},
	})
});

SPA.application.registerController('chat', new Sparcade.Controllers.Chat());
