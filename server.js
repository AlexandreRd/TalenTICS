// Importas librerias
var express = require('express');
var bodyParser = require('body-parser');
// Creas Server
var app = express();
// Rutas
app.use(bodyParser.urlencoded( {
	extended:true
}));

app.get('/', (req, res) => {
	// res.send('<h1>O no, Jac?</h1>');
	res.sendFile(__dirname + '/index.html')
});

app.get('/weey', (req, res) => {
	res.send("Huixcazdhaaaa!!!");
});

app.post('/mi_ruta', (req, res) => {
	console.log(req.body);
	res.send("OK xDxdXd");
});

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});