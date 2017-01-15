import express from 'express';

const app = express();

app.use("/data", express.static("data"));

app.listen(3000, () => console.log("listening on port 3000"));
