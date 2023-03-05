const express = require('express')
const notesRoutes = require('./notesRoutes');

const app = express();

app.use(`/notes`,notesRoutes);

module.exports = app;