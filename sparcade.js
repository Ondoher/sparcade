var Q = require('q');
var sapphire = require('sapphire-express');
var mj = require('./pages/mj/mj.js');

function main(req, res, app)
{
	app.addCSS([
		'/sparcade/assets/css/sparcade.css',
	]);

	app.addJS([
		'/assets/js/lib/translate.js',
		'/assets/js/lib/templates.js',
		'/assets/js/lib/sets.js',
		'/sparcade/assets/js/random.js',
		'/sparcade/assets/js/Views/Sparcade.js',
		'/sparcade/assets/js/Controllers/Sparcade.js',
	]);


	return Q(app)
}

exports.getApplication = function(req, res)
{
	var session = req.session.get();
	var app = new sapphire.Application('SPARCADE', req, res);

	app.setTitle('SPArcade');
	app.setBody('apps/sparcade/templates/body.html');
	app.setMaster('apps/sparcade/templates/master.html');

//	return main(req, res, app)
	return sapphire.features.animator(req, res, app)
		.then(sapphire.features.dialogs.bind(sapphire.features.dialogs, req, res))
		.then(main.bind(this, req, res))
		.then(mj.bind(mj, req, res))
		.then(function(app)
		{
			return Q(app);
		})
}


/*
exports.buildApplication = function(query, data, callback)
{
	var builder = new spaBuilder.SpaBuilder('SPARCADE', 'Games');
	builder.addJS(['/socket.io/socket.io.js'], true);
	builder.addJS([
			'assets/js/lib/templates.js', 'assets/js/lib/history.js', 'assets/js/lib/ajax-service.js', 'assets/js/lib/socket-service.js',
			'sparcade/assets/js/sparcade.js', 'sparcade/assets/js/random.js', 'sparcade/assets/js/service.js',
			'sparcade/assets/js/Models/Chat.js', 'sparcade/assets/js/Controllers/Chat.js']);

	builder.addCSS(['sparcade/assets/css/sparcade.css']);
	builder.setBody('apps/sparcade/body.html');
	//builder.addFileReplacement('chat', 'apps/sparcade/chat.html');
	//builder.addStringReplacement('chat', '');
	builder.setTitle('Sparcade');
	builder.addConfig('server', '127.0.0.1');
	builder.addPage({name: 'mj', url: 'sparcade/assets/pages/mj.html', javascript: ['sparcade/assets/js/sets.js', 'sparcade/assets/js/Models/MahJongg.js', 'sparcade/assets/js/Views/MahJongg.js', 'sparcade/assets/js/Controllers/MahJongg.js'], css: ['sparcade/assets/css/mj.css']});
	builder.addPage({name: 'pd', url: 'sparcade/assets/pages/pd.html', javascript: ['sparcade/assets/js/Models/PokerDice.js', 'sparcade/assets/js/Views/PokerDice.js', 'sparcade/assets/js/Controllers/PokerDice.js'], css: ['sparcade/assets/css/pd.css']});
	builder.addPage({name: 'vdd', url: 'sparcade/assets/pages/vdd.html', javascript: ['sparcade/assets/js/Models/VooDooDice.js', 'sparcade/assets/js/Views/VooDooDice.js', 'sparcade/assets/js/Controllers/VooDooDice.js'], css: ['sparcade/assets/css/vdd.css']});
	builder.getHTML(callback);
}
*/
