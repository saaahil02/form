const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
    trim: true,
  },
  questionType: {
    type: String,
    enum: ['text', 'multiple-choice'], // Restricts to specific types
    required: true,
  },
  options: {
    type: [String], // Only applicable for multiple-choice questions
    validate: {
      validator: function (options) {
        return this.questionType !== 'multiple-choice' || options.length > 0;
      },
      message: 'Options are required for multiple-choice questions.',
    },
  },
});

module.exports = mongoose.model('Question', questionSchema);
