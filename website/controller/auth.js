const User = require('../model/allModels');

exports.getReg = (req,res,next) => {

    res.render('kayit');

};
exports.getLogin = (req, res, next ) =>{

    res.render('giris');
};
exports.postLogin = (req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({where:{email:email}})
    .then(user => {
        console.log(user)
        req.session.user = user;
        req.session.login=true;
        req.session.isAdmin=user.isAdmin;
        req.session.authority=user.authority;
        if(password != user.password){
            return res.redirect('/auth/giris');
        }
        if(user.isAdmin === false){
            res.redirect('/');
        };
    })
};

exports.postSignUp = (req, res, next) => {

    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const password = req.body.password;

    User.create({
        name:name,
        surname:surname,
        email:email,
        password:password,
        isAdmin:false,
        authority:false,
    })
    .then(result => {
        res.redirect('/auth/giris');
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postLogout = (req,res,next) => {

    req.session.destroy((err=>{
        res.redirect('/');
    }))
}
