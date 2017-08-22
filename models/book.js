let mongoose = require("mongoose");

// Genre Schema

let bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    publisher: {
        type: String

    },
    pages: {
        type: String

    },
    image_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
let Book = module.exports = mongoose.model("Books", bookSchema);

// get genres

module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}
module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}

module.exports.updateBook = function(id, book, options, callback) {
    let query = { _id: id };
    let update = {
        title: book.title,
        author: book.author,
        description: book.description,
        genre: book.genre,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    };
    Book.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteBook = function(id, callback) {
    let query = { _id: id };
    Book.remove(query, callback);
}