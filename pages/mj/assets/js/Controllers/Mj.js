Package('Sparcade.Controllers', {
	Mj : new Class({
		Extends : Sapphire.Controller,

		initialize : function()
		{
			this.parent();

			SAPPHIRE.application.listenPageEvent('load', 'mj', this.onLoad.bind(this));
			SAPPHIRE.application.listenPageEvent('show', 'mj', this.onShow.bind(this));
		},

		onLoad : function()
		{
			this.view = new Sparcade.Views.Mj();
		},

		onShow : function(panel, query)
		{
			this.view.draw()
		},
	})
});

SAPPHIRE.application.registerController('mj', new Sparcade.Controllers.Mj());
