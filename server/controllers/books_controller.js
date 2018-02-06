let books = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {title , author} = req.body;
        books.push( {id, title, author} );
        id++;
        res.send(books)
    },
    read: (req, res) => {
        res.send(books)
    },
    update: (req, res) => {
        const bookId = req.params.id;
        let index = books.findIndex(book => book.id == bookId);

        books [index] = {
            id: books [index].id,
            title: req.body.title,
            author: req.body.author
        };
        res.send(books)
    },
    delete: (req, res) => {
        const deleteId = req.params.id;
        bookId = books.findIndex(book => book.id == deleteId);
        books.splice(bookId, 1);
        res.send(books)
    }
}