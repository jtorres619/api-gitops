const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Health check endpoint
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', message: 'Node.js + Kubernetes is running' }));
    return;
  }

  // Default: serve HTML page
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
        a { color: white; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from Node.js + Kubernetes!</h1>
        <p>This website is deployed using a Helm chart.</p>
        <p><a href="/api/health">Check Health</a></p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
