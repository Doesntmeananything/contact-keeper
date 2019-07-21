const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", (req, res) => {
  res.send("Add new contact");
});

router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
