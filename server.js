const express = require('express');
const indexRoutes = require('./routes/index');
const notesRoutes = require('./routes/notes');

const PORT = process.env.PORT || 3001
const app = express();

// order matters
app.use(express.urlencoded({extended:true})); // encode URL 
app.use(express.json()); // parse data froms tring to JSON
app.use(express.static('public')); // everything that goes to front end is served out of public folder

app.use('/', indexRoutes);
app.use('/api', notesRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});