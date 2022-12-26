const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const CompanySchema = new mongoose.Schema({
   companyname:{
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
   official_website:
   {
    type:mongoose.Types.Decimal128
   },
   batch:
   {
    type:String
   },
   cpi:
   {
    type:Number
   },
   techstacks:
   {
    type:String
   }
});

const Company = new mongoose.model("Company",CompanySchema);

module.exports = Company;