import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ModeratorBookCard from './ModeratorBookCard';

class ModeratorPanel extends Component {
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
        })
      })
      .catch(err =>{
        console.log('Error from ModeratorPanel');
      })
  };


  render() {
    const books = this.state.books;
    books.forEach(element => {
      if(element.approved === true){
        console.log("Approval " + element.title +element.approved)
        delete this.state.approvedBooks[this.state.approvedBooks.indexOf(element)]
      }
    });
    console.log("PrintBook: " + this.state.approvedBooks);
    let bookList;

    if(!this.state.approvedBooks) {
      bookList = "there is no book record!";
    } else {
      bookList = this.state.approvedBooks.map((book, k) => 
        <ModeratorBookCard book={book} key={k} />
      );
    }

    return (
      <div className="ModeratorPanel">
        <div class="topnav">
        <a class="active" href="/">Return to Home</a>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Unnaproved Article List</h2>
            </div>

            <div className="col-md-11">
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

export default ModeratorPanel;