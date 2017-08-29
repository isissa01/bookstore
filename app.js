let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let Genre = require("./models/genre");
let Book = require("./models/book");
let app = express();
let corser = require("corser");
app.use(corser.create({
    methods: corser.simpleMethods.concat(["PUT"], ["DELETE"], ["POST"]),
    requestHeaders: corser.simpleRequestHeaders.concat(["X-Requested-With"])
}));
app.all('*', function(request, response, next) {
    response.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,Authorization,Access-Control-Allow-Origin');
    response.header('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE');
    response.header('Access-Control-Allow-Origin', '*');
    next();
});
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(express.static(__dirname + "/public"));
// Connect to mongoose
mongoose.connect("mongodb://localhost/bookstore", { useMongoClient: true });
let db = mongoose.connection;

// body-parser Middle Ware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Please use /api/books or /api/genres");

});
app.get('/api/genres', (req, res) => {
    Genre.getGenres(function(err, genres) {
        if (err) {
            throw err
        }
        res.json(genres);
    });

});
app.post('/api/genres', (req, res) => {
    let genre = req.body;
    Genre.addGenre(genre, function(err, genre) {
        if (err) {
            throw err
        }
        res.json(genre);
    });

});
app.put('/api/genres/:_id', (req, res) => {
    let id = req.params._id;
    let genre = req.body;

    Genre.updateGenre(id, genre, {}, function(err, genre) {
        if (err) {
            throw err
        }
        res.json(genre);
    });

});
app.delete('/api/genres/:_id', (req, res) => {
    let id = req.params._id;
    Genre.deleteGenre(id, function(err, genre) {
        if (err) {
            throw err
        }
        res.json(genre);
    });

});

app.get('/api/books', (req, res) => {
    Book.getBooks(function(err, books) {
        if (err) {
            throw err
        }
        res.json(books);
    });

});
app.post('/api/books', (req, res) => {
    let book = req.body;
    Book.addBook(book, function(err, book) {
        if (err) {
            throw err
        }
        res.json(book);
    });

});
app.get('/api/books/:_id', (req, res) => {
    Book.getBookById(req.params._id, function(err, book) {
        if (err) {
            throw err
        }
        res.json(book);
    });

});

app.put('/api/books/:_id', (req, res) => {
    let id = req.params._id;
    let book = req.body;
    Book.updateBook(id, book, {}, function(err, book) {
        if (err) {
            throw err
        }
        res.json(book);
    });

});
app.use(function(req, res, next) {
    res.sendFile(__dirname + "/public/index.html");
})
app.delete('/api/books/:_id', (req, res) => {
    let id = req.params._id;
    Book.deleteBook(id, function(err, book) {
        if (err) {
            throw err
        }
        res.json(book);
    });

});
app.listen(3000);
console.log("listening on port 3000");