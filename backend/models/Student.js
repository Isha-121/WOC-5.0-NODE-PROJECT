const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const StudentSchema = new mongoose.Schema({
   fullname:{
    type: String
   },
  email:
   {
    type:String
   },
   password:
   {
    type:String
   },
   cpi:
   {
    type:mongoose.Types.Decimal128
   },
   batch:
   {
    type:String
   },
   age:
   {
    type:Number
   },
   gender:
   {
    type:String
   },
   techstacks:
   {
    type:String
   }
});

const Student = new mongoose.model("Student",StudentSchema);

module.exports = Student;