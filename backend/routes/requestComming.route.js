const express = require("express");

const router = express.Router();

const requestCommingController = require("../controllers/requestComming.controller.js");

router.get("/", requestCommingController.getRequest);
router.post("/", requestCommingController.postRequest);

module.exports = router;
