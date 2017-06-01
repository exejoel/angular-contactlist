const express = require('express');
const router = express.Router();


const Contact = require('../models/contacts');

//retrieving data

router.get('/contact', function(req,res, next){
    //res.send('Retreiving contact list');
    Contact.find(function (err,contacts) {
        res.json(contacts);
    })
})

//logic to add contact
router.post('/contact',function(req,res,next){

    let newContact = new Contact({
        first_name :req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    })

    newContact.save((err,contact)=>{
        if(err){
            res.json({msg : 'Faileds to add contact'});
        }else{
            res.json({ msg: 'Contact added successfully'});
        }
    });
});

//delete contact
router.delete('/contact/:id',function(req,res,next){
    Contact.remove({_id:req.params.id},function (err, result) {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
        
    })


    //logic to delete contact
});

module.exports = router;