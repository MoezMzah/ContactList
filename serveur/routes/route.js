express=require('express');
const personModel = require('../Model');
const router = express.Router();
 router.post("/api/addUser",(req,res,next)=>{

    let {FirstName,LastName,email,phone,address}=req.body
   let newperson=new personModel({FirstName,LastName,email,phone,address})
     newperson.save()

   .then((personModel)=>res.status(200).send(personModel)).catch((err)=>console.log(err))


  });




  router.get("/api/getuser",(req,res,next)=>{
  
      personModel.find()
  
      .then((personModel)=>res.send(personModel)).catch((err)=>console.log(error))
  
  
     });

     router.put("/api/:UserId",(req,res,next)=>{
        const _id= req.params.UserId
       personModel.findByIdAndUpdate(_id,{...req.body},{new:true})
     .then((personModel)=>res.send(personModel)).catch((err)=>console.log(err))
     });


    router.delete("/api/:userId",(req,res,next)=>{
       const _id=req.params.userId
      personModel.findByIdAndDelete(_id)
   .then((personModel)=>res.send(personModel)).catch((err)=>res.send(err))
    });



   module.exports=router;