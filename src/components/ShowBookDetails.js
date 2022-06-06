import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      rating: '',
      oldRating: '',
      numRatings: '',
      avRating: '',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/books/' + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data,
          oldRating: res.data.rating,
          numRatings: res.data.numRatings,
          avRating: res.data.rating
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

  onSelectChange = e => {
    console.log(e.target.value);
    this.setState({rating: e.target.value });
  };

  onSubmit = e => {
    var newRating = 0;
    var newNumRating = 0;
    e.preventDefault();
    console.log("Num ratings: " + this.state.numRatings);
    if((this.state.numRatings !== null && this.state.numRatings > 0)){
      console.log("IF!");
      newRating = (Number(this.state.rating) + Number(this.state.oldRating) / this.state.numRatings);
    } else {
      console.log("ELSE!");
      newRating = this.state.rating;
    }

    if(this.state.numRatings === null){
      newNumRating = 1;
    } else {
      newNumRating = (Number(this.state.numRatings) + 1);
    }

    const data = {
      rating: newRating,
      numRatings: newNumRating
    };

    console.log("AA " + newRating);
    console.log("BB " + this.state.rating);
    console.log("CC " + newNumRating);

    axios
      .put("http://localhost:5000/api/books/" + this.props.match.params.id, data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Error in ShowDetail Page!" + err);
      });
      this.setState({
        avRating: newRating
      });
  };

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
            <th scope="row"></th>
            <td>Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Authors</td>
            <td>{ book.authors }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Journal Name</td>
            <td>{ book.journal_name }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Content</td>
            <td>{ book.content }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Publication Date</td>
            <td>{ book.publication_date }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Volume</td>
            <td>{ book.volume }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Article Number</td>
            <td>{ book.number }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Article No. Pages</td>
            <td>{ book.pages }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Evidence</td>
            <td>{ String(book.content_type) }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>SE Practice</td>
            <td>{ book.se_practice }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Average Rating</td>
            <td>{ this.state.avRating }</td>
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
          <form noValidate onSubmit={this.onSubmit}>
          <label>
          <h3 className="cTypeH3">Rating</h3>
          <select value={this.state.content_type} onChange={this.onSelectChange}>
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
          </select>
        </label>
        <button type="submit" className="btn btn-outline-info btn-lg btn-block">Submit Rating</button>
            </form>
        </div>
      </div>
    );
  }
}

export default showBookDetails;