module.exports = function healthcheckHandler(request, reply) {
    return reply({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    }).code(200);
};
