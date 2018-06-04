const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'This is the HomePage'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'This is the Projects Page'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});