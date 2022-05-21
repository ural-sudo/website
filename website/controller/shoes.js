
const Shoes = require('../model/shoes');


exports.getIndex = (req, res, next) => {

    Shoes.findAll()
    .then(shoes => {
        
        res.render('index',{
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        });
    })

};

exports.getHeeledShoes = (req, res, next) => {


    Shoes.findAll({where:{category:'Heeled Shoes'}})

    .then(shoes => {
        console.log(shoes);
        res.render('index', {
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        })

    })
    .catch(err => {
        console.log(err);
    })
};
exports.getSport = (req, res, next) => {


    Shoes.findAll({where:{category:'Sport'}})

    .then(shoes => {
        console.log(shoes);
        res.render('index', {
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        })

    })
    .catch(err => {
        console.log(err);
    })
};

exports.getBoat = (req, res, next) => {


    Shoes.findAll({where:{category:'Boat'}})

    .then(shoes => {
        console.log(shoes);
        res.render('index', {
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        })

    })
    .catch(err => {
        console.log(err);
    })
};
exports.getSneaker = (req, res, next) => {


    Shoes.findAll({where:{category:'Sneaker'}})

    .then(shoes => {
        console.log(shoes);
        res.render('index', {
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        })

    })
    .catch(err => {
        console.log(err);
    })
};
exports.getSlipper = (req, res, next) => {


    Shoes.findAll({where:{category:'Slipper'}})

    .then(shoes => {
        console.log(shoes);
        res.render('index', {
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        })

    })
    .catch(err => {
        console.log(err);
    })
};

exports.getFlat = (req, res, next) => {


    Shoes.findAll({where:{category:'Flat'}})

    .then(shoes => {
        console.log(shoes);
        res.render('index', {
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        })

    })
    .catch(err => {
        console.log(err);
    })
};
exports.getSpake = (req, res, next) => {


    Shoes.findAll({where:{category:'Spake'}})

    .then(shoes => {
        console.log(shoes);
        res.render('index', {
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        })

    })
    .catch(err => {
        console.log(err);
    })
}





