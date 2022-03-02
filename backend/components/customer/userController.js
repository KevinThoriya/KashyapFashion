import { Error, serverError, Success } from "../../utils/helper.js";
import { addUser, getUser } from "./userModel.js";
import bcrypt from 'bcrypt';

const loginSuccess = (res, user) => {
    const { dataValues } = user; 
    let name = dataValues.firstname + " " + dataValues.lastname;    
    let userDetail = {...dataValues,
        password: undefined,
        salt: undefined,
        deletedAt: undefined,
        createdAt: undefined,
        name
    }
    return Success(res,`Successfully logged as ${name}`, userDetail);
}

export const signUpUser = async (req, res) => {
    console.log("sign up => ",req.body);
    try {
        let body = req.body;
        body.firstname = body.firstname;
        body.lastname = body.lastname;
        body.email = body.email;
        body.password_hash = body.password;
        body.mobile = parseInt(body.mobile);
        body.name = body.firstname + " " + body.lastname;
        
        await addUser(body);
        return Success(res, "User Sign Up Successfully !!!", body);
        
    } catch (error) {
        console.log("errors ", error);
        serverError(res, "server Error !", {error : error.message});
    }
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
        serverError(res, 'Server Error !', error.message);
    }
}