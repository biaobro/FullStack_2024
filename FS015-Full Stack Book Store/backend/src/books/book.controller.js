const Book = require("./book.model");

// post
const postSingleBook = async (req, res) => {
    console.log(req.body)
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"Book created successfully!", book:newBook})
    }catch (err){
        console.log('Error when creating book', err);
        res.status(500).send({message:"Book created failed!"})
    }
}

// get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find(undefined, undefined, undefined).sort({createdAt:-1});
        res.status(200).send({message:"Books fetched successfully!", books:books})
    }catch (err){
        console.log('Error when fetching books', err);
        res.status(500).send({message:"Books fetched failed!"})
    }
}

// get single book
const getSingleBook = async (req, res) => {
    try {
        const {id} = req.params
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message:"Book not founded!"})
        }
        res.status(200).send({message:"Book fetched successfully!", book:book})
    }catch (err){
        console.log('Error when fetching book', err);
        res.status(500).send({message:"Book fetched failed!"})
    }
}

// update single book
const updateSingleBook = async (req, res) => {
    try {
        const {id} = req.params
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new:true});
        if(!updatedBook){
            res.status(404).send({message:"Book not founded!"})
        }
        res.status(200).send({
            message:"Book updated successfully!",
            book:updatedBook
        })
    }catch (err){
        console.log('Error when updating book', err);
        res.status(500).send({message:"Book updated failed!"})
    }
}

// delete single book
const deleteSingleBook = async (req, res) => {
    try {
        const {id} = req.params
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).send({message:"Book not founded!"})
        }
        res.status(200).send({
            message:"Book deleted successfully!",
            book:deletedBook
        })
    }catch (err){
        console.log('Error when deleting book', err);
        res.status(500).send({message:"Book deleted failed!"})
    }
}


module.exports = {postSingleBook, getAllBooks, getSingleBook, updateSingleBook, deleteSingleBook}