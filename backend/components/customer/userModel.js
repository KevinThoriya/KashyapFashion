import User from './userSchema.js';

export const addUser = (values) => {
    return User.create(values);
}

export const getUser = (attributes=[],condition={}) => {
    return User.findOne({
        attributes: attributes,
        where: condition
    })
}