const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'react/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/react/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`SPEXcast site is live on ${port}`);