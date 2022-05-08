const express = require("express");
const router = express.Router();
const AnimalController = require("../controllers/animal")


router.get("/retrieve", AnimalController.getAll);
router.post('/create', AnimalController.create);
router.delete('/delete', AnimalController.delete);

module.exports = router;
