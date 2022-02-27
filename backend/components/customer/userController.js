import { serverError, Success } from "../../utils/helper.js";
import { addUser } from "./userModel.js";

export const signUpUser = async (req,res) => {
    try {
        let body = req.body;
        
        body.firstname = body.firstname;
        body.lastname = body.lastname;
        body.email = body.email;
        body.password_hash = body.password;
        body.mobile = parseInt(body.mobile);
        
        await addUser(body);
        
        return Success(res, "User Sign Up Successfully !!!", body);
    } catch (error) {
        serverError(error);
    }
}