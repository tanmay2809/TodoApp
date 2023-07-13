 const mongoose =require("mongoose");

 const todoSchema = new mongoose.Schema(
    {
        title :{
                type:"string",
                required:true,
                maxLength:50,
                },
        description :{
                        type:"string",
                        required:true,
                        maxLength:100,
                    },
        createdAt :{
                    type:"date",
                    required:true,
                    default:Date.now(),

        },
        updatedAt:{
            type:"Date",
            required:true,
            defaul:Date.now()
        }
    }
 ) 

 module.exports = mongoose.model("Todo", todoSchema);