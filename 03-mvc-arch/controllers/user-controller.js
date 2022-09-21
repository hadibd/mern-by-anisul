const path = require('path');
const users = require('../models/user')

exports.getForm = (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/form.html'))
}

exports.postData = (req, res) => {
    users.push({"name" : req.body.name, "age" : req.body.age})
    res.json({status : true, "Msg" :users});
}