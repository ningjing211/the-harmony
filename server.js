

const express = require('express');
const path = require('path');
const app = express();

// Serve static assets from the "public" directory (for images, sounds, etc.)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));

// Serve static files from the "dist" directory (the built files from Parcel)
app.use(express.static(path.join(__dirname, 'dist')));


// Serve the main HTML file from the "dist" directory (after build)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Handle other routes, if needed (serves the built index.html for all routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
