const { Router } = require("express");
const notesRoutes = Router();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const NotesControllers = require("../controllers/NotesControllers");

const notesControllers = new NotesControllers();

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/:user.id", notesControllers.create);
notesRoutes.get("/:id", notesControllers.show);
notesRoutes.delete("/:id", notesControllers.delete);
notesRoutes.get("/", notesControllers.index);

module.exports = notesRoutes;
