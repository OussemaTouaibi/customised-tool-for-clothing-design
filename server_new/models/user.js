const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


const userSchema = new Schema({

    firstname: {
        type: String,
        trim: true,
        require: true,
    },
    lastname: {
        type: String,
        trim: true,
        require: true,
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        require: true,
    },

    role: {
        type: String
    },

    resetLink: {
        data: String,
        default: ''
    },

    verified: {
        type: String
    }


}, { timestamps: true });


userSchema.methods.getUser = function() {
    return ({
        _id: this._id,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        role:this.role,


    })
};






userSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }

            bcrypt.hash(user.password, salt, null, function(err, hash) {
                if (err) {
                    return next(err);
                }
                if (user.password) {
                    user.password = hash;
                }
                next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

//const User = module.exports = mongoose.model('User', userSchema);
var userModel = mongoose.model('User', userSchema);
module.exports = {
    userModel: userModel,
    userSchema: userSchema
};