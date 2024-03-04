import express from 'express';
import bodyParser from 'body-parser';
import connect from './config/db-Config.js';
import UserRoutes from './routes/user-route.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', UserRoutes);

app.listen(PORT, async () => {
    console.log(`server started at  ${PORT}`);
    await connect();
    console.log(`db conneccted successfully`);
})


