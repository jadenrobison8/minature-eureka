const path = require('path');

//exporting files
module.exports = (app) => {
    //send notes.html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //send index.html
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
};