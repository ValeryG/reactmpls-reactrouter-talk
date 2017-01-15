import express from 'express';

import {places, home} from './api';

const app = express();

app.use("/data", express.static("data"));

app.get("/api/places", places);
app.get("/api/home", home);

app.listen(3000, () => console.log("listening on port 3000"));
