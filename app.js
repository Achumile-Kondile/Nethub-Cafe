const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS, images, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route for the Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route for the Pricing page
app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pricing.html'));
});

// Route for the Services page
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

// Route for the Sign-Up page
app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sign-up.html'));
});

// Route to serve the logo image
app.get('/logo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'images', 'Nethub.png'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
