// This code will first import the neccessary modules
const express = require('express');
const path = require('path');

// Creating an instance of an Express application
const app = express();

// Set the view engine to EJS, which is used to render HTML pages.
app.set('view engine', 'ejs');

// Setting the directory where the EJS views are located.
app.set('views', path.join(__dirname, 'views'));

// This below code will serve static files (like CSS, JavaScript, images) from the 'public' directory.
app.use(express.static(path.join(__dirname, 'public')));

// Defining routes in the lines below and starting with the home page.
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home', body: '<%- include("pages/home") %>' });
    // This above line will render the 'home' page from the 'pages' directory, passing in a title and including the 'home' page content and same thing for all the routes as well.

});

app.get('/g', (req, res) => {
    res.render('pages/g', { title: 'G', body: '<%- include("pages/g") %>' });
});

app.get('/g2', (req, res) => {
    res.render('pages/g2', { title: 'G2', body: '<%- include("pages/g2") %>' });
});

app.get('/dashboard', (req, res) => {
    res.render('pages/dashboard', { title: 'Dashboard', body: '<%- include("pages/dashboard") %>' });
});

app.get('/login', (req, res) => {
    res.render('pages/login', { title: 'Login', body: '<%- include("pages/login") %>' });
});


// Setting the port for the server to listen on.
const PORT = process.env.PORT || 3000;

// Start the server and listening on the specified port.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});