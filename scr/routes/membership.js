const express = require("express");
const router = express.Router();
const MembershipController = require("../controllers/membership")


router.get("/retrieve", MembershipController.getAll);
router.post('/create', MembershipController.create);
router.delete('/delete', MembershipController.delete);

module.exports = router;
