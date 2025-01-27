const express=require("express")
const verifyToken=require("../middleware/authMiddleware")
const getUserName=require("../controllers/userController")
const router=express.Router()

router.route("/username").get(verifyToken,getUserName)

module.exports=router