import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook.js';
import ShowBookList from './components/ShowBookList.js';
import ShowBookDetails from './components/ShowBookDetails.js';
import UpdateBookInfo from './components/UpdateBookInfo.js';
import SubmissionForm from './components/SubmissionForm.js';
import SEPractices from './pages/SE-Practice.js';
import ModerateArticle from './pages/Moderate-Article.js';
import AnalyseArticle from "./pages/Analyse-Article.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>SEPER</h1>
          <h5>Software Engineering Practice Evidence Repository </h5>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
                <li><NavLink to = "/ModerateArticle">Moderate an Article</NavLink></li>
                <li><NavLink to = "/AnalyseArticle">Extract an Article</NavLink></li>
            </ul>
        <div>
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
          <Route path='/submission-form/:id' component={SubmissionForm} />
          <Route path='/search-article/:id' component={SEPractices} />
          <Route  path="/ModerateArticle" component={ModerateArticle}/>
          <Route  path="/AnalyseArticle" component={AnalyseArticle}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;