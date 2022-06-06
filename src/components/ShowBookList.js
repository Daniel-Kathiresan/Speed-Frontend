import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
// import ClickRate from './ClickRate';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div class="topnav">
        <a class="active" href="/">Home Page</a>
        <a href="/create-book">Add Article</a>
        <a href="#contact">Search Article</a>
        <a href="/select-article">Select Article</a>
        <div class="topnav-right">
          <a href="#about" >Moderator Access</a>
          <a href="/click-rate" >Click Rate</a>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Welcome to SPEED</h2>
              <p className="display-5 text-center">
                The Software Practice Empirical Evidence <br></br>
                Database allows you to search for recommended <br></br>
                articles about a specific Software Engineering practice.<br></br>
              </p>
            </div>

            <div className="col-md-11">
              <Link to="/search-book" className="btn btn-outline-warning float-right">
                + Search for Article
               
              </Link>
              <br />
              <br />
            
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Article
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {bookList}
          </div>
          
        </div>
      </div>
    );
  }
}

export default ShowBookList;