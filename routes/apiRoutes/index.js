const router = require("express").Router();
let notes = require("../../data/db.json");
const fs = require("fs");
const util = require("util");
//const writeFileAsync = util.promisify(fs.writeFile);

//add notes route
router.get("/notes", (req, res) => {
    res.json(notes);
});

//POST route
router.post("/notes", (req,res) => {
    let newNote = req.body;

    //check id
    let id = notes.length;
    newNote["id"] = id;

    console.log("body: ", req.body);
    notes.push(newNote);

    fs.writeFileSync("./data/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
    });
    console.log("notes have been updated!");

    res.json(newNote);
});

//delete a note
router.delete("/notes/:id", (req,res) => {
    const noteId = req.params.id;
    
    let filteredId = notes.filter(function(note) {
        return note.id != noteId;
    });

    newNote = JSON.stringify(filteredId);
    notes = filteredId;

    fs.writeFileSync("./data/db.json", newNote, (err) => {
        if (err) throw err;
    });

    res.end();
})

module.exports = router;