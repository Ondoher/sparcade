Package('Sparcade.Views', {
	 Sparcade : new  Class({
		Extends: Sapphire.View,

		initialize : function()
		{
			this.parent();

			$('#goto-mj').click(this.fire.bind(this, 'gotoMj'));
			$('#goto-pd').click(this.fire.bind(this, 'gotoPd'));
			$('#goto-vdd').click(this.fire.bind(this, 'gotoVdd'));
		}
	})
});
