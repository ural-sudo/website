const express = require('express');
const bodyParser = require('body-parser');
const shoesRoutes = require('./routes/shoes');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const authorityRoutes = require('./routes/authority');
const sequelize = require('./util/db');
const multer = require('multer');
const adminRoutes = require('./routes/admin');
const session = require('express-session');
const MSSQLStore = require('connect-mssql-v2');
const config = require('./util/config');

const path = require('path');
const app = express();

const fileFilter = (req, file, cb) => {

    if(
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/jpeg'
    ){
        cb(null, true);
    }else{
        cb(null,false);
    }
};

app.set('view engine','ejs');
app.set('Views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({store: new MSSQLStore(config), secret:'supersecret'}));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use(multer({ dest:'images', fileFilter:fileFilter}).single('image'));




app.use('/',shoesRoutes);
app.use('/admin',adminRoutes);
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);
app.use('/authority',authorityRoutes);




sequelize.sync()
.then(result => {
    
    app.listen(3000)
})
.catch(err => {
    console.log(err);
})

