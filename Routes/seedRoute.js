const express = require("express");
const { title } = require("process");
const seedRoute = express.Router()
const Logs = require("../Models/logSchema")

const caplog = [
    {title:"Day1" },
    {entry:"Approach to mystery planet"},
    {shipIsBroken:"No"}
  ];

  seedRoute.post("/", (req, res)=>{
    const newLog= req.body

    Logs.insertMany(caplog, (err, caplog)=>{ 
        if(err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json({caplog})
        }
    })
})

module.exports = seedRoute;