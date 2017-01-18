import express from 'express';

import {places, home} from './api';
import renderPage from './page';

import { renderToString } from 'react-dom/server'
import React from 'react';
import { match, RouterContext } from 'react-router'

import routes from './../routes'

const app = express();

app.use('/dist', express.static('dist'));
app.use('/data', express.static('data'));

app.get('/api/places', places);
app.get('/api/home', home);

import assets from '../../dist/assets.json';
import vendorAssets from '../../dist/vendor_assets.json';

app.get(/^((?!dist|api|data).)*$/, (req, res) => {

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {

        if (error) {
          res.status(500).send(error.message).end();
        }

        const ssrHtml = renderToString(<RouterContext {...renderProps} />);

        res
            .set('Content-Type', 'text/html')
            .status(200).send(renderPage(assets, vendorAssets, ssrHtml));
    });
});

app.listen(3000, () => console.log('listening on port 3000'));
