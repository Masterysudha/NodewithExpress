const { Router } = require('express');
var express=require('express');
var router=express.Router();
const Credential={email:"balasudhaa05@gmail.com", password:"12345"};

//login user
router.post('/login',(req,res)=>{
    if(req.body.email==Credential.email && req.body.password==Credential.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard');
        }
    else{
        res.end("Invalid Username")
    }
})
//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{local:req.session})
    }else{
        res.send("Unauthorize User")
    }
})

//route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){ 
        if(err){
            console.log(err);
            res.send("Error");
        }else{
            res.render('base',{title:"Express",logout:"Logout Successfully...."})
        }
    })
})

module.exports=router;