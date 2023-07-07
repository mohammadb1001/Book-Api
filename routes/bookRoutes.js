const express = require('express');
const router = express.Router();
const bookController = require('../bookcontroller');
const authenticate = require('../middlewares/authMiddleware');


router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

router.use(authenticate);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBookById);
router.delete('/:id', bookController.deleteBookById);

module.exports = router;
