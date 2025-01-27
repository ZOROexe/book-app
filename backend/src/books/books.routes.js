const books = require('./books.model')
const { addBook, getAllBooks, getBook, updateBook, deleteBook } = require('./books.controller')
const express = require('express');
const router = express.Router();


router.post('/create-book', addBook);
router.get('/', getAllBooks);
router.get('/:id', getBook);
router.put('/edit/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;