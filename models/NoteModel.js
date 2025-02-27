// models/note.js
const mongoose = require('mongoose');

// Skapa en Note-schema
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Skapa en Note-modell
const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
