const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://39.107.252.189:8080",//跨域地址
      changeOrigin: true
    }),
  );
};


