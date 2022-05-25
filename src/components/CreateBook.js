import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      authors:'',
      journal_name:'',
      content:'',
      publication_date:'',
      volume:'',
      number:'',
      pages:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      authors: this.state.authors,
      journal_name: this.state.journal_name,
      content: this.state.content,
      publication_date: this.state.publication_date,
      volume: this.state.volume,
      number: this.state.number,
      pages: this.state.pages,
    };

    axios
      .post('http://localhost:5000/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          authors:'',
          journal_name:'',
          content:'',
          publication_date:'',
          volume:'',
          number:'',
          pages:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
                <div class="topnav">
        <a  href="/">Home Page</a>
        <a class="active" href="/create-book">Add Article</a>
        <a href="#contact">Search Article</a>
        <a href="#about">About</a>
        <div class="topnav-right">
          <a href="#about" >Moderator Access</a>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">
                  Add new Article
              </p>
=======
=======
>>>>>>> main
              <h1 className="display-4 text-center">Submit a Form</h1>
              {/* <p className="lead text-center">
                  Create new book
              </p> */}
<<<<<<< HEAD
>>>>>>> 97370d5 (Updated UI)
=======
>>>>>>> main

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
<<<<<<< HEAD
<<<<<<< HEAD
                    placeholder='Title of the Article'
=======
                    placeholder='Article Title'
>>>>>>> 97370d5 (Updated UI)
=======
                    placeholder='Article Title'
>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> main
                    placeholder='Author'
                    name='author'
>>>>>>> 97370d5 (Updated UI)
                    className='form-control'
                    value={this.state.journal_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
<<<<<<< HEAD
<<<<<<< HEAD
                    placeholder='Describe the Content of this article'
                    name='content'
                    className='form-control'
                    value={this.state.content}
=======
                    placeholder='Source'
                    name='source'
                    className='form-control'
                    value={this.state.source}
>>>>>>> 97370d5 (Updated UI)
=======
                    placeholder='Source'
                    name='source'
                    className='form-control'
                    value={this.state.source}
>>>>>>> main
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
<<<<<<< HEAD
<<<<<<< HEAD
                    placeholder='publication_date'
                    name='publication_date'
                    className='form-control'
                    value={this.state.publication_date}
=======
                    placeholder='Year'
                    name='published_year'
                    className='form-control'
=======
                    placeholder='Year'
                    name='published_year'
                    className='form-control'
>>>>>>> main
                    value={this.state.year}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='DOI'
                    name='DOI'
                    className='form-control'
                    value={this.state.doi}
<<<<<<< HEAD
>>>>>>> 97370d5 (Updated UI)
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
=======
>>>>>>> main
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;