import axios from "axios";

export default {
    getBooks: function (query) {
        const params = { i:query };
        return axios.get("/api/search", {params});
    },
    getSavedBooks: function () {
        return axios.get("/api/books");
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function (book) {
        return axios.post("/api/books", book);
    },
};