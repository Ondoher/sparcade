package('Sparcade', {
	SparcadeView : new Class({
		Extends: Spa.View,

		initialize : function()
		{
			this.parent();

			$('#goto-mj').click(this.fire.bind(this, 'gotoMj'));
			$('#goto-pd').click(this.fire.bind(this, 'gotoPd'));
			$('#goto-vdd').click(this.fire.bind(this, 'gotoVdd'));
		}
	}),

	SparcadeController : new Class({
		Extends: Spa.Controller,

		initialize : function()
		{
			this.parent();
			SPA.application.listen('ready', this.onReady.bind(this));
			SPA.history.listen('init', this.onAddressInit.bind(this));
			SPA.history.listen('change', this.onAddressChange.bind(this));
		},

		onReady : function()
		{
			console.log('SparcadeController', 'onReady');
			this.view = new Sparcade.SparcadeView();
			this.view.listen('gotoMj', this.onGotoGame.bind(this, 'mj'));
			this.view.listen('gotoPd', this.onGotoGame.bind(this, 'pd'));
			this.view.listen('gotoVdd', this.onGotoGame.bind(this, 'vdd'));
		},

		onGotoGame : function(which)
		{
			console.log('SparcadeController', 'onGotoGame', which);
			SPA.application.showPage(which);
		},

		onAddressInit : function(event)
		{
			var address = SPA.history.getFirst();
			console.log('SparcadeController', 'onAddressInit', event, address);
			if (address.page == '')
				SPA.application.showPage('mj');
			else
				SPA.history.handleFirst();
		},

		onAddressChange : function(event, init)
		{
			console.log('SparcadeController', 'oAddressChange', event, init);
		}
	})
});

SPA.application.registerController('sparcade', new Sparcade.SparcadeController());
