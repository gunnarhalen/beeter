module.exports = [
{
    method: 'GET',
    path: '/assets/{file*}',
    handler: {
        directory: { path: 'assets' }
    }
},
{
    method: '*',
    path: '/{p*}', // catch-all path
    handler: function (request, reply) {
        return reply.view('404').code(404);
    }
},
{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply.view('index');
    }
},
{
    method: 'GET',
    path: '/entrar',
    handler: function (request, reply) {
        return reply.view('login');
    }
},
{
    method: 'GET',
    path: '/cadastrar',
    handler: function (request, reply) {
        return reply.view('signup');
    }
},
{
    method: 'GET',
    path: '/explorar',
    handler: function (request, reply) {
        return reply.view('explore');
    }
},
{
    method: 'GET',
    path: '/perfil',
    handler: function (request, reply) {
        return reply.view('profile');
    }
},
{
    method: 'GET',
    path: '/favoritos',
    handler: function (request, reply) {
        return reply.view('favourites');
    }
}
];