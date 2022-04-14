const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//const res = require('express/lib/response')

const routes = require('./routes');

const app = express();
const hostname = '127.0.0.1';
const port = '3001';
mongoose.Promise = global.Promise;


/*----------------------------------------------------------------------------------------- */
/*CONEXION A COMPAS ATLAS*/
const url = `mongodb+srv://disenowebII:123@cluster0.oze7g.mongodb.net/Restaurante?retryWrites=true&w=majority`;
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
/*----------------------------------------------------------------------------------------- */

/*----------------------------------------------------------------------------------------- */
/* CONEXION BASE DATOS LOCAL */
// mongoose.connect('mongodb://localhost/Restaurante', { /*Conexion a la base de datos*/
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:true
// }));
/*----------------------------------------------------------------------------------------- */

app.use(cors());

app.listen(port, hostname, ()=> {
    console.log(`El servidor que esta corriendo es: http://${hostname}:${port}/`);
});

// app.get('/', (res,req)=> {
//     req.send('Vamos Biem')
// })

app.use('/',routes());
