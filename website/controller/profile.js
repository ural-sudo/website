
const User = require('../model/allModels');

exports.getProfile = (req, res, next) => {

    res.render('profile',{
        isAuthenticated:req.session.login,
        user:req.session.user,
        isAdmin:req.session.isAdmin,
        authority:req.session.authority
        
    });
};


exports.getEditProfile = (req,res,next) => {

    res.render('edit-profile',{
        isAuthenticated:req.session.login,
        user:req.session.user,
        isAdmin:req.session.isAdmin
    });
};
exports.postEditProfile = (req,res,next) => {

    const updatedName = req.body.name;
    const updatedSurname = req.body.surname;
    const updatedEmail = req.body.email;
    const updatedPassword = req.body.password;

    User.findByPk(req.session.user.id)
    .then( user => {
        user.name=updatedName;
        user.surname=updatedSurname;
        user.email=updatedEmail;
        user.password=updatedPassword;
        req.session.user=user;
        return user.save();
    })
    .then(result => {
        
        res.redirect('/profile/profile');
    })
    .catch(err => {
        console.log(err);
    })

}
