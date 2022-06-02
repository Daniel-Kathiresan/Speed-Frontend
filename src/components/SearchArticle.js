import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
          approvedBooks: res.data,
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.title);
    if(this.state.title === ""){
      console.log("hello!")
    }

    const books = this.state.books;
    books.forEach(element => {
      if(element.approved === false){
        console.log("Approval " + element.title +element.approved)
        delete this.state.approvedBooks[this.state.approvedBooks.indexOf(element)]
      }
    });
    console.log("PrintBook: " + this.state.approvedBooks);

    if(!this.state.approvedBooks) {
      this.state.bookList = "there is no book record!";
    } else {
      this.state.bookList = this.state.approvedBooks.map((book, k) => 
        <BookCard book={book} key={k} />
      );
    }
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
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Article
              </Link>
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