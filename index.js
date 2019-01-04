/**
 *  Éste es el archivo principal, es donde dará inicio el servidor.
 *  (1) npm init --yes *Esto nos crea un package.json con configuración inicial.
 *  (2) npm i express
 *  (3) npm i nodemon -D *Éste comando instalará Nodemon pero al agregarle el -D,
 *      lo hará como una devDependencies, lo cúal solo nos permitirá usarlo como
 *      reiniciador del servidor cada vez que recarguemos la página.
 *  (4) npm i morgan *Éste modulo nos permitirá ver por consola las notificaciones.
 *  
**/

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
// Ésta propiedad define formato de vista de información por consola.
app.use(morgan('dev'));
// Ésta propiedad permite la lectura de los datos que llegan en formato Json.
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes
app.use('/api/employees', require('./routes/employee.route'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
