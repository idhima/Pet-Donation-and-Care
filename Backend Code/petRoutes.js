const express = require('express');
const router = express.Router();
const { getPets, addPet } = require('../controllers/petController');

router.get('/', getPets);
router.post('/add', addPet);

module.exports = router;
