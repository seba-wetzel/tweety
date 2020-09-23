const express = require('express');
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes');
const socketio = require('socket.io')

let server = app.listen(5000, function () {
    console.log('Servidor corriendo en el puerto 3000')
});
let io = socketio.listen(server)

app.use(morgan('tiny'))
app.use(express.static('./public'))
app.set('view engine', 'html')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes(io));
app.engine('html', nunjucks.render);
nunjucks.configure('views');

// app.use((req, res, next) => {
//     const data = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];
//     res.render('index', { title: 'Hall of Fame', personas: data });
// });




