
exports.loadLoginPage = (req,res,next) => {
    res.render('index', { title: 'Express' });
}

exports.redirectLogin = (req,res,next) => {
    res.redirect('/Login');
}





