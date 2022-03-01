import { Error, serverError, Success } from "../../utils/helper.js";
import { addUser, getUser } from "./userModel.js";
import bcrypt from 'bcrypt';

export const signUpUser = async (req, res) => {
    console.log(req.body);
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
        console.log("errors ", error);
        serverError(res);
    }
}

const loginSuccess = (res, user) => {
    const { dataValues } = user; 
    let userDetail = {...dataValues,
        password: undefined,
        salt: undefined,
        deletedAt: undefined,
        createdAt: undefined,
    }
    let name = userDetail.firstname + " " + userDetail.lastname;    
    return Success(res,`Successfully logged as ${name}`, userDetail);
}

export const loginUser = async (req,res) => {
    try {
        let {email,password} = req.body;
        let user = await getUser({ email });
        
        if (user === null)  return Error(res, 'User does not exist ...');        

        let matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword)  return Error(res, 'Invalid Password !!!');
        
        return loginSuccess(res, user);
        
    } catch (error) {
        console.log("errors ", error);
        serverError(res);
    }
}