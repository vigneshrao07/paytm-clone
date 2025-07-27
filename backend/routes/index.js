const express = require("express");
const userRouter = require("./user");

const router = express.Router();    //this router this willhandle all the requst 

router.use("/user", userRouter);
module.exports = router;

//why we created router? because we know all requiest going to 
//all request will start from  /api/v1/user /api/v1/transactions....
//in index.js where we will create our express server all request to api/v1/please go to this router 
//app.use is used to fun middlewares before functions also  used to route request that start with substring over to another router