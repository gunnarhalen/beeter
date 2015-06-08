var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route(require('./routes'));

server.views({
    engines: {
        html: require('handlebars')
    },
    path: 'views'
    //helpersPath: 'views/helpers',
    //layoutPath: 'views/layout',
    //layout: 'default'
});

server.start(function () {
	console.log('Server running at:', server.info.uri);
});
