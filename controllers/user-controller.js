import User from "../models/user-model.js";
import upload from "../config/image-upload-config.js";

const singleUploader = upload.single("image");

export const registerLoad = async (req, res) => {
    try {
        res.render('register')
    } catch (error) {
        console.log('error', error);
    }
}

export const register = async (req, res) => {
    try {
        singleUploader(req, res, async function(err, data){
            if(err){
                return res.status(500).json({
                    err: err,
                })
            }
            const reqdata = req.body;
            reqdata.image = req.file.location;
            const respones = await User.create(reqdata);
            return res.render('register', {message: 'okay'});
        })
    } catch (error) {
        console.log('error', error);
    }
}