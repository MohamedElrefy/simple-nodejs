const express = require('express');
const app = express();
const port = 3000;

// Route to handle GET requests to the root ("/")
app.get('/', (req, res) => {
    res.send('Hello, World again!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

