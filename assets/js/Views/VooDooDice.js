package('Sparcade.Views', {
	VooDooDice : new Class({
		Extends: Spa.View,

		initialize : function()
		{
			this.parent();
			this.position = 0;
			$('#vdd-start').click(this.onStart.bind(this));
			$('#player-1-seat').click(this.onGoto.bind(this, 0));
			$('#player-2-seat').click(this.onGoto.bind(this, 1));
			$('#player-3-seat').click(this.onGoto.bind(this, 2));
			$('#player-4-seat').click(this.onGoto.bind(this, 3));
		},

		newGame : function()
		{
			console.log('Sparcade.Views.VooDooDice', 'newGame');
			$('#vdd-page').addClass('new-game');
			$('#vdd-page').removeClass('playing');
		},

		start : function(players)
		{
			$('#vdd-page').removeClass('new-game');
			$('#vdd-page').addClass('playing');

			players.each(function(name, idx)
			{
				$('#player-' + (idx + 1) + '-name').html(name);
			}, this);
		},

		message : function(msg)
		{
			$('#vdd-message').html(msg);
		},

		drawRollForFirst : function(rolls)
		{
			console.log(rolls);
			rolls.rolls.each(function(player, idx)
			{
				roll = player.roll;
				this.drawRoll(idx, roll);
			}, this);

			if (rolls.tie)
			{
				this.message('Tie, Roll again')
			}
			else
			{
				this.message(rolls.rolls[rolls.first].name + ' plays first');
			}
		},

		drawRoll : function(player, roll)
		{
			var container = $('#player-' + (player + 1) + '-rolls');
			container.empty();

			roll.each(function(face)
			{
				var die = SPA.templates.get('vddie-' + face);
				container.append(die);
			});
		},

		resetTable : function()
		{
			$('#vdd-players').addClass('stationary')
			$('#vdd-page').removeClass('position-5');
			$('#vdd-page').addClass('position-1');
		},

		gotoPosition : function(which)
		{
			if (this.position == which) return;

			$('#vdd-page').removeClass('position-' + (this.position + 1))
			$('#vdd-players').removeClass('stationary')
			this.position = which;
			if (which == 0) which = 4
			$('#vdd-page').addClass('position-' + (which + 1))
			if (which == 4) this.resetTable.delay(1000, this);
		},

		onStart : function()
		{
			var players = [];

			players[0] = $('#player-name-1').val();
			players[1] = $('#player-name-2').val();
			players[2] = $('#player-name-3').val();
			players[3] = $('#player-name-4').val();

			this.fire('start', players);
		},

		onGoto : function(which)
		{
			this.gotoPosition(which)
		}
	})
})
