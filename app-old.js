const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{'Conten-Type': 'application/json'});
    let salida = {
        nombre: 'Arturo',
        edad: 36,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write('Hola mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080...');

