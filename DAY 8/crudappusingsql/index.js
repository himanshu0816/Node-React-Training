const express = require('express')
const exphbs = require('express-handlebars')
const employee = require('./controller/employee')


const app = express()

//Configure Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',employee)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))