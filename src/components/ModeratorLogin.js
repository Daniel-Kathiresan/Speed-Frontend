import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class ModeratorLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ModeratorLogin');
      })
  };


  render() {
    return (
      <div className="ModeratorLogin">
                <div className="ShowBookList">
        <div class="topnav">
        <a href="/">Home Page</a>
        <a href="/create-book">Add Article</a>
        <a href="#contact">Search Article</a>
        <a href="#about">About</a>
        <div class="topnav-right">
          <a class="active" href="/moderator-login" >Moderator Access</a>
        </div>       
            </div>
            <h2 className="display-4 text-center">Moderator Login</h2>

            </div>
        </div>
    );
  }
}

export default ModeratorLogin;