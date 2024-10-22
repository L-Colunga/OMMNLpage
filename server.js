if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const config = {
    user: 'Examapp',
    password: 'Examapp',
    port: 1433,
    server: 'Localhost\\SQLEXPRESS',  // Instance name goes here
    database: 'Examenes',
    options: {
        encrypt: false,               
        trustServerCertificate: true  
    }
};

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mssql = require("mssql");
mssql.connect(config).then(() => {
    console.log("Connected to the database!");

    // Create Request object to perform query operation
    const request = new mssql.Request();

    // Query the database and get the records
    return request.query('SELECT * FROM Exams');
}).then((result) => {
    // Send records as a response to the browser
    console.log(result.recordset);
})


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)