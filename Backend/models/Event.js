const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  venue: String,
  eventId: { type: String, unique: true },
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
