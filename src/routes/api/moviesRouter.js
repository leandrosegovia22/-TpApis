var express = require('express');
var router = express.Router();

const {create,destroy} = require('../../controllers/api/moviesController');

/* endpoints: /api/movies */
 
router.post('/create',create)
router.delete('/delete/:id',destroy)

module.exports = router;