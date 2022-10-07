const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name should be provided'],
        trim:true,
        maxLength:[20,'can be more then 20 characters']
    },
    completed:{
        type:Boolean,
        default:false, 
    }
})

module.exports = mongoose.model('Task',taskSchema);