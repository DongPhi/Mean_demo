var User = require('../models/user.js');

module.exports = function(router){
    //http://localhost:8080/users
    router.post('/users', function(req,res){
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email ==''){
            res.send('Ensure username, email, and password were provided')
        }else{
            user.save(function(err){
                if(err){
                    res.send('Username or Email alrealy exits!');
                }else{
                    res.send('User created')
                }
            });
        }
    });
    return router;
}