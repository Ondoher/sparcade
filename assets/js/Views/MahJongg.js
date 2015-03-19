/*
	Copyright 2013 Glenn Anderson

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

package('Sparcade.Views', {
	MahJongg : new Class({

		Extends : Spa.EventManager,

		defaultTileset :
		{
			name : 'Ivory Tiles',
			image : 'sparcade/assets/images/tilesets/ivory/dragon-r.png',
			description : '',
			tiles : 144,
			suits : ['bamboo', 'character', 'dot', 'dragon', 'wind', 'flower', 'season'],
			bamboo : [0, 1, 2, 3, 4, 5, 6, 7, 8],
			character : [9, 10, 11, 12, 13, 14, 15, 16, 17],
			dot : [18, 19, 20, 21, 22, 23, 24, 25, 26],
			dragon : [27, 28, 29],
			wind : [30, 31, 32, 33],
			flower : [34],
			season : [35],
			rightpad : 9,
			bottompad : 9,
			width : 55,
			height : 77,
			depthx : -8,
			depthy : -7,
			highlight : 'sparcade/assets/images/tilesets/ivory/highlight.png',
			groups : [
				[0,  0,  0,  0],
				[1,  1,  1,  1],
				[2,  2,  2,  2],
				[3,  3,  3,  3],
				[4,  4,  4,  4],
				[5,  5,  5,  5],
				[6,  6,  6,  6],
				[7,  7,  7,  7],
				[8,  8,  8,  8],
				[9,  9,  9,  9],
				[10, 10, 10, 10],
				[11, 11, 11, 11],
				[12, 12, 12, 12],
				[13, 13, 13, 13],
				[14, 14, 14, 14],
				[15, 15, 15, 15],
				[16, 16, 16, 16],
				[17, 17, 17, 17],
				[18, 18, 18, 18],
				[19, 19, 19, 19],
				[20, 20, 20, 20],
				[21, 21, 21, 21],
				[22, 22, 22, 22],
				[23, 23, 23, 23],
				[24, 24, 24, 24],
				[25, 25, 25, 25],
				[26, 26, 26, 26],
				[27, 27, 27, 27],
				[28, 28, 28, 28],
				[29, 29, 29, 29],
				[30, 30, 30, 30],
				[31, 31, 31, 31],
				[32, 32, 32, 32],
				[33, 33, 33, 33],
				[34, 35, 36, 37],
				[38, 39, 40, 41]
			],
			images : [
				'sparcade/assets/images/tilesets/ivory/b1.png',
				'sparcade/assets/images/tilesets/ivory/b2.png',
				'sparcade/assets/images/tilesets/ivory/b3.png',
				'sparcade/assets/images/tilesets/ivory/b4.png',
				'sparcade/assets/images/tilesets/ivory/b5.png',
				'sparcade/assets/images/tilesets/ivory/b6.png',
				'sparcade/assets/images/tilesets/ivory/b7.png',
				'sparcade/assets/images/tilesets/ivory/b8.png',
				'sparcade/assets/images/tilesets/ivory/b9.png',
				'sparcade/assets/images/tilesets/ivory/c1.png',
				'sparcade/assets/images/tilesets/ivory/c2.png',
				'sparcade/assets/images/tilesets/ivory/c3.png',
				'sparcade/assets/images/tilesets/ivory/c4.png',
				'sparcade/assets/images/tilesets/ivory/c5.png',
				'sparcade/assets/images/tilesets/ivory/c6.png',
				'sparcade/assets/images/tilesets/ivory/c7.png',
				'sparcade/assets/images/tilesets/ivory/c8.png',
				'sparcade/assets/images/tilesets/ivory/c9.png',
				'sparcade/assets/images/tilesets/ivory/d1.png',
				'sparcade/assets/images/tilesets/ivory/d2.png',
				'sparcade/assets/images/tilesets/ivory/d3.png',
				'sparcade/assets/images/tilesets/ivory/d4.png',
				'sparcade/assets/images/tilesets/ivory/d5.png',
				'sparcade/assets/images/tilesets/ivory/d6.png',
				'sparcade/assets/images/tilesets/ivory/d7.png',
				'sparcade/assets/images/tilesets/ivory/d8.png',
				'sparcade/assets/images/tilesets/ivory/d9.png',
				'sparcade/assets/images/tilesets/ivory/dragon-g.png',
				'sparcade/assets/images/tilesets/ivory/dragon-r.png',
				'sparcade/assets/images/tilesets/ivory/dragon-w.png',
				'sparcade/assets/images/tilesets/ivory/wind-n.png',
				'sparcade/assets/images/tilesets/ivory/wind-s.png',
				'sparcade/assets/images/tilesets/ivory/wind-e.png',
				'sparcade/assets/images/tilesets/ivory/wind-w.png',
				'sparcade/assets/images/tilesets/ivory/flower-1.png',
				'sparcade/assets/images/tilesets/ivory/flower-2.png',
				'sparcade/assets/images/tilesets/ivory/flower-3.png',
				'sparcade/assets/images/tilesets/ivory/flower-4.png',
				'sparcade/assets/images/tilesets/ivory/season-1.png',
				'sparcade/assets/images/tilesets/ivory/season-2.png',
				'sparcade/assets/images/tilesets/ivory/season-3.png',
				'sparcade/assets/images/tilesets/ivory/season-4.png'
			]
		},

		initialize : function()
		{
			this.parent();

		// Get various document elements
			$('#mj-hint-button').click(this.fire.bind(this, 'hint'));
			$('#mj-undo-button').click(this.fire.bind(this, 'undo'));
			$('#mj-redo-button').click(this.fire.bind(this, 'redo'));
			$('#mj-new-button').click(this.fire.bind(this, 'new'));

			//$('#mj-board-nbr').click
			this.gameBoardDiv = $('#mj-game-board');
			this.layoutDiv = $('#mj-layout');
			this.messageDiv = $('#mj-message');
			this.shortMessageDiv = $('#mj-small-message');
			this.tilesLeftDiv = $('#mj-tiles-left');
			this.timeDiv = $('#mj-time');

			this.setTileset();
			this.tiles = [];
		},

		drawTime : function(time)
		{
		},

		drawState : function(tileCount, canUndo, canRedo)
		{
		},

		showTile : function(tile, on)
		{
			if (on)
				this.tiles[tile].show();
			else
				this.tiles[tile].hide();
		},

		hintTile : function(tile, on)
		{
			this.highlightTile(tile, on);
		},

		getHighlight : function()
		{
			var highlight = $('<img class="tile-highlight"/>');
			highlight.attr('src', this.tileset.highlight);
			highlight.css({position: 'absolute', top: '0px', left: '0px'});

			return highlight;
		},

		highlightTile : function(tile, on)
		{
			if (on)
				this.tiles[tile].append(this.getHighlight());
			else
				this.tiles[tile].find('.tile-highlight').remove();
		},

		message : function(message)
		{
		},

		shortMessage : function(message)
		{
		},

		addTile : function(idx, x, y, z, face)
		{
	//		console.log(idx, x, y, z, face);
			var tileset = this.tileset;

			var rightPad = tileset.rightpad;
			var bottomPad = tileset.bottompad;
			var faceWidth = tileset.width - rightPad;
			var faceHeight = tileset.height - bottomPad;
			var gridWidth = faceWidth / 2;
			var gridHeight = faceHeight / 2;
			var gridDepthX = tileset.depthx;
			var gridDepthY = tileset.depthy;

			var z = z;
			var x = x * gridWidth + (gridDepthX * z);
			var y = y * gridHeight + (gridDepthY * z);
			var tile = $('<div><img id="tile-face"/></div>');
			var canvas = $('#board-canvas');

			tile.find('#tile-face').attr('src', tileset.images[face]);
			tile.css({position: 'absolute', left: x + 'px', top: y + 'px'});

			tile.click(this.fire.bind(this, 'select', idx));

			canvas.append(tile);
			this.tiles[idx] = tile;
		},

		clearBoard : function()
		{
			$('#board-canvas').empty();
			this.tiles = [];
		},

		setTileset : function (tileset)
		{
			this.tileset = (tileset !== undefined)?tileset:this.defaultTileset;
		}
	})
});

