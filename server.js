const express = require('express');
const path = require('path');
const app = express();

// This use of /static is from https://www.youtube.com/watch?v=vcWsOxmHlpg
app.use('/static', express.static('Main Page'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Main Page/index.html'));
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});