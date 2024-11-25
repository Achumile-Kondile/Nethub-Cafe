// server.js

const express = require('express');
const app = express();
const port = 3000;

// Serve your HTML file from the root directory (same folder where server.js is located)
app.use(express.static('public'));  // The 'public' folder will store your HTML files

// Example route to get services from the database (will connect to DB later)
app.get('/services', (req, res) => {
    const services = [
        { name: 'Coffee', price: 5 },
        { name: 'Pastry', price: 3 },
        { name: 'Co-working Space', price: 15 }
    ];
    res.json(services);
});

// Start server on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
