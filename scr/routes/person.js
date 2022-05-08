const express = require("express");
const router = express.Router();
const PersonController = require("../controllers/person")


router.get("/retrieve", PersonController.getAll);
router.post('/create', PersonController.create);
router.delete('/delete', PersonController.delete);

module.exports = router;
