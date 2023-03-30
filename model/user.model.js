const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    author:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    img:{
        type:String
    },
    createdAt: {
        type: Date,
        default: new Date() // sets the default value to the current time
      }
})

const UserModel=mongoose.model('user',userSchema);

module.exports=UserModel;