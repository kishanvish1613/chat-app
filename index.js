import express from 'express';
import connect from './config/db-Config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`server started at  ${PORT}`);
    await connect();
    console.log(`db conneccted successfully`);
})


