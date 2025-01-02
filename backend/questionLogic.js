const connectToDB = require('./mongoConnect');
const Question = require('../models/questionModel');

// Fetch questions from MongoDB
async function getQuestions(type, difficulty) {
    await connectToDB();
    return await Question.find({ type, difficulty });
}

// Add a question to MongoDB
async function addQuestion(questionData) {
    await connectToDB();
    const newQuestion = new Question(questionData);
    return await newQuestion.save();
}

// Export functions
module.exports = { getQuestions, addQuestion };
