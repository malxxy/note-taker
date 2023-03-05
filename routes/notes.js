const router = require('express').Router(); // require express and initiate routes
const {read, readAndAppend} = require('../helpers/readFunctions');

// GET Route for retrieving all notes that already exist
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes data`);
    read(path.join(__dirname,'../db/db')).then((data) => res.json(JSON.parse(data)));
  });
  
// POST Route for submitting note
router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to submit notes`); // POST request received

  // Destructure body
  const { title, text } = req.body;

  // If body has content
  if (req.body) {
    const newNote = {
      title,
      text
    };

    readAndAppend(newNote, path.join(__dirname,'../db/db.json'));
    res.json('Note added');
  } else {
    res.json('Error in posting new note');
  }
});

// DELETE route for notes
router.delete('/notes/:id', (req, res) => {
  // delete route
});

module.exports = router;