const router = require('express').Router(); // require express and initiate routes
const {read, readAndAppend} = require('../helpers/readFunctions');

// GET Route for retrieving all notes that already exist
router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes data`);
  
    read('./db/db').then((data) => res.json(JSON.parse(data)));
  });
  
// POST Route for submitting note
router.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to submit notes`); // POST request received

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting new note');
  }
});

module.exports = router;