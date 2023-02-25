const router = require('express').Router();
const notesRoutes = require('./notesRoutes.js');

// const app = express();

router.use(`/notes`,notesRoutes);

module.exports = router;