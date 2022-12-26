const express = require("express");
const router = express.Router();

const { getHome,
    registerstudent,
    loginstudent,
    registercompany,
    logincompany} = require("../controllers/index");


router.get("/", getHome);
router.post("/addstudent",registerstudent);
router.post("/loginstudent",loginstudent);
router.post("/addcompany",registercompany);
router.post("/logincompany",logincompany);


module.exports = router;
