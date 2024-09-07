const express = require("express")
const router = express.Router();
const { getAllAds, createAds } = require ("./controller");

const {chechAuth} = require('../users/middleware')


router.get("/", getAllAds);
router.post("/",[chechAuth] ,createAds);


module.exports = router;