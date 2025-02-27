// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Import Note Controller
const { createNote, getAllNotes, getOneNote, updateNote, deleteNote } = require('../controllers/NoteController');

// Routes
router.post('/', auth, createNote);
router.get('/', getAllNotes);
router.get('/:id', getOneNote);
router.put('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);

module.exports = router;
