import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class ApprovalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approved:'',
      content_type: '',
      error: '' 
    };
    this._handleRadio = this._handleRadio.bind(this);
  }

  _handleRadio(event) {
    const approved = event.currentTarget.value === 'true' ? true: false;
    console.log('handle', approved);
    this.setState({
      approved: approved
    })
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/books/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          approved: res.data.approved,
          content_type: res.data.content_type
        })
      })
      .catch(err => {
        console.log("Error from Approval Page");
      })
  };



  onChange = e => {
    console.log(e.target.value)
    this.setState({content_type: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.content_type === " " || this.state.content_type === null){
      this.setState({error: "Please enter a content type before continuing" });
    } else {
      this.setState({error: "" });

    const data = {
      approved: this.state.approved,
      content_type: this.state.content_type,
    };

    axios
      .put('http://localhost:5000/api/books/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/moderator-details/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in Approval Page!");
      })
    }
  };


  render() {
    const { approved } = this.state;
    return (
      <div className="ApprovalPage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/moderator-panel" className="btn btn-outline-warning float-left">
                  Show Unnaproved Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Article</h1>
              <p className="lead text-center">
                  Update Article Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
          <div className="radio">
          <label>
            <input 
              type="radio" 
              name="approved" 
              value="true"
              checked={approved === true}
              onChange={this._handleRadio} />
            Yes
          </label>
       </div>
       <div className="radio">
         <label>
           <input 
             type="radio" 
             name="approved" 
             value="false"
             checked={approved === false}
             onChange={this._handleRadio} />
           No
         </label>
       </div>
        <div>
        </div>
                <br />
                <label>
          Pick an option type
          <select value={this.state.content_type} onChange={this.onChange}>
          <option></option>            
           <option value="Highly Relevant">Highly Relevant</option>
            <option value="Relevant">Relevant</option>
            <option value="Slightly Relevant">Slightly Relevant</option>
            <option value="Not Relevant">Not Relevant</option>
          </select>
        </label>
        Selected option is : {String(this.state.content_type)}
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>
      <p>{this.state.error}</p>
        </div>
      </div>
    );
  }
}

export default ApprovalPage;