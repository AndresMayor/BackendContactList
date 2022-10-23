
const express = require('express');
const router = express.Router();
const User = require('../database/models/User')

router.post('/',(req,res)=>{

    User.create({
        username:req.body.username,
        password:req.body.password
    }).then(user=>{
        res.json(true)
    }).catch(error=>{
        res.json(error)
    })

});

//Mostar lista de 

module.exports = router;