import { ERROR, SERVER_ERROR, SUCCESS } from './constants.js';

export const Success = (res,message,data) => {
    let successData = {
        "status": SUCCESS,
        "message" : message,
        "payload": data
    }

    return res.status(SUCCESS).json(successData);
}

export const Error = (res,message) => {
    return res.status(200).json({
        "status": ERROR,
        "message": message
    })
}

export const serverError = (res) => {
    return res.status(200).json({
        "status": SERVER_ERROR,
        "message": "Server Error"
    })
}