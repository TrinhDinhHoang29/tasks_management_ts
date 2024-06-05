import mongoose, { Schema } from "mongoose"
const taskSchema:Schema = new  mongoose.Schema({
    title:String,
    status:String,
    content:String,
    timeStart:Date,
    timeFinish:Date,
    createdBy:String,
    listUser:Array,
    taskParent:String,
    deleted:{
        type:Boolean,
        default:false
    },
    deleteAt:Date
    
},{
    timestamps:true
});
const task = mongoose.model("Task",taskSchema,"task");
export default task;