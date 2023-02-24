const express = require('express');
const notesRoutes = require('./notesRoutes.js');

const app = express();

app.use(`/notes`,notesRoutes);