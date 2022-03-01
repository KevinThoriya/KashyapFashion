import { ERROR, SERVER_ERROR, SUCCESS } from './constants.js';

export const Success = (res,message,data) => {
    let successData = {
        "status": SUCCESS,
        "message" : message,
        "payload": data
    }

    return res.status(200).json(successData);
}

export const Error = (res, message, payload = {}) => {
    return res.status(200).json({
        "status": ERROR,
        "message": message,
        payload : payload,
    })
}

export const serverError = (res, message, payload = {}) => {
    return res.status(200).json({
        "status": SERVER_ERROR,
        "message": message,
        payload : payload,

    })
}