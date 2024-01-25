const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,

    },
    totalClicks:[{timestamp:{type:Number}}],
},
    { timestamps: true}
   
    );

const URL = mongoose.model("Url", userSchema);

module.exports=URL;