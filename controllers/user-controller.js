import User from "../models/user-model.js";
import upload from "../config/image-upload-config.js";

const singleUploader = upload.single("image");

export const homePage = async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    console.log("error", error);
  }
};

export const register = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({
          err: err,
        });
      }
      const reqdata = req.body;
      reqdata.image = req.file.location;
      const respones = await User.create(reqdata);
      return res.render("home", {
        message: "Your registration has been completed",
      });
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const loginpage = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log("error", error);
  }
};

export const loged = async (req, res) => {
  try {
    const email = req.body.email;
    const currentPassword = req.body.password;
    const user = await User.findOne({email});
    if (!user) {
      return res.render("login", { message: "No user found" });
    }
    if (!user.comparePassword(currentPassword)) {
        return res.render("login", { message: "Password is incorrect" });
    }
    return res.render('dashboard',{
      user: user.name
    })
  } catch (error) {
    console.log("Error", error);
  }
};
