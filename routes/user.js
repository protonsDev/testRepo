import express from 'express';
import {signup, updateUserProfile} from "../controller/user.js"
const router = express.Router();

router.post("/signup", signup);
router.put("/updateProfile", updateUserProfile);




export default router;



