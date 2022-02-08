const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const routes = require('./controllers/employeeController')

const app = express();
app.engine('handlebars',exphbs.engine({extname:'handlebars',handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');

require('./model/db')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))