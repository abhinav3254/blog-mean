const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is blog website');
});



const port = 9000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
