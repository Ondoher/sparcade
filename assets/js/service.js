package('Sparcade', {
	Service : new Class({
		Extends: Spa.EventManager,

		Implements: [Spa.Services.AjaxService, Spa.Services.SocketService],

		initialize : function()
		{
			this.parent();
			this.initializeSocketService(SPARCADE.server);
			this.initializeAjaxService();
		}
	})
});

SPARCADE.service = new Sparcade.Service();
console.log('SPARCADE.service', SPARCADE.service);
