var express = require('express');
var router = express.Router();

const {list,detail} = require('../../controllers/api/genresController');

/* endpoints: /api/genres */
 
router.get('/',list)
router.get('/:id',detail)

module.exports = router;