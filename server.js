// server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // To handle JSON data in requests

// Example route to serve static HTML pages from frontend folder
app.use(express.static('frontend'));

// Example of sending data to frontend (You would replace this with database connection later)
app.get('/services', (req, res) => {
    const services = [
        { name: 'Coffee', price: 5 },
        { name: 'Pastry', price: 3 },
        { name: 'Co-working Space', price: 15 }
    ];
    res.json(services);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
