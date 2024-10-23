if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const bodyParser = require('body-parser')

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
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

const mssql = require("mssql");

// Codigo para conseguir datos de la base de datos

/*
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
*/

//Codigo para dar datos a la SQL

/*
mssql.connect(config).then(() => {
    console.log("Connected to the database!");

    // Create Request object to perform query operation
    const query = `INSERT INTO Users(Name, Email) VALUES ('Diego Albertus', '123@hotmail.com')`;

    // Query the database and get the records
    mssql.query(query);

    console.log('Data has been submitted successfully.');
}).catch((err) => {
    console.error('SQL error:', err);
})
*/

//Codigo para conseguir la informacion del HTML
app.post('/submit', async (req, res) => {
    console.log(req.body)
    try {     
        console.log(req.body.name)
        console.log(req.body.email)
    } catch (err) {
        console.error('SQL error:', err);
    }
});
/*
app.post('/submit', async (req, res) => {
    try {
        // Connect to the SQL Server
        await mssql.connect(config);

        // SQL query to insert data
        const query = `INSERT INTO Users(Name, Email) VALUES ('${req.body.name}', '${req.body.email}')`;
        
        await mssql.query(query);

        res.send('Data has been submitted successfully.');
    } catch (err) {
        console.error('SQL error:', err);
        res.status(500).send('Failed to submit data.');
    }
});
*/
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)