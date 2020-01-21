var express = require('express');
var Account = require('../models/account');
var bkfd2Password = require('pbkdf2-password');

var hasher = bkfd2Password();
var router = express.Router();

//회원가입
router.post('/signup', function(req, res){
    Account.findOne({user_id: req.body.user_id, function(err, exists){
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
                salt: salt
            });
            account.save(function(err){
                if(err) throw err;
                return res.json({success: true});
            });
        });
    }});
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
                return res.json({success: true});
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
//로그아웃

module.exports = router;