
const path = require('path');
const Shoes = require('../model/shoes');
exports.getAddShoes = (req, res, next) => {

    res.render('add-shoes',{
        isAuthenticated:req.session.login,
        user:req.session.user,
        isAdmin:req.session.isAdmin,
        authority:req.session.authority
    })
};
exports.getEditShoes =(req, res, next) => {
    const shoesId = req.params.shoesId;
    
    Shoes.findByPk(shoesId)
    .then(shoes => {
        console.log(shoes);
        res.render('edit-shoes',{
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

exports.getMyShoes = (req, res, next) => {

    const userId = req.session.user.id;

    Shoes.findAll({where:{userId:userId}})
    .then(shoes => {
        
        res.render('my-shoes',{
            isAuthenticated:req.session.login,
            user:req.session.user,
            isAdmin:req.session.isAdmin,
            authority:req.session.authority,
            shoes:shoes
        });
    })
    .catch(err => {
        console.log(err);
    })

    
}
exports.postAddShoes = (req, res, next) => {

    const title = req.body.title;
    const price = req.body.price;
    const image = req.file;
    const description = req.body.description;
    const category = req.body.category;
    const userId = req.session.user.id;

    const imgUrl = image.path;
    Shoes.create({
        title:title,
        price:price,
        imgUrl:imgUrl,
        description:description,
        category:category,
        userId:userId
    })
    .then(shoes => {
        console.log(shoes);
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    })

},

exports.postEditShoes = (req, res, next) => {
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImgUrl = req.body.imgUrl;
    const updatedDesc = req.body.description;
    const updatedCategory = req.body.category;
    const shoesId = req.body.shoesId;

    Shoes.findByPk(shoesId)
    .then(shoes => {
        
        shoes.title = updatedTitle;
        shoes.imgUrl = updatedImgUrl;
        shoes.price = updatedPrice;
        shoes.description = updatedDesc;
        shoes.category = updatedCategory;
        shoes.userId = req.session.user.id;
        return shoes.save();
    })
    .then(result => {
        res.redirect('/authority/myShoes')
    })

    .catch(err => {
        console.log(err);
    })
};

exports.postDeleteShoes = (req, res, next)=> {

    const shoesId = req.body.shoesId;

    Shoes.findByPk(shoesId)
    .then(shoes => {
        return shoes.destroy();
    })
    .then(result => {
        res.redirect('/authority/myShoes')
    })
    .catch(err => { console.log(err);});
};