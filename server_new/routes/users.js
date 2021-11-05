const express = require('express');
const router = express.Router();
const _ = require('lodash');
//const User = require('../models/user');
const User = require('../models/user').userModel;




var jwt = require('jsonwebtoken');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noname.esprit2021@gmail.com',
        pass: 'noname2021'
    }
});

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/')
    },
    filename: (req, file, cb) => {
        const mimeType = file.mimetype.split('/');
        const fileType = mimeType[1];
        const fileName = file.originalname;
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });
var pathFolder = 'public/';

// signup
router.post('/signUpUser', function(req, res) {
    try {

        User.findOne({ 'email': req.body.email }, function(err, user) {
            if (err) {
                res.json({
                    status: 0,
                    message: ('Error while saving') + err
                });
            }
            if (user) {
                res.json({
                    status: 0,
                    message: ('Email already used')
                });
            } else {

                var newUser = new User({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password,
                    verified: "0",
                    role:'ROLE_USER'
                });
                //save the user
                newUser.save(function(err, savedUser) {
                    if (err) {
                        res.json({
                            status: 0,
                            message: err
                        });
                    } else {
                        var token = jwt.sign(savedUser.getUser(), 'MySecret', { expiresIn: 3600 });
                        res.json({
                            message: ('signUp successfully'),
                            _id: newUser._id
                        });
                    }
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: 0,
            message: '500 Internal Server Error',
            data: {}
        })

    }
});


//signupimage
router.post('/signUpUserImage', upload.single('file'), function(req, res) {
    try {

        User.findOne({ 'email': req.body.email }, function(err, user) {


            if (err) {
                res.json({
                    status: 0,
                    message: ('Error while saving') + err
                });
            }
            if (user) {
                res.json({
                    status: 0,
                    message: ('Email already used')
                });
            } else {

                var newUser = new User({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password,
                    photo: 'http://localhost:3000/uploads/' + req.body.image,
                    verified: "0"

                });
                //save the user
                newUser.save(function(err, savedUser) {
                    if (err) {
                        res.json({
                            status: 0,
                            message: err
                        });
                    } else {
                        var token = jwt.sign(savedUser.getUser(), 'MySecret', { expiresIn: 3600 });
                        res.json({
                            message: ('signUp successfully'),
                            _id: newUser._id
                        });



                    }
                });
            }
        });



    } catch (err) {
        console.log(err);
        res.json({
            status: 0,
            message: '500 Internal Server Error',
            data: {}
        })

    }
});
//signin  user
router.post('/signInUser', function(req, res) {
    try {
        User.findOne({ email: req.body.email }, function(err, user) {
            console.log(user)
            if (err) {
                res.json({
                    message: ('erreur auth SignIn') + err
                });
            }

            if (!user) {
                res.json({
                    message: 'Authentication failed. User not found.',
                    status: 0,

                });
            } else {
                if (user.verified == "0") {
                    res.json({
                        message: 'Account not verified.',
                        status: 2,

                    });
                } else {
                    user.comparePassword(req.body.password, function(err, isMatch) {
                        if (isMatch && !err) {
                            // if user is found and password is right create a token
                            var token = jwt.sign(user.getUser(), 'MySecret', { expiresIn: 3600 });
                            res.json({
                                message: 'Login successfully',
                                status: 1,
                                email: user.email,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                _id: user._id,
                                role:user.role
                            });
                        } else {
                            res.json({
                                status: 3,
                                message: 'Authentication failed. Wrong password.'
                            });
                        }
                    });
                }
                // check if password matches

            }
        });
    } catch (err) {
        console.log(err);
        res.json({
            message: '500 Internal Server Error'
        })

    }
});
// update user

router.post('/updateUser', function(req, res) {

    try {



        User.findOne({ _id: req.body.userId }, function(err, user) {
            console.log(req.body.userId)

            if (err) {

                res.json({

                    status: 0,

                    message: ('Error update User') + err

                });

            } else {

                if (!user) {

                    res.json({

                        status: 0,

                        message: ('User does not exist')



                    });

                } else {

                    try {

                        if (req.body.email) {

                            user.email = req.body.email;

                        }

                        if (req.body.firstname) {

                            user.firstname = req.body.firstname;

                        }

                        if (req.body.lastname) {
                            console.log(req.body.lastname)

                            user.lastname = req.body.lastname;

                        }




                        if (req.body.oldPassword && req.body.newPassword) {

                            // check if password matches

                            user.comparePassword(req.body.oldPassword, function(err, isMatch, next) {

                                if (isMatch && !err) {

                                    user.password = req.body.newPassword;

                                    user.save(function(err, savedUser) {

                                        if (err) {

                                            res.json({

                                                status: 0,

                                                message: ('error Update User ') + err

                                            });

                                        } else {

                                            var token = jwt.sign(savedUser.getUser(), 'MySecret', { expiresIn: 36000 });

                                            res.json({

                                                status: 1,

                                                message: 'profile USer updated successfully',

                                                data: {

                                                    user: savedUser.getUser()



                                                }

                                            })

                                        }

                                    });



                                } else {

                                    res.json({

                                        status: 0,

                                        message: 'update User failed. Wrong password.'

                                    });

                                }

                            });

                        } else {

                            user.save(function(err, savedUser) {

                                if (err) {

                                    res.json({

                                        status: 0,

                                        message: ('error Update USer ') + err

                                    });

                                } else {

                                    var token = jwt.sign(savedUSer.getUser(), 'MySecret', { expiresIn: 3600 });

                                    res.json({

                                        status: 1,

                                        message: 'profile USer updated successfully',

                                        data: {

                                            user: savedUser.getUser()



                                        }

                                    })

                                }

                            });

                        }

                    } catch (err) {

                        console.log(err);

                        res.json({

                            status: 0,

                            message: '500 Internal Server Error',

                            data: {}

                        })



                    }

                }



            }



        });

    } catch (err) {

        console.log(err);

        res.json({

            status: 0,

            message: '500 Internal Server Error',

            data: {}

        })



    }

});
// get User By Id
router.post('/getUserById', function(req, res) {
    try {
        User.findOne({ _id: req.body.userId }, function(err, user) {
            if (err) {
                return res.json({
                    status: 0,
                    message: ('error get Profile ' + err)
                });
            }
            if (!user) {
                return res.json({
                    status: 0,
                    message: ('User does not exist')
                });
            } else {
                res.json({
                    status: 1,
                    message: 'get Profile User successfully',
                    userId: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: user.password,
                    userPhoto: user.photo,
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: 0,
            message: '500 Internal Server Error',
            data: {}
        })

    }
});

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
//send mail
router.post('/sendmail', function(req, res) {
    try {
        User.findOne({ email: req.body.email }, function(err, user) {
            if (err) {
                res.json({
                    message: ('erreur auth SignIn') + err
                });
            }

            if (!user) {
                res.json({
                    message: 'User not found.'
                });
            } else {
                var mailOptions = {
                    from: 'noname.esprit2021@gmail.com',
                    to: req.body.email,
                    subject: 'Confirm your account',
                    text: getRandomString(6)
                };

                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.json({
                            message: "mail sent successfully",
                            code: mailOptions.text

                        });
                    }
                });

            }
        });
    } catch (err) {
        console.log(err);
        res.json({
            message: '500 Internal Server Error'
        })

    }
});








router.post('/signup', function(req, res) {
    //console.log(req, body);
    const { firstname, lastname, email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({ error: "User with email already exists." });
        }
        const token = jwt.sign({ firstname, lastname, email, password }, process.env.JWT_ACC_ACTIVATE, { expiresIn: '20m' });


        const mailOptions = {
            from: 'noname.esprit2021@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Activation Link',
            html: `
            <h2>Please click on given link to activate your account</h2>
            <p>${token}</p>
        `
        };
        transporter.sendMail(mailOptions, function(error, body) {
            if (err) {
                return res.json({
                    error: err.message
                })
            }
            return res.json({ message: 'Email has been sent, kindly activate your account' });
            console.log(body);
        });
    });
});

router.post('/email-activate', function(req, res) {
    const { token } = req.body;
    if (token) {
        jwt.verify(token, process.env.JWT_ACC_ACTIVATE, function(err, decodedToken) {
            if (err) {
                return res.status(400).json({ error: 'Incorrect or Expired lin.k' })
            }
            const { firstname, lastname, email, password } = decodedToken;
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    return res.status(400).json({ error: "User with email already exists." });
                }
                let newUser = new User({ firstname, lastname, email, password });
                newUser.role='ROLE_USER';
                newUser.save((err, success) => {
                    if (err) {
                        console.log("Error in signup while account activation: ", err);
                        return res.status(400), json({ error: 'Error activating account' })
                    }
                    res.json({
                        message: "Signup success!"
                    })
                })
            });
        })
    } else {
        return res.json({ error: "Something went wrong !!" })
    }
});

router.post('/forgot-password', function(req, res) {
    const { email } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "User with email does not exists." });
        }
        const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m' });

        //Nodemail
        const mailOptions = {
            from: 'noname.esprit2021@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Forgot Password Link',
            html: `<h2>Please click on given link to reset your password</h2>
            <p> ${token}</p>`
        };

        return user.updateOne({ resetLink: token }, function(err, success) {
            if (err) {
                return res.status(400).json({ error: "reset password link error" });
            } else {

                transporter.sendMail(mailOptions, function(error, body) {
                    if (err) {
                        return res.json({
                            error: err.message
                        })
                    }
                    return res.json({ message: 'Email has been sent, kindly activate your account' });
                    console.log(body);
                });
            }
        })
    })

});

router.post('/reset-password', function(req, res) {


    const { resetLink, newPass } = req.body;
    if (resetLink) {
        jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, function(error, decodedData) {
            if (error) {
                return res.status(401).json({
                    error: "Incorrect Token or it is expired."
                })
            }
            User.findOne({ resetLink }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({ error: "User with this token does not exist." });
                }
                const obj = {
                    password: newPass,
                    resetLink: ''
                }

                user = _.extend(user, obj);
                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({ error: "reset password error" });
                    } else {
                        return res.status(200).json({ message: 'Your password has been change .' });
                    }

                })

            })

        })

    } else {
        return res.status(401).json({ error: "Authentication error !!" });

    }



});


module.exports = router;