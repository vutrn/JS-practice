var express = require("express");
// import * as upload from "express-fileupload";
var router = express.Router();
const multer = require("multer");
// const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/upload", upload.single("image"), async (req, res) => {
  res.send("image uploaded");
});

module.exports = router;
