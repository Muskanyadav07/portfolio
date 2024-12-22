import { name } from "ejs";
import UserModel from "../model/userModel.js";

const homeController = async(req,res)=>{
    try {
      
        res.render('index')
    } catch (error) {
        console.log(error.message)
    }




}
// user contct controller
const ContactUserController = async (req,res)=>{
    console.log("I am running")
    try {
        const data = await new UserModel({
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message,
        })
        if(data){
          await  data.save()
          console.log("User Saved Successfully")
        }
        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}


export {homeController,ContactUserController}