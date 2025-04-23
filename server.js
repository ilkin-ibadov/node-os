const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET method
app.get('/api/resource', (req, res) => {
  res.json({ message: 'GET request received' });
});

// POST method
app.post('/api/resource', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST request received', data });
});

// PUT method
app.put('/api/resource/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({ message: `PUT request to update resource ${id}`, data });
});

// PATCH method
app.patch('/api/resource/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({ message: `PATCH request to partially update resource ${id}`, data });
});

// DELETE method
app.delete('/api/resource/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `DELETE request to remove resource ${id}` });
});

// OPTIONS method
app.options('/api/resource', (req, res) => {
  res.set('Allow', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});