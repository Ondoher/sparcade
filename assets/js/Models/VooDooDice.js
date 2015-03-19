package('Sparcade.Models', {
	VooDooDice : new Class({

		Extends: Spa.Model,

		initialize : function()
		{
			this.parent();

			this.players = [];
			this.faces = ['devil', 'devil', 'devil', 'cross', 'cross', 'bones'];
		},

		roll : function(count)
		{
			count = (count === undefined)?3:count;
			var roll = [];
			for (var idx = 0; idx < count; idx++)
				roll.push(this.faces[Math.random(6)]);

			if (count == 1) return roll[0];

			console.log('roll', roll);
			return roll;
		},

		classify : function(roll)
		{
			var classes = {devil: 0, cross: 0, bones: 0};

			roll.each(function(face)
			{
				classes[face]++;
			}, this);

			return classes;
		},

		rollForFirst : function()
		{
			var rolls = [];
			for (var idx = 0; idx < this.game.length; idx++)
			{
				this.game[idx].roll = this.roll();
			}

			var highest = -1;
			var tie = false;

			this.game.each(function(player, which)
			{
				if (!player.lost)
				{
					var roll = player.roll;
					if (highest == -1)
						highest = 0;
					else
					{
						curClass = this.classify(roll);
						hiClass = this.classify(this.game[highest].roll);
						tie = curClass.devil == hiClass.devil?true:(curClass.devil > hiClass.devil)?false:tie;
						highest = curClass.devil > hiClass.devil?which:highest;
						console.log(highest, which, tie, Object.clone(curClass), Object.clone(hiClass));
					}

				}
			}, this);

			return {rolls: this.game, first: highest, tie: tie};
		},

		start : function(names)
		{
			this.game = [];
			playerCount = 0;
			names.each(function(name, idx)
			{
				this.game[idx] = {name: name, tokens: 15, lastAttacked: -1, attacking: -1, roll: [], devils: 0, pot: 0};
				if (name == '') this.game[idx].lost = true;
				else playerCount++;
			}, this);
		},

		turn : function(which, attacking)
		{
			this.game[which].lastAttacked = this.game[which].attacking;
			this.game[which].attacking = attacking;
			this.game[which].roll = [];
			this.game[which].devils = 0;
			this.game[which].pot = 0;
			this.curPlayer = which;
		},

		playerRoll : function()
		{
			var player = this.game[this.curPlayer];
			var attacking = this.game[player.attacking];
			this.game[which].roll = this.roll();
			var classes = this.classify(roll);
			player.devils += classes.devils;
			player.lost = player.devils >= 3;

			if (!player.lost)
			{
				player.pot += classes.bones;
				if (player.pot >= attacking.tokens) player.won = true;
			}

			return player;
		},

		playerPass : function()
		{
			var player = this.game[this.curPlayer];
			var attacking = this.game[player.attacking];

			if (player.lost)
			{
				attacking.tokens += 1;
				player.tokens -= 1;
				if (player.tokens <= 0)
				{
					player.over = true;
					this.playerCount--;
				}
			}
			else
			{
				attacking.tokens -= player.pot;
				player.tokens += pot;
				if (attacking.tokens <= 0)
				{
					attacking.over = true;
					this.playerCount--;
				}
			}
		},

		isGameOver : function()
		{
			return this.playerCount == 1;
		},

		findNextPlayer : function()
		{
			var nextPlayer = this.curPlayer;
			do
			{
				nextPlayer = Math.floor((nextPlayer + 1) % this.players.length);
			} while (this.players[nextPlayer].lost);

			return nextPlayer;
		}
	})
});
