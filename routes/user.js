// import User from "../model/user";


import express from "express";
import { createRegister, login, profile, updateUser } from "../controller/user.js";
import auth from "../middleware/auth.js";


const router = express.Router();


router.post("/create",createRegister)
router.get("/profile",auth,profile)
router.post("/login",login)
router.put("/update/:id",auth, updateUser)
// router.get("/getaddressbyid",[auth,authZ], getAddressById)

export default router;