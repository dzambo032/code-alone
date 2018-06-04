const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

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

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});