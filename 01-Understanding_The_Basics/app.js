const http = require("http");

const reqListener = (req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<h1>");
  res.write("Hello World!");
  res.write("<h1>");
  res.write("</html>");
  res.end();
};

const server = http.createServer(reqListener);
server.listen(3000, "127.0.0.1");
