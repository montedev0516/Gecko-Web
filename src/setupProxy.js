const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://45.15.25.187:3000/api/v1",
      changeOrigin: true,
    })
  );
};
