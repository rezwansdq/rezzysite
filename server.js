const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory (where server.js is located)
app.use(express.static(path.join(__dirname)));

// Optional: A simple route to confirm the server is running
app.get('/ping', (req, res) => {
  res.send('Server is alive!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log('Serving files from:', path.join(__dirname));
  console.log('Try opening index.html in your browser.');
}); 