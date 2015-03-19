Package('Sparcade.Controllers', {
	Sparcade : new  Class({
		Extends: Sapphire.Controller,

		initialize : function()
		{
			this.parent();
			SAPPHIRE.application.listen('start', this.onStart.bind(this));
			SAPPHIRE.application.listen('ready', this.onReady.bind(this));
		},

		onStart : function(callback)
		{
			callback();
		},

		onReady : function()
		{
			console.log('SparcadeController', 'onReady');
			this.view = new Sparcade.Views.Sparcade();
			this.view.listen('gotoMj', this.onGotoGame.bind(this, 'mj'));
			this.view.listen('gotoPd', this.onGotoGame.bind(this, 'pd'));
			this.view.listen('gotoVdd', this.onGotoGame.bind(this, 'vdd'));
		},

		onGotoGame : function(which)
		{
			console.log('SparcadeController', 'onGotoGame', which);
			SAPPHIRE.application.showPage(which);
		}
	})
});

SAPPHIRE.application.registerController('sparcade', new Sparcade.Controllers.Sparcade());
