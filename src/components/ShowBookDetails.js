import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/books/' + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        });
      })
      .catch(err => {
        console.log("Error from ShowBookDetails" + err);
      });
  }

  onDeleteClick (id) {
    axios
      .delete('http://localhost:5000/api/books/' + id)
      .then(res => {
        this.props.history.push("/");
        console.log(res);
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick" + err);
      });
  }


  render() {

    const book = this.state.book;
    let BookItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Authors</td>
            <td>{ book.authors }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Journal Name</td>
            <td>{ book.journal_name }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Content</td>
            <td>{ book.content }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Publication Date</td>
            <td>{ book.publication_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Volume</td>
            <td>{ book.volume }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Article Number</td>
            <td>{ book.number }</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Article No. Pages</td>
            <td>{ book.pages }</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Content</td>
            <td>{ String(book.content_type) }</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>SE Practice</td>
            <td>{ book.se_practice }</td>
          </tr>
        </tbody>
      </table>
    </div>;

    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Article Record</h1>
              <p className="lead text-center">
                  View Articles Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>
        </div>
      </div>
    );
  }
}

export default showBookDetails;