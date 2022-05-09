const express = require("express")
const createRoute = express.Router()
const Logs = require("../Models/logSchema")

const caplog = [
    {name:"Day1" },
    {entry:"Approach to mystery planet"},
    {shipIsBroken:"No"}
  ];

createRoute.get("/", (req, res) => {
    res.status(200).json(caplog)
})

createRoute.post('/', (req, res) => {
    const freshLog = req.body
    Logs.create(freshLog, (error, createdLog) => {
      if (error) {
        console.error(error);
        res.status(400).json({
          error: 'an error has occurred'
        })
      } else {
        console.log('Log created successfully');
        res.status(201).json({
          message: 'Created Successfully',
          Logs: createdLog
        })
      }
    })
  })

  module.exports = createRoute;