// Import essential libraries 
const express = require('express'); 
const app = express(); 
app.use(express.static(__dirname + "/public/"));
app.listen('8080', function(){
    console.log("Servidor web escuchando en el puerto 3000. http://localhost:3000")
})