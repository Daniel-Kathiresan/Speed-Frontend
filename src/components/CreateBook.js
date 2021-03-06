import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      authors: '',
      journal_name: '',
      content: '',
      publication_date: '',
      volume: '',
      number: '',
      pages: '',
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
      se_practice: this.state.se_practice
    };

    axios
      .post('http://localhost:5000/api/books', data)
      .then(res => {
        console.log(res);
        this.setState({
          title: '',
          authors: '',
          journal_name: '',
          content: '',
          publication_date: '',
          volume: '',
          number: '',
          pages: '',
          se_practice: ''
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!" + err);
      });
  };

  render() {
    return (
      <div className="CreateBook">
                <div className="topnav">
        <a href="/">Home Page</a>
        <a className="active" href="/create-book">Add Article</a>
        <a href="/search-article">Search Article</a>
        <div className="topnav-right">
        <a href="/moderator-panel" >Moderator Access</a>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Article</h1>
              <p className="lead text-center">
                  Add new Article
              </p>

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
                <div className='form-group'>
                  <input
                    type="text"
                    placeholder="Enter an SE practice"
                    name="se_practice"
                    className="form-control"
                    value={this.state.se_practice}
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