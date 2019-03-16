const express = require("express");
const router = express.Router();

const Book = require("../../models/Books");

router.get("/", (req, res) => {
    Book.find()
        .sort({
            date: -1
        })
        .then(books => (res.json(books)))
})

router.post("/api/books", (req, res) => {
    const newBook = new Book ({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        link: req.body.link,
        image: req.body.image
    });
    newBook.save()
        .then(book => res.json(book));
});

router.delete("/:id", (req, res) => {
    Book.findById(req.params.id)
    .then(book => book.remove().then(()=> res.json({success: true})))
    .catch(err=> res.status(404).json({success:false}))
});


module.exports = router;

