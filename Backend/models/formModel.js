// const mongoose = require('mongoose');

// const formSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   questions: [{
//     questionText: {
//       type: String,
//       required: true,
//     },
//     questionType: {
//       type: String,
//       required: true,
//     },
//     options: [String], // Only for multiple-choice type questions
//   }],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Form', formSchema);


const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  questions: [
    {
      questionText: { type: String, required: true },
      questionType: { type: String, enum: ['text', 'multiple-choice'], required: true },
      options: [{ type: String }], // Optional for multiple-choice questions
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('formModel', formSchema);
