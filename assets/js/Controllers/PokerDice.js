var ROLLS = 2;

package('Sparcade.Controllers', {
	PokerDice : new Class({
		Extends : Spa.Controller,

		initialize : function(tilePath, tileImgs, tileSize, rayout)
		{
			this.parent();

			this.tilePath = tilePath;
			this.tileImgs = tileImgs;
			this.tileSize = tileSize;

			SPA.application.listenPageEvent('load', 'pd', this.onLoad.bind(this));
			SPA.application.listenPageEvent('show', 'pd', this.onShow.bind(this));
		},

		onLoad : function()
		{
			this.game = new Sparcade.Models.PokerDice();
			this.view = new Sparcade.Views.PokerDice();

			this.view.listen('newGame', this.onNewGame.bind(this));
			this.view.listen('newHand', this.onNewHand.bind(this));
			this.view.listen('roll', this.onRoll.bind(this));
			this.view.listen('hold', this.onHold.bind(this));
			this.view.listen('unhold', this.onUnhold.bind(this));
			this.view.listen('assignHand', this.onAssignHand.bind(this));
			this.newGame();
		},

		onShow : function()
		{
		},

		newGame : function()
		{
			this.game.newGame();
			this.game.roll();
			this.view.draw(this.game);
		},

		onNewGame : function()
		{
			this.newGame();
		},

		onNewHand : function()
		{
			this.game.newHand();
			this.view.draw(this.game)
		},

		onRoll : function()
		{
			this.game.canRoll();
				this.game.roll();
			this.view.draw(this.game)
		},

		onHold : function(which)
		{
			if (!this.game.isHeld(which))
				this.game.hold(which);

			this.view.draw(this.game);
		},

		onUnhold : function(which)
		{
			if (this.game.canRoll() && this.game.isHeld(which))
				this.game.unhold(which);
			this.view.draw(this.game);
		},

		onAssignHand : function(which)
		{
			this.game.assignHand(which);
			this.game.newHand();
			this.view.draw(this.game);
		}
	})
});

SPA.application.registerController('pd', new Sparcade.Controllers.PokerDice());
