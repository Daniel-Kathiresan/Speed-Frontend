import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import ModeratorLogin from './components/ModeratorLogin';
import ModeratorPanel from './components/ModeratorPanel';
import ModeratorArticleDetails from './components/ModeratorArticleDetails';
import ApprovalPage from './components/ApprovalPage';
import RatingStars from './components/RatingStars';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
          <Route path='/moderator-login' component={ModeratorLogin}/>
          <Route path='/moderator-panel' component={ModeratorPanel}/>
          <Route path='/moderator-details/:id' component={ModeratorArticleDetails}/>
          <Route path='/approval-page/:id' component={ApprovalPage}/>
          <Route path='/rate-article' component={RatingStars}/>

        </div>
      </Router>
    );
  }
}

export default App;