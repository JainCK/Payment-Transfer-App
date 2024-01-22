import mongoose from "mongoose";
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
},
password: {
    type: String,
    required: true,
    minLength: 6
},
firstName: {
    type: String,
    required: true,
    trim: true,
},
lastName: {
    type: true,
    required: true,
    trim: true,
}

})

const accountSchema = new mongoose.Schema({
    userId: {
        type : userSchema.Types.objectId, 
        ref: "User",
        required :true
    }, 
    balance: {
        type: Number,
        required: true
    }
});



const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };