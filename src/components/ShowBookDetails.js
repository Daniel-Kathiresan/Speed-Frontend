import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import RatingStars from './RatingStars';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      clickrate: '',
      rating: '',
    }
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/books/'+this.props.match.params.id)
      .then(res => {
        console.log("Print-showBookDetails-API-response: " + res.data);
        // if(res.clickrate === null){
        //   this.setState({
        //     clickrate: 1
        //   })
        // } else {
          this.setState({
            clickrate: Number(res.data.clickrate) + 1
          })
        // }
        this.setState({
          book: res.data,
          rating: res.data.rating,
        })
        console.log("Res Clickrate ",res.data.clickrate)
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
    
      const data = {
        clickrate: this.state.clickrate
      };
  
      axios
      .put('http://localhost:5000/api/books/' + this.props.match.params.id, data)
      .then(res => {
        this.setState({
          clickrate: res.data.clickrate
      })
      })
      .catch(err => {
        console.log("error with clickrate" + err)
      })
  };

  // onClickRating(RatingStars){
  //   const data = {
  //     rating: rating
  //   }

  //   axios
  //    .put('http://localhost:5000/api/books/' + this.props.match.params.id, data)
  //    .then(res => {
  //      console.log("Data " + res.data)
  //   })
  //   .catch(err => {
  //     console.log("error with clickrate" + err)
  //   })
  //   this.state.clickrate = data.clickrate
  // }

  
  render() {
    const book = this.state.book;
    
    // const click = book.clickRate
    // console.log("ORIGINAL CLICKRATE" + book.clickrate + " " + click)
    // const clickNum = (Number(click)) + 1;
    // this.onClickRateUpdate(clickNum);
    // console.log("Not Null!! " + clickNum + " " + click + " " + this.props.match.params.id);
    
    // this.state.clickrate = click;

    let BookItem = <div>
      <table className="table table-hover">
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
            <td>Rating</td>
            <td>{ Number(book.rating) }</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Click Rate</td>
            <td>{ Number(book.clickrate) }</td>
          </tr>
        </tbody>
      </table>
    </div>

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
                  View Articles Info and Rate Article
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem }
          </div>
          <div className="star"></div>
          <form onSubmit={this.handleSubmit}>
        <RatingStars/>      
        </form> 
        </div>
      </div>
    );
  }
}


export default showBookDetails;