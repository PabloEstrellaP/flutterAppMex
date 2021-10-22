const { Router } = require('express');
const router = Router();

const { googleAuth } = require('../controller/user');

router.post('/', googleAuth);

module.exports = router;