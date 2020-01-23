var express = require('express');
var Account = require('../models/account');
var bkfd2Password = require('pbkdf2-password');

var hasher = bkfd2Password();
var router = express.Router();

//회원가입
router.post('/signup', function(req, res){

    console.log('..sign-up');
    console.log('user_id : ' + req.body.user_id);

    Account.findOne({user_id: req.body.user_id}, function(err, exists){
        
        if(err) throw err;
        if(exists){
            return res.status(409).json({
                error: "exist id",
                code: 1
            });
        }

        hasher({password: req.body.password}, function(err, pass, salt, hash){
            var account = new Account({
                user_id: req.body.user_id,
                password: hash,
                user_name: req.body.user_name,
                salt: salt
            });
            account.save(function(err){
                if(err) throw err;
                return res.json({success: true});
            });
        });
    })
});

//로그인
router.post('/signin', function(req, res){
    Account.findOne({user_id: req.body.user_id}, function(err, account){
        if(err) throw err;
        if(!account){
            return res.status(401).json({
                error: "no user",
                code: 1
            });
        }

        var validate = hasher({password: req.body.password, salt: account.salt}, function(err, pass, salt, hash){
            
            if(hash === account.password){

                var session = req.session;
                session.loginInfo = {
                    _id: account._id,
                    user_id: account.user_id
                };
                return res.json({success: true, userId: account.user_id, userName: account.user_name});
            }else{
                return res.status(401).json({
                    error: "no password",
                    code: 2
                });
            }
        });
    });
});

//회원정보조회
//회원정보수정
router.put('/modify', function(req, res){
    
    Account.findById(req.session.loginInfo._id, function(err, account){
        
        if(err) throw err;
        if(!account){
            return res.status(404).json({
                error: "no id",
                code: 1
            });
        }
        
        hasher({password: req.body.password}, function(err, pass, salt, hash){
            account.password = pass;
            account.salt = salt;
            account.user_name = req.body.userName;

            account.save(function(err){
                if(err) throw err;
                return res.json({success: true, userName: account.user_name});
            });
        });


        
    })
    
});

//로그아웃
router.get('/signout', function(req, res){
    req.session.destroy(function() {
        
    });
    return res.json({success: true});
});

router.get('/check', function(req, res) {
    if(req.session.loginInfo.user_id === ''){
        return res.json({userId: ''});
    }
    return res.json({userId: req.session.loginInfo.user_id});
    
});

module.exports = router;