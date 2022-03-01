import User from './userSchema.js';

export const addUser = (values) => {
    return User.create(values);
}

export const getUser = (condition={}, attributes=undefined) => {
    return User.findOne({
        attributes: attributes,
        where: condition
    })
}