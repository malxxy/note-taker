const express = require('express');
const indexRoutes = require('./routes/index');
const notesRoutes = require('./routes/notes');

const PORT = process.env.PORT || 3001
const app = express();

// order matters
app.use(express.urlencoded({extended:true})); // encode URL 
app.use(express.json()); // parse data froms tring to JSON
// app.use('/api',routes); // add /api to path for notes routes
app.use('/api', indexRoutes);
app.use('/notes', notesRoutes);
app.use(express.static('public')); // everything that goes to front end is served out of public folder

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});