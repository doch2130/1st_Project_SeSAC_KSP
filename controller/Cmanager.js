const { User } = require('../model/index');

//로그인 페이지
exports.manager = (req, res) => {
    res.render('manager');
};

//로그인 기능
exports.manager_login = (req, res, next) => {
    try {
        if(req.body.id === 'test1') {
            User.findOne({
                where : { id : req.body.id, pw : req.body.pw },
            }) 
            .then((rows)=>{   
                if(rows) {
                    res.send(true);
                } else {
                    res.send(false);
                }
            });
        } else {
            res.send(false);
        }
    } catch (err) {
        next(err);
    }  
};
