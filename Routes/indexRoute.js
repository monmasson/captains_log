const express = require("express")
const indexRoute = express.Router()
const Logs = require("../Models/logSchema")


const caplog = [
    {title:"Day1" },
    {entry:"Approach to mystery planet"},
    {shipIsBroken:"No"}
  ];

//indexRoute.get("/", (req, res) => {
    //res.status(200).json(caplog)
//})

indexRoute.get("/:id", (req, res)=>{
    const id = req.params.id
    Logs.findById(id, (err, caplog)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(200).json(caplog)
        }
    })
})


indexRoute.delete('/:id', (req, res) => {
    Logs.deleteOne({ 
      _id: req.params.id 
    }, (error, resultB) => {
      if (error) {
        console.error(error); 
        res.status(404).json({
          error: 'No captain log found!'
        })
      } else {
        console.log('Successfully deleted log');
        res.status(204).json({});
      }
    })
  })

  indexRoute.put("/:id", (req, res)=>{
    const id = req.params.id
    const updatedCaplog = req.body

    Logs.updateOne({_id:id}, updatedCaplog, {new: true},(err, updatedCaplog)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(202).json(updatedCaplog)
        }
    })
})





module.exports = indexRoute;
