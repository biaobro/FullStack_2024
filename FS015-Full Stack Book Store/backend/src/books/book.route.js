const express = require('express');
const Book = require("./book.model");
const router = express.Router()

// post a book
// post = when submit something fronted to db
// get = get something back from db
// put = update
// delete = delete


router.post('/create-book', async (req, res) => {
    console.log(req.body)
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"Book posted successfully!", book:newBook})
    }catch (err){
        console.log('Error when creating book', err);
        res.status(500).send({message:"Book posted failed!"})
    }
})

module.exports = router