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

export const loginUser = async (req,res) => {
    try {
        let {email,password} = req.body;

        let getData = await getUser(['email','password','salt'],{
            email: email
        });
        
        if (getData === null) {
            return Error(res, 'User does not exist ...');
        }

        let matchPassword = await bcrypt.compare(password, getData.password);

        if (!matchPassword) {
            return Error(res, 'Invalid Password !!!');
        }

        return Success(res,'Login Successfull ...');
    } catch (error) {
        serverError(res);
    }
}