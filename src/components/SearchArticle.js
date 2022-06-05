import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import BookCard from './BookCard';

class SearchArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      approvedBooks: [],
      title: '',
      authors:'',
      journal_name:'',
      content:'',
      publication_date:'',
      volume:'',
      number:'',
      pages:'',
      bookList: [],
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/books')
      .then(res => {
        this.setState({
          books: res.data,
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };

  onSubmit = e => {
    const books = this.state.books;
    this.state.bookList = '';
    const matchBooks = [];
    e.preventDefault();
    console.log(this.state.title);
    if(this.state.title === ""){
      console.log("hello!")
    }

    books.forEach(book => {
      if((book.title === this.state.title && this.state.title !== "")
      || (book.authors === this.state.authors && this.state.authors !== "")
      || (book.content === this.state.content && this.state.content !== "") 
      || (book.journal_name === this.state.journal_name && this.state.journal_name !== "")
      || (book.publication_date === this.state.publication_date && this.state.publication_date !== "")
      || (book.volume === this.state.volume && this.state.volume !== "")
      || (book.number === this.state.number && this.state.number !== "")
      || (book.pages === this.state.pages && this.state.pages !== "")
        ){
          console.log("Match!" + book.title);
          matchBooks.push(book);
        }
    })

    if(!matchBooks) {
      this.state.bookList = "there is no book record!";
    } else {
      this.state.bookList = matchBooks.map((book, k) => 
        <BookCard book={book} key={k} />
      );
    }

    this.forceUpdate();
  };


  render() {


    return (
      <div className="SearchArticle">
        <div class="topnav">
        <a  href="/">Home Page</a>
        <a href="/create-book">Add Article</a>
        <a class="active" href="/search-article">Search Article</a>
        <a href="#about">About</a>
        <div class="topnav-right">
          <a href="/moderator-login" >Moderator Access</a>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Approved Article List</h2>
            </div>

            <div className="col-md-11">
              <br />
              <br />
              <hr />
            </div>

          </div>

          <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Article'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author(s)'
                    name='authors'
                    className='form-control'
                    value={this.state.authors}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Journal Name'
                    name='journal_name'
                    className='form-control'
                    value={this.state.journal_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe the Content of this article'
                    name='content'
                    className='form-control'
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='publication_date'
                    name='publication_date'
                    className='form-control'
                    value={this.state.publication_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Volume No. Of this Article'
                    name='volume'
                    className='form-control'
                    value={this.state.volume}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Number of this Article'
                    name='number'
                    className='form-control'
                    value={this.state.number}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='No. of Pages in this Article'
                    name='pages'
                    className='form-control'
                    value={this.state.pages}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>

          <div className="list">
                {
                  this.state.bookList
                }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchArticle;