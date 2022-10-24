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
router.patch('/update', (req, res) => {

    ListContacts.update({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        celular: req.body.celular,
        direccion: req.body.direccion
    }, {
        where:{ id: req.body.id}
    }).then(contactos => {
        res.json(contactos)
    }).catch(error => {
        res.json(error)
    })

})

//Delete
router.delete('/delete', (req, res) => {
    ListContacts.destroy({
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })

});


module.exports = router;
