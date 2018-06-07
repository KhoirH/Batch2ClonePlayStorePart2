const express = require("express");
const router  = express.Router();

const Images = require("../model/images");

router.get("/:itemId", (req , res , next ) =>{
    Images
    .find({itemId : res.params.itemId}).then(function(result){
      res.send(result)
    })
  })
  
router.post("/", (req , res , next ) =>{
   
    Images
      .create(req.body)
      .then(function(res){
        res.send(res);
      })
      .catch(next);  
  }) 
  
router.delete("/:imageId", (req , res , next ) =>{
     Images
     .findOneAndRemove({_id: req.params.imageId })
     .then(function(result){
       res.send(result)
     }) 
  })
  
router.put("/:imageId", (req , res , next) =>{
      Images
      .findOneAndUpdate({_id : req.params.imageId } , req.body)
      .then(function(result){
        Images.findOne({_id : req.params.imageId}).then(function(u){
          res.send(u)
        })
      });
  })

module.exports  = router ;

