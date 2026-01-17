const express = require('express');
const router = express.Router();
const { createContact } = require('../controller/contact.controller');


router.post('/contact', createContact);
module.exports = router;
