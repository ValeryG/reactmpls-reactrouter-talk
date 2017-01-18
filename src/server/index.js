import express from 'express';

import {places, home} from './api';
import renderPage from './page';

const app = express();

app.use('/dist', express.static('dist'));
app.use('/data', express.static('data'));

app.get('/api/places', places);
app.get('/api/home', home);

import assets from '../../dist/assets.json';
import vendorAssets from '../../dist/vendor_assets.json';

app.get(/^((?!dist|api|data).)*$/, (req, res) => {
    res
        .set('Content-Type', 'text/html')
        .status(200).send(renderPage(assets, vendorAssets));
});

app.listen(3000, () => console.log('listening on port 3000'));
