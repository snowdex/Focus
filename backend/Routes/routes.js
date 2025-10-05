const { login, signup } = require('../ops/authOps');
const { getTasks, createTask, updateTask } = require('../ops/taskOps');
const validateToken = require('../ops/validateToken');

const router = require('express').Router();

router.get("/v1/home", (req, res)=>{
    res.send("Hello World from Routes");
})

router.get("/v1/dashboard/task/all",validateToken, getTasks)

router.get("/v1/me", validateToken, (req, res)=>{
    res.json({
    success: true,
    user: req.user,  // send the user data back
  });
})



router.post("/v1/login", login)
router.post("/v1/signup", signup)
router.post("/v1/dashboard/task/new", validateToken, createTask)
router.put("/v1/dashboard/task/update/:id", validateToken, updateTask)


module.exports = router; 