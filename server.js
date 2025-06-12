const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory (where server.js is located)
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// Route for /about
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Route for /projects
app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

// Route for /competitions
app.get('/competitions', (req, res) => {
  res.sendFile(path.join(__dirname, 'competitions.html'));
});

// Route for /passions
app.get('/passions', (req, res) => {
  res.sendFile(path.join(__dirname, 'passions.html'));
});

// Optional: A simple route to confirm the server is running
app.get('/ping', (req, res) => {
  res.send('Server is alive!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log('Serving files from:', path.join(__dirname));
  console.log('Try opening http://localhost:${port}/ in your browser.');
}); 