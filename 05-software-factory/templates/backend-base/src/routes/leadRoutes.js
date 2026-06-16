const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

// Define la ruta POST para recibir los formularios
// La URL completa terminará siendo /api/leads
router.post('/', leadController.createLead);

module.exports = router;