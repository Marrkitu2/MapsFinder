const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/data', async (req, res) => {
    const { param1, param2, param3 } = req.query;
    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: `${param1} ${param2} ${param3}`,
                format: 'json',
                addressdetails: 1,
                limit: 10
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
