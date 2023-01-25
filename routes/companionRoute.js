// const express = require("express");

// const {
//   getCompanion,
//   postCompanion,
//   createCompanion,
//   updateCompanion,
//   deleteCompanion,
// } = require("../controllers/companionControllers");

// const companionRouter = express.Router();

// companionRouter.get("/getcompanion", getCompanion);

// companionRouter.post("/postcompanion", postCompanion);

// companionRouter.create("/createcompanion", createCompanion);

// companionRouter.updat("/updatecompanion", updateCompanion);

// companionRouter.delete("/deletecompanion", deleteCompanion);

// module.exports = companionRouter;
const express = require("express");
const router = express.Router();
const {
  getCompanion,
  getCompanions,
  createCompanion,
  updateCompanion,
  deleteCompanion,
} = require("../controllers/companionControllers");

// Get all companions
router.get("/", getCompanions);

// Get a single companion by id
router.get("/:id", getCompanion);

// Create a new companion
router.post("/", createCompanion);

// Update a companion
router.put("/:id", updateCompanion);

// Delete a companion
router.delete("/:id", deleteCompanion);

module.exports = router;
