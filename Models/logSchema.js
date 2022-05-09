const mongoose = require ("mongoose")


// create NEW SCHEMA
    const logSchema = new mongoose.Schema ({
       name:{ type:String, required:true},
       entry: {type:String, required:true },
       shipIsBroken : {type: Boolean},
      });
 
   

// convert schema to model
const logModel = mongoose.model("Logs", logSchema)

// export 
module.exports = logModel
