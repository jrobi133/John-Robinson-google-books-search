import React, {Component} from 'react'
import '../App.css';
import BookSearch from '../components/BookSearch';

class Search extends Component {
    state = {
        
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value,});
    };

    getBooks = () => {

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getBooks();
    }
}

function Home () {
    return (
        <>
            <BookSearch 
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
        </>
    )
}

export default Home;