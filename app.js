const express = require('express');
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const app = express();


const tweetsDeEjemplo = [
    { id: 1, name: "juan", content: "este es un tweeettt de juan" },
    { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
    { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
];

app.use(morgan('tiny'))
app.use(express.static('./public'))
app.set('view engine', 'html')
app.engine('html', nunjucks.render);
nunjucks.configure('views');

// app.use((req, res, next) => {
//     const data = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];
//     res.render('index', { title: 'Hall of Fame', personas: data });
// });

app.get("/", (req, res) => {
    res.render('index', { tweets: tweetsDeEjemplo });
})
app.listen(5000, function () {
    console.log('Servidor corriendo en el puerto 3000')
});