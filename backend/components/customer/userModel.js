import User from './userSchema.js';

export const addUser = (values) => {
    return User.create(values);
}