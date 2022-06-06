import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      approvedBooks: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/books')
      .then(res => {
        this.setState({
          books: res.data,
          approvedBooks: res.data,
        });
      })
      .catch(err =>{
        console.log('Error from ShowBookList' + err);
      });
  }


  render() {
    const books = this.state.books;
    books.forEach(element => {
      if(element.approved === false){
        console.log("Approval " + element.title + element.approved);
        delete this.state.approvedBooks[this.state.approvedBooks.indexOf(element)];
      }
    });
    console.log("PrintBook: " + this.state.approvedBooks);
    let bookList;

    if(!this.state.approvedBooks) {
      bookList = "there is no book record!";
    } else {
      bookList = this.state.approvedBooks.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="topnav">
        <a className="active" href="/">Home Page</a>
        <a href="/create-book">Add Article</a>
        <a href="/search-article">Search Article</a>
        <div className="topnav-right">
          <a href="/moderator-panel" >Moderator Access</a>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Approved Article List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Article
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {
                  bookList
                }
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;