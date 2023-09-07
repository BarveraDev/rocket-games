const { Router } = require("express");
const sessionRoutes = Router();

const SessionControllers = require("../controllers/SessionControllers");
const sessionControllers = new SessionControllers();

sessionRoutes.post("/", sessionControllers.create);

module.exports = sessionRoutes;
