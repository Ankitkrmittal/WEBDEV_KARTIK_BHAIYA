// server.js
import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Hello from Node HTTP Server 🚀" }));
});

const PORT = 4444;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
