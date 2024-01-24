const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});