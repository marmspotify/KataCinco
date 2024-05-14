const http = require('http');
const puerto = 5501;

const server = http.createServer((request, response) => {
    // Obtener info de una api, por medio de que lo hago?
        // url, methodverb (GET, POST, PUT, PATCH, DELETE)
    // Generar una response
        // status, response content, mymeType
    const status = 200;
    const mimeType = {'Content-type': 'text/html'};
    const contentResponse = '<html><body>Hola desde node...chicos</html></body>';
    response.writeHead(status, mimeType);
    response.write(contentResponse);
    response.end();
});

server.listen(puerto);

console.log('Servidor JOYA en el puerto: ', puerto)

