const express = require('express');
const noteRoutes = require('./routes');

const PORT = process.env.PORT || 3001
const app = express();

// order matters
app.use(express.urlencoded({extended:true})); // encode URL 
app.use(express.json()); // parse data froms tring to JSON
app.use(express.static("public")); // everything that goes to front end is served out of public folder
app.use(noteRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});