const express = require('express');
const router = express.Router();
const controller = require('../controllers/urlController');

router.post('/shorten', controller.createShortUrl);
router.get('/shorten/:shortCode', controller.getOriginalUrl);
router.put('/shorten/:shortCode', controller.updateUrl);
router.delete('/shorten/:shortCode', controller.deleteUrl);
router.get('/shorten/:shortCode/stats', controller.getStats);

module.exports = router;
