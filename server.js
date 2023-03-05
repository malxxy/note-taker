const express = require('express');
const routes = require('./routes/index');

const PORT = process.env.PORT || 3001
const app = express();

// order matters
app.use(express.urlencoded({extended:true})); // encode URL 
app.use(express.json()); // parse data froms tring to JSON
app.use('/api',routes); // add /api to path for notes routes
app.use(express.static("public")); // everything that goes to front end is served out of public folder

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(htmlname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(htmlname, '/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});