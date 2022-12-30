const Student = require("../models/Student");
const Company = require("../models/Company");
const bcrypt = require('bcrypt');
const getHome = (req, res) => {
  res.render("home");
};

const registerstudent = async(req,res)=>{
  const saltPassword = await bcrypt.genSalt(12);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);
  req.body.password = securePassword;
  Student.create(req.body,(err,student)=>{
    if(err)
    {
      return res.status(500).json({
        data:{},
        success: false,
        error: "Email is already registered",
      });
    }
    else
    {
      return res.render("studentdetails",{data:student});
    }
  })
  
}

const registercompany = async(req,res)=>{
  const saltPassword = await bcrypt.genSalt(12);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);
  req.body.password = securePassword;
  Company.create(req.body,(err,company)=>{
    if(err)
    {
      return res.status(500).json({
        data:{},
        success: false,
        error: "Email is already registered",
      });
    }
    else
    {
      return res.status(200).json({
        data:company,
        success:true,
        error:""

      });
    }
  })
  
}

const loginstudent = async(req,res)=>{
  try{
  const email = req.body.email;
  const password = req.body.password;
  const student = await Student.findOne({email:email});
  const isMatch = await bcrypt.compare(password,student.password);

  if(isMatch)
  {
    student.password = null;
    password = null;
    return res.json({
      data:student,
      success:true,
      error:""
    });
  }
  else
  {
    return res.json({
      data:{},
      success:false,
      error: "Invalid login credentials!!"
    });
  }
}
catch(error)
{
  return res.status(404).send({
      data:{},
      success:false,
      error: "Internal Server Error"
  });
}

}


const logincompany = async(req,res)=>{
  try{
  const email = req.body.email;
  const password = req.body.password;
  const company = await Company.findOne({email:email});
  const isMatch = await bcrypt.compare(password,company.password);

  if(isMatch)
  {
    company.password = null;
    password = null;
    return res.json({
      data:company,
      success:true,
      error:""
    });
  }
  else
  {
    return res.json({
      data:{},
      success:false,
      error: "Invalid login credentials!!"
    });
  }
}
catch(error)
{
  return res.status(404).send({
      data:{},
      success:false,
      error: "Internal Server Error"
  });
}

}

const addStudent = (req,res)=>{
  res.render("student");
}

const addCompany = (req,res)=>{
  res.render("company");
}

// const getStudent = async (req,res)=>{
//   const student = await Student.findOne({email:req.body.email});
//   console.log(req.body.email);
//   res.render("studentdetails",{data:student});
// }

module.exports = {getHome,registerstudent,loginstudent,registercompany,logincompany,addStudent,addCompany};
