const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tokenValidation = require("../middleware/tokenValidation");
const requestsLogs = require("../middleware/requestsLogs");

router.post("/signup", requestsLogs.requestsLogs, userController.createUser);

router.post("/login", requestsLogs.requestsLogs, userController.loginUser);

router.post(
  "/profile",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  userController.getUserProfile
);

router.put(
  "/profile",
  requestsLogs.requestsLogs,
  tokenValidation.validateToken,
  userController.updateUserProfile
);

module.exports = router;
