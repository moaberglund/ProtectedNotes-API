// controllers/noteController.js
const Note = require('../models/NoteModel');


exports.createNote = async (req, res) => {
    try {
        const { title, text } = req.body;

        const note = new Note({
            title,
            text
        });

        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getOneNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.updateNote = async (req, res) => {
    try {
        const { title, text } = req.body;
        const note = await Note.findByIdAndUpdate(req.params.id, { title, text }, { new: true });

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
