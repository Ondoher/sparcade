package('Sparcade.Controllers', {
	VooDooDice : new Class({
		Extends : Spa.Controller,

		initialize : function()
		{
			this.parent();

			SPA.application.listenPageEvent('load', 'vdd', this.onLoad.bind(this));
			SPA.application.listenPageEvent('show', 'vdd', this.onShow.bind(this));
		},

		newGame : function()
		{
			console.log('Sparcade.Controllers.VooDooDice', 'newGame');
			this.view.newGame();
		},

		onLoad : function()
		{
			console.log('Sparcade.Controllers.VooDooDice', 'onLoad');

			this.game = new Sparcade.Models.VooDooDice();
			this.view = new Sparcade.Views.VooDooDice();

			this.view.listen('start', this.onStartGame.bind(this));
			//this.view.listen('newHand', this.onNewHand.bind(this));
			//this.view.listen('roll', this.onRoll.bind(this));
			//this.view.listen('hold', this.onHold.bind(this));
			//this.view.listen('unhold', this.onUnhold.bind(this));
			//this.view.listen('assignHand', this.onAssignHand.bind(this));
			this.newGame();
		},

		onShow : function()
		{
		},

		onStartGame : function(names)
		{
			this.view.start(names);
			this.game.start(names);
			var rolls = this.game.rollForFirst();
			this.view.drawRollForFirst(rolls);

		},

//			var rollForFirst = this.game.rollForFirst();
//			if (!rollForFirst.tie) this.nextPlayer = rollForFirst.first;
	})
});

SPA.application.registerController('vdd', new Sparcade.Controllers.VooDooDice());

