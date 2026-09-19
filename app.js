const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    // REST API Endpoint
    if (req.url === '/status') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            status: 'success',
            message: 'API is running'
        }));

        return;
    }

    // Home Page
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>CI/CD Demo</title>
        </head>
        <body>
            <h1>Hello from Jenkins + Docker!</h1>
            <p> This was added using a Jenkins CI/CD Pipeline! </p>
            <p>REST API Endpoint:</p>
            <a href="/status">/status</a>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});