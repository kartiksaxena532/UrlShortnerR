const express = require ("express");
const {handleGenerateUrl}=require("../controllers/url");
const router = express.Router();

router.post("/",handleGenerateUrl);


module.exports = router;
