const axios = require('axios');

module.exports = {
    findAll: function (req, res) {
        const params = {
            i: req.query.i,
        };
        const URL = `https://www.googleapis.com/books/v1/volumes?`;
        axios.get(URL,{params})
        .then((results) => 
        results.data.items.filter((results) =>
        results.volumeInfo.title &&
        results.volumeInfo.infoLink &&
        results.volumeInfo.authors &&
        results.volumeInfo.description &&
        results.volumeInfo.imageLinks &&
        results.volumeInfo.imageLinks.thumbnail
        )).then((response) => {
            res.json(response);
        }).catch((err) => res.status(400).json(err));
    }
}