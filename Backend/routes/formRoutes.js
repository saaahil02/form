

// module.exports = router;
const express = require('express');
const router = express.Router();
const Form = require('./models/formModel');

// Create a new form
router.post('/create', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: 'Form created successfully', form });
  } catch (error) {
    res.status(500).json({ error: 'Error creating form', details: error.message });
  }
});

// Get all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching forms', details: error.message });
  }
});

// Get a specific form by ID
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching form', details: error.message });
  }
});

module.exports = router;
