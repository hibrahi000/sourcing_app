const employeeDB = require('../models/db/employeeDB').Employee;




exports.loadUser = (req,res,next) =>{
return null;
}


exports.refresh = (req,res,next) => {

    console.log('LOADING SESSION')
    // console.log(session);
    employeeDB.findById(session.user._id).then((user) =>{
        session.user = user;
        console.log('Refresh Compleat User Updated');
        console.log(session);
        next();
    })

}


exports.logout = (req,res,next) => {
    req.logout()
    req.flash('success_msg','Log Out Successful');
    res.redirect('/');
    }