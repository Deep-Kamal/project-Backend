import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const route = Router()


route.route("/register").post(registerUser)

export default route