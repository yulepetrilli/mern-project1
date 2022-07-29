const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaUser = new schema({
    name: String,
    email: String,
    phone: String,
    id: String,
});

const UserModel = mongoose.model('users', schemaUser);
module.exports = router;

//add new user
router.post('/adduser', (request, response) => {
    const newUser = new UserModel({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
        id: request.body.id,
    });

    newUser.save((err) => {
        if(!err){
            response.send('User added successfully')
        }else{
            response.send(err)
        }
    })
});

//get users data
router.get('/getusers', (request, response) => {
    UserModel.find({}, (docs, err) => {
        if(!err){
            response.send(docs)
        }else{
            response.send(err)
        }
    })
});

//get user data
router.post('/getuser', (request, response) => {
    UserModel.find({id: request.body.id}, (docs, err) => {
        if(!err){
            response.send(docs)
        }else{
            response.send(err)
        }
    });
});

//edit user
router.post('/editeduser', (request, response) => {
    UserModel.findOneAndUpdate({id: request.body.id}, {
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone,
    }, (err) => {
        if(!err){
            response.send('User was updated successfully')
        }else{
            response.send(err)
        }
    });
});

//delete user
router.post('/deleteuser', (request, response) => {
    UserModel.findOneAndDelete({id: request.body.id},(err) => {
        if(!err){
            response.send('User was deleted successfully')
        }else{
            response.send(err)
        }
    });
});