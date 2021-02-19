import React, {Component} from 'react'
import '../App.css';
import BookSearch from '../components/BookSearch';
import API from "../utils/API";
import { List } from "../components/List";
import Card from "../components/Card";

class Search extends Component {
    state = {
        books: [],
        savedBooks: [],
        i: "",
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value,});
    };

    getBooks = () => {
        API.getBooks(this.state.i)
        .then((res) => {
            this.setState({
                books: res.data,
                currentPage: 1,
            })
        }).catch(()=> {
            this.setState({
                books: [],
                message: "Search didnt match any book results",
                currentPage: 1,
            });
        });
    };
    getSavedBooks = () => {
        API.getSavedBooks()
        .then((res) => {
            this.setState({ savedBooks: res.data});
        }).catch (() => {
            this.setState({
                savedBooks: [],
                message: "You didnt save any books"
            });
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getBooks();
    }

    handleBookSave = (id) => {
        const book = this.state.books.find((book) => book.id === id);
        const authorsString = book.volumeInfo.authors.toString();
        API.saveBook({
            id: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: authorsString,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
        }).then(() => this.getSavedBooks());
    };

    render() {
        return (
            <>
            <BookSearch
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
            />
            <div className='container' style={{ marginTop: '3em'}}>
                <h4>Results</h4>
                <List>
                    {this.state.books.map((book) => (
                        <Card
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        description={book.volumeInfo.description}
                        Button={() => (
                            <button
                            onClick={() => this.handleBookSave(book.id)}
                            className='btn btn-outline-secondary heading-subtitle ml-2'>Save</button>
                        )} />
                    ))}
                </List>
            </div>
            </>
        );
    }
}


export default Search;