// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import middleware
const employeeController = require('../controllers/employee.controller');
const authMiddleware = require("../middlewares/auth.middleware");
// Create a route to handle the add employee request on post
router.post("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin],employeeController.createEmployee);
// Export the router
module.exports = router;
