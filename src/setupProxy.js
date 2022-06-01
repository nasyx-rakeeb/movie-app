const proxy = require("http-proxy-middleware");

module.exports = function(app) {

    app.use(proxy("/api", { target: "https://mern-movie-app-1.herokuapp.com/" }));

};
