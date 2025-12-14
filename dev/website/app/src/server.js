const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js + Kubernetes</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          text-align: center;
          padding: 2rem;
        }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        p { font-size: 1.2rem; opacity: 0.9; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from Node.js + Kubernetes!</h1>
        <p>This website is deployed using a Helm chart.</p>
      </div>
      <div class="container">
        <a href="/api/health">Check Health</a>
      </div>
    </body>
    </html>
  `);
});

// GET /api/health
server.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', message: 'Node.js + Kubernetes is running' });
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

