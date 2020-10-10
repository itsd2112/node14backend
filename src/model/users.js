const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // id: { type: Number, index: true },
    email: { type: String, required: true,  trim: true,unique: true } ,
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String }
}, {
    timestamps: true,
    get: v => v.toDateString()
  });

const userModel = mongoose.model('users', userSchema);

createUser = async (user) => {
    try {
        
        const newUser = await userModel.create(user);
        console.log("newUser >>", newUser);
        return newUser;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createUser
}