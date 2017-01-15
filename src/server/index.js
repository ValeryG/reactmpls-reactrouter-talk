import express from 'express';

import {places, home} from './api';
import renderPage from './page';

const app = express();

app.use('/data', express.static('data'));
app.get('/api/places', places);
app.get('/api/home', home);

app.get('*', (req, res) => {
    res
        .set('Content-Type', 'text/html')
        .status(200).send(renderPage());
});

app.listen(3000, () => console.log('listening on port 3000'));
