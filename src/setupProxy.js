const proxy = require('http-proxy-middleWare');

module.exports = function(app) {
    app.use(proxy('/api',{target:'http://localhost:3002/'}));
}