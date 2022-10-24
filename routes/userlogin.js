
const express = require('express');
const router = express.Router();
const User = require('../database/models/User')

//createUSer
router.post('/create',(req,res)=>{

    User.create({
        username:req.body.username,
        password:req.body.password
    }).then(user=>{
        res.json(true)
    }).catch(error=>{
        res.json(error)
    })

});

//AccessUser
router.post('/access',(req,res)=>{
    User.findAll({
        where:{
            username:req.body.username,
            password:req.body.password
        }
    }).then(contactos=>{
        res.json(contactos)
    })

})

//Mostar lista de 

module.exports = router;