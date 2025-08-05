const express = require('express');
const os = require('os'); // Node.js built-in module for OS-related utility methods

const app = express();
const port = 80; // Web server will listen on port 80

app.get('/', (req, res) => {
  const hostname = os.hostname(); // Get the hostname of the EC2 instance
  console.log(`Request received on host: ${hostname}`);
  res.send(`Hello from EC2 Instance: ${hostname}!`);
});

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});

