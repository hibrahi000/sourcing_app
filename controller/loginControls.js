let page = 'login';
exports.loadLoginPage = (req,res,next) => {
    res.render('baseTemplate', {page});
}

exports.redirectLogin = (req,res,next) => {
    res.redirect('/Login');
}





