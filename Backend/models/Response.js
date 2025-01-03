const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
      answerText: { type: String },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Response', responseSchema);
