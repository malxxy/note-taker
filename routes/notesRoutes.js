// uses express.Router.
const router = require('express').Router();
// const getDB = require('./api/db');

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for retrieving all the feedback
router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes data`);
  
    readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for submitting note
  router.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit notes`);
  
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
  
  // router.listen(PORT, () =>
  //   console.log(`App listening at http://localhost:${PORT} `)
  // );

  module.exports = router;