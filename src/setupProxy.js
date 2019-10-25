const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://39.107.252.189:8080",
      changeOrigin: true
    })
  );
  app.use(
    proxy('/api1',{
      target:'http://10.9.20.224',
      changeOrigin:true
    })
  )
};