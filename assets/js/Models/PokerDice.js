var ONES             = 0;
var TWOS             = 1;
var THREES           = 2;
var FOURS            = 3;
var FIVES            = 4;
var SIXES            = 5;
var THREE_OF_A_KIND  = 6;
var FOUR_OF_A_KIND   = 7;
var FULL_HOUSE       = 8;
var LOW_STRAIGHT     = 9;
var HIGH_STRAIGHT    = 10;
var CHANCE           = 11;
var FIVE_OF_A_KIND   = 12;

package('Sparcade.Models', {
	PokerDice : new Class({

		Extends: Spa.Model,

		initialize : function()
		{
			this.parent();

			this.hands = [];
			this.hand = [];
			this.old = [];
			this.assigned = 0;
			this.rolls = 0;
		},

		newGame : function()
		{
			this.hands = [];
			this.hand = [];
			this.held = [];
			this.assigned++;
			this.rolls = 0;
		},

		newHand : function()
		{
			this.rolls = 0;
			this.hand = [];
			this.held = [];
		},

		getCurrentHand : function()
		{
			return this.hand;
		},

		testStraight : function(hand, index)
		{
			var hand = hand.slice(0);
			hand.sort();

			for (var idx = 1; idx < 5; idx++)
				if ((hand[idx - 1] + 1) != (hand[idx])) return -1;

			return hand[0];
		},

		calcRuns : function(hand)
		{
			var runs = [0, 0, 0, 0, 0, 0];
			hand = (typeof(hand) == 'number')?this.hands[hand]:hand;

			for (var idx = 0; idx < 5; idx++)
				runs[hand[idx] - 1]++;

			return runs;
		},

		isNOfAKindExact : function(runs, index, n)
		{
			for (var idx = 0; idx < 6; idx++)
				if (runs[idx] == n) return idx + 1;
			return 0;
		},

		isNOfAKind : function(runs, index, n)
		{
			for (var idx = 0; idx < 6; idx++)
				if (runs[idx] >= n) return true;
			return false;
		},

		isFullHouse : function(runs, index)
		{
			return (this.isNOfAKindExact(runs, index, 2) && this.isNOfAKindExact(runs, index, 3));
		},

		scoreFace : function(hand, index)
		{
			var score = 0;
			var face = index + 1;

			for (var idx = 0; idx < 5; idx++)
				if (hand[idx] == face) score += face;

		// Double bonus for 5 of a kind
			if (score == 5 * face) score *= 2;
			return score;
		},

		scoreTotal : function(hand, index)
		{
			var score = 0;

			for (idx = 0; idx < 5; idx++)
				score += hand[idx];

			return score;
		},

		scoreOne : function(hand, index)
		{
			var score = 0;
			index = (typeof(hand) == 'number')?hand:index;
			hand = (typeof(hand) == 'number')?this.hands[hand]:hand;
			if (hand == undefined) return 0;

			var runs = this.calcRuns(hand);

			switch (index)
			{
				case ONES:
				case TWOS:
				case THREES:
				case FOURS:
				case FIVES:
				case SIXES:
					score = this.scoreFace(hand, index);
					break;

				case THREE_OF_A_KIND:
					if (this.isNOfAKind(runs, index, 3))
						score = this.scoreTotal(hand, index);
				case FOUR_OF_A_KIND:
					if (this.isNOfAKind(runs, index, 4))
						score = this.scoreTotal(hand, index);
					break;

				case FULL_HOUSE:
					if (this.isFullHouse(runs, index))
						score = 25;
					break;
				case LOW_STRAIGHT:
					if (this.testStraight(hand, index) == 1)
						score = 40;
					break;
				case HIGH_STRAIGHT:
					if (this.testStraight(hand, index) == 2)
						score = 40;
					break;
				case CHANCE:
					score = this.scoreTotal(hand, index);
					break;

				case FIVE_OF_A_KIND:
					if (this.isNOfAKindExact(runs, index, 5))
						score = 50;
					break;
			}
			return score;
		},

		score : function(hand, index)
		{
			var score = 0;
			index = (typeof(hand) == 'number')?hand:index;
			hand = (typeof(hand) == 'number')?this.hands[hand]:hand;

			if (hand == undefined)
			{
				for (var idx = ONES; idx <= FIVE_OF_A_KIND; idx++)
					score += this.scoreOne(idx);
			}
			else
				score = this.scoreOne(hand, index);

			return score;
		},

		freeSlot : function(index)
		{
			return this.hands[index] == undefined;
		},

		assignHand : function(index)
		{
			this.hands[index] = this.hand.slice(0);
			this.assigned++;
		},

		holdAll : function()
		{
			this.held = [0, 1, 2, 3, 4];
		},

		hold : function(which)
		{
			this.held.push(which);
		},

		unhold : function(which)
		{
			var idx = this.held.indexOf(which);
			if (idx != -1)
				this.held.splice(idx, 1);
		},

		isHeld : function(which)
		{
			return this.held.indexOf(which) != -1;
		},

		canRoll : function()
		{
			return this.rolls < 3;
		},

		roll : function()
		{
			this.rolls++;
			for (var idx = 0; idx < 5; idx++)
				if (this.held.indexOf(idx) == -1)
					this.hand[idx] = Math.floor(Math.random() * 6) + 1;
			if (this.rolls >= 3) this.holdAll();
		},

		isGameOver : function()
		{
			return this.assigned == 13;
		}

	})
});
