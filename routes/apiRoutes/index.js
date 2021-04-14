const router = require("express").Router();
let notes = require("../../data/db.json");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

//add notes route
router.get("/notes", (req, res) => {
    res.json(notes);
});

//POST route
router.post("/notes", (req,res) => {
    let newNote = req.body;

    //check id
    let id = notes[notes.length - 1]["id"];
    let newId = id + 1;
    newNote["id"] = newId;

    console.log("body: ", req.body);
    notes.push(newNote);

    writeFileAsync("../../data/db.json", JSON.stringify(notes));
    console.log("notes have been updated!");
});

module.exports = router;