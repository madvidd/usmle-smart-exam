const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    type: { type: String, required: true },  // E.g., Anatomy, Pharmacology
    difficulty: { type: Number, required: true },  // Difficulty level (1-5)
    question: { type: String, required: true },  // The question text
    options: [{ type: String, required: true }],  // Possible answers
    correctAnswer: { type: String, required: true },  // The correct answer
});

module.exports = mongoose.model('Question', QuestionSchema);
