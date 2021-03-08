
module.exports = (ucase) => (req, res, next) => {

    req.login = { user: null };

    if (req.query != null) {
        if (req.query.uname != null) {
            req.login.user = req.query.uname.trim();

            if (ucase)
                req.login.user = req.login.user.toUpperCase();
            else
                req.login.user = req.login.user.toLowerCase();

        }
    }
    //console.log(req.login);
    next();
};


