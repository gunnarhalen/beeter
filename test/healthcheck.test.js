var assert = require('assert');
var healthcheckHandler = require('../handlers/healthcheck');
var routes = require('../routes');
var Hapi = require('hapi');

describe('Healthcheck Endpoint', function () {
    describe('Handler', function () {
        it('should return status ok with 200 code', function () {
            var replyData = null;
            var statusCode = null;

            var mockReply = function (data) {
                replyData = data;
                return {
                    code: function (code) {
                        statusCode = code;
                        return this;
                    }
                };
            };

            var mockRequest = {};

            healthcheckHandler(mockRequest, mockReply);

            assert.strictEqual(statusCode, 200);
            assert.ok(replyData);
            assert.strictEqual(replyData.status, 'ok');
            assert.strictEqual(typeof replyData.uptime, 'number');
            assert.ok(!Number.isNaN(Date.parse(replyData.timestamp)));
        });
    });

    describe('Routes configuration', function () {
        it('should register GET /healthcheck route', function () {
            var healthRoute = routes.find(function (route) {
                return route.path === '/healthcheck' && route.method === 'GET';
            });

            assert.ok(healthRoute, 'Route GET /healthcheck should be defined');
            assert.strictEqual(healthRoute.handler, healthcheckHandler);
        });
    });

    describe('Server integration', function () {
        it('should respond to GET /healthcheck with 200 and json payload', function (done) {
            var server = new Hapi.Server();
            server.connection();
            server.route(routes);

            server.inject({ method: 'GET', url: '/healthcheck' }, function (res) {
                assert.strictEqual(res.statusCode, 200);
                var payload = typeof res.payload === 'string' ? JSON.parse(res.payload) : res.payload;
                assert.strictEqual(payload.status, 'ok');
                assert.strictEqual(typeof payload.uptime, 'number');
                assert.ok(!Number.isNaN(Date.parse(payload.timestamp)));
                done();
            });
        });
    });
});
