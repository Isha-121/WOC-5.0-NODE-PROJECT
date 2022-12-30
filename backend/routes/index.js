const express = require("express");
const router = express.Router();

const { getHome,
    registerstudent,
    loginstudent,
    registercompany,
    logincompany,
    addCompany,
    addStudent,
} = require("../controllers/index");


router.get("/", getHome);
router.post("/addstudent",registerstudent);
router.post("/loginstudent",loginstudent);
router.post("/addcompany",registercompany);
router.post("/logincompany",logincompany);
router.get("/addstudent",addStudent);
router.get("/addcompany",addCompany);




module.exports = router;
