// Importas librerias
var express = require('express');
// Creas Server
var app = express();
// Rutas
app.get('/', (req, res) => {
	res.send('O no, Jac?');
});

app.listen(8000, () => {
	console.log('Server is running on port 8000');
});