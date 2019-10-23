const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://10.9.28.157:80",//跨域地址
      changeOrigin: true
    })
  );
};