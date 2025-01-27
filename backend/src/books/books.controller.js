const books = require('./books.model');
async function addBook(req, res) {
    try {
        const newBook = await new books({ ...req.body });
        await newBook.save();
        res.status(200).send({ message: "data recieved succesfully", book: newBook })
    } catch (error) {
        res.status(500).send({ message: "Data sending failed", error: error });
    }
}

async function getAllBooks(req, res) {
    try {
        const allBooks = await books.find().sort({createdAt: -1});
        res.status(200).send(allBooks);
    } catch (error) {
        res.status(500).send({ message: "Cannot fetch book data", error: error });
    }
}

async function getBook(req, res) {
    const { id } = req.params;
    try {
        const book = await books.findById(id);
        if (book) {
            res.status(200).send(book);
        } else {
            res.status(404).send({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).send({ message: "Cannot fetch book data", error: error });
    }
}

async function updateBook(req, res) {
    const { id } = req.params;
    try {
        const updatedBook = await books.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            res.status(404).send({ message: 'Book not found' });
        } else {
            res.status(200).send({ message: "Book update succesfull", book: updatedBook });
        }
    } catch (error) {
        res.status(500).send({ message: "Cannot update book data", error: error });
    }
}

async function deleteBook(req, res) {
    const { id } = req.params;
    try {
        const deletedBook = await books.findByIdAndDelete(id);
        if (!deletedBook) {
             res.status(404).send({ message: 'Book not found' });
        } else {
            res.status(200).send({ message: "Book deleted succesfully", book: deletedBook });
        }
    } catch (error) {
        res.status(500).send({ message: "Cannot update book data", error: error });
    }
}

module.exports = {
    addBook, getAllBooks, getBook, updateBook, deleteBook
}