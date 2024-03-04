import express from 'express';
import bodyParser from 'body-parser';
// import path from 'path';
// import multer from 'multer';
import { registerLoad, register} from '../controllers/user-controller.js'

const user_route = express();

// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const __dirname = path.resolve();

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended: true}));

user_route.set('view engine', 'ejs');
user_route.set('views', './views');

// user_route.use(express.static('public'));


// multer setup
// const destinationDirectory = 'D:/Web_dev_pra/back_sanket/chat-app-backend/public/images';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, destinationDirectory);
//     },
//     filename: function (req, file, cb) {
//         const name = Date.now() + '-' + file.originalname;
//         cb(null, name);
//     },
// });
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, path.join(__dirname, '../public/images'));
//     },
//     filename: function(req, file, cb) {
//         const name = Date.now()+'-'+file.originalname;
//         cb(null, name);
//     }
// });

// const upload = multer({
//     storage: storage
// });

user_route.get('/register', registerLoad);
user_route.post('/register', register);



export default user_route;
