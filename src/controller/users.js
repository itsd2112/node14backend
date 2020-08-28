const userModel = require("../model/users");


createUser = async (req, res, next) => {
    const user = await userModel.createUser(req.body);
    res.json({body: req.body, newUser: user});
}

module.exports = { 
    createUser
};
