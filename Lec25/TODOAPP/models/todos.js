const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task:String,
    description :String
})
todoSchema.pre('save',function(next){
    console.log("THIS",this);
    this.randomData = 'fhweih`oiv';
    next();
})
module.exports = mongoose.model('todo',todoSchema);
