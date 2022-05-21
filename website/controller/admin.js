
const User = require('../model/allModels');

exports.getAdminLogin = (req,res,next) =>{
    
    res.render('admin-giris');

};

exports.getUserInfo = (req, res, next) => {
    User.findAll()
    .then(users => {
        res.render('admin-page',{
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            users:users,
            authority:''
        });
    })
    
};

exports.postAdminLogin = (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    User.findAll()
    .then(users => {
        
        User.findOne({where:{email:email}})
        .then(admin =>{
            
            if(admin.password != password){
                return res.redirect('/');
            };
            if(admin.isAdmin === true){
                req.session.user=admin;
                req.session.login=true;
                req.session.isAdmin = admin.isAdmin;
                req.session.authority=admin.authority;
                console.log(users);
                res.redirect('/')
            };
        })

    })
    .catch(err => {
        console.log(err);
    })

};

exports.postAuthority = (req, res, next) => {

    const updatedAuthority = req.body.authority;
    const userId = req.body.userId;

    User.findByPk(userId)
    .then(user => {
        console.log(user);
        user.authority=updatedAuthority
        return user.save();

    })
    .then(result => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    })

}