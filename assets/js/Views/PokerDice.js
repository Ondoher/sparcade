
package('Sparcade.Views', {
	PokerDice : new Class({
		Extends: Spa.View,

		initialize : function()
		{
			this.parent();

			$('#dice-rolled-slot-1').click(this.fire.bind(this, 'hold', 0));
			$('#dice-rolled-slot-2').click(this.fire.bind(this, 'hold', 1));
			$('#dice-rolled-slot-3').click(this.fire.bind(this, 'hold', 2));
			$('#dice-rolled-slot-4').click(this.fire.bind(this, 'hold', 3));
			$('#dice-rolled-slot-5').click(this.fire.bind(this, 'hold', 4));

			$('#dice-held-slot-1').click(this.fire.bind(this, 'unhold', 0));
			$('#dice-held-slot-2').click(this.fire.bind(this, 'unhold', 1));
			$('#dice-held-slot-3').click(this.fire.bind(this, 'unhold', 2));
			$('#dice-held-slot-4').click(this.fire.bind(this, 'unhold', 3));
			$('#dice-held-slot-5').click(this.fire.bind(this, 'unhold', 4));

			$('#pd-roll').click(this.fire.bind(this, 'roll'));
			$('#pd-new-game').click(this.fire.bind(this, 'newGame'));

			for (idx = ONES; idx <= FIVE_OF_A_KIND; idx++)
			{
				$('#score-' + idx).click(this.fire.bind(this, 'assignHand', idx));
			}
		},

		drawScoreCard : function(game)
		{
			var hand = game.getCurrentHand();

			for (var idx = ONES; idx <= FIVE_OF_A_KIND; idx++)
			{
				var lineSelector = $('#line-' + idx);
				var scoreSelector = $('#value-' + idx);
				var score = 0;

				lineSelector.removeClass('final-score score-will-be-zero score-will-have-points');
				var lineClass = '';
				if (game.freeSlot(idx))
				{
					score = game.scoreOne(hand, idx);
					lineClass = (score == 0)? 'score-will-be-zero':'score-will-have-points';
				}
				else
				{
					score = game.scoreOne(idx);
					lineClass = 'final-score';
				}


				scoreSelector.html(score);
				lineSelector.addClass(lineClass);
			}

			$('#value-total').html(game.score());
		},


		drawRolledDice : function(game)
		{
			game.hand.each(function(die, idx)
			{
				var slot = $('#dice-rolled-slot-' + (idx + 1));
				slot.removeClass('can-hold');
				slot.empty();
				if (!game.isHeld(idx))
				{
					var die = SPA.templates.get('die' + (die));

					slot.append(die);
					slot.addClass('can-hold');
				}
			}, this);
		},

		drawHeldDice : function(game)
		{
			game.hand.each(function(die, idx)
			{
				var slot = $('#dice-held-slot-' + (idx + 1));
				var canUnhold = game.canRoll() && game.isHeld(idx);

				slot.removeClass('can-unhold');
				if (canUnhold) slot.addClass('can-unhold');

				slot.empty();
				if (game.isHeld(idx))
				{
					var die = SPA.templates.get('die' + (die));
					slot.append(die);
				}
			}, this);
		},

		draw : function(game)
		{
			this.drawRolledDice(game);
			this.drawHeldDice(game);
			this.drawScoreCard(game);
		}
	})
});

