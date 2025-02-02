const express = require('express');
const Book = require("./book.model");
const {postSingleBook, getAllBooks, getSingleBook, updateSingleBook, deleteSingleBook} = require("./book.controller");
const router = express.Router()

// fronted => backend server => controller => book schema => database => send to server => back to fronted
// post a book
// post = when submit something fronted to db
// get = get something back from db
// put = update
// delete = delete

router.post('/create-book', postSingleBook)

router.get('/', getAllBooks)

router.get('/:id', getSingleBook)

router.put('/edit-book/:id', updateSingleBook)

router.delete('/delete-book/:id', deleteSingleBook)

module.exports = router