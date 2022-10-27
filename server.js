const express = require('express');
const bodyParser = require('body-parser');
const dbService = require('./config/dbService');
const routes = require('./app/routes')

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes.personRoutes);

dbService.connect();

app.listen(port, () => {
    console.log('We are live on ' + port);
});






