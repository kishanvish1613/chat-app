import express from 'express';
import bodyParser from 'body-parser';
import { homePage, register, loginpage, loged} from '../controllers/user-controller.js'

const user_route = express();


user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended: true}));

user_route.set('view engine', 'ejs');
user_route.set('views', './views');

user_route.get('/', homePage)
user_route.post('/', register);

user_route.get('/login', loginpage);
user_route.post('/dashboard', loged)


export default user_route;
