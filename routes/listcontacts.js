const express = require('express');
const router = express.Router();
const ListContacts = require('../database/models/ListContacts')


//get
router.post('/getList', (req, res) => {
    ListContacts.findAll({
        where:{
            userId: req.body.userId
        }
    }).then(contactos=>{
        res.json(contactos)
    })

})

//post
router.post('/addContact', (req, res) => {
    ListContacts.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        celular: req.body.celular,
        direccion: req.body.direccion,
        userId:req.body.userId
    }).then(post => {
        res.json(true)
    }).catch(error => {
        res.json(error)
    })

})

//Update
router.patch('/:id', (req, res) => {
    ListContacts.update({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        celular: req.body.celular,
        direccion: req.body.direccion
    }, {
        Where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(true)
    }).catch(error => {
        res.json(false)
    })

})

//Delete
router.delete('/:id', (req, res) => {
    ListContacts.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(true)
    }).catch(error => {
        res.json(false)
    })

});


module.exports = router;
