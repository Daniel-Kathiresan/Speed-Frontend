import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import SearchBook  from './components/SearchBook';

class App extends Component {
  render() {
    return (
      // 定义了路由规则,为了页面跳转用的
      // 
      // 自定义规则 <Route path='/search-book' component={SearchBook} />
      // path属性是定义url，注意要有'/'，它代表的是根，随便起名'/xxx'
      // component：定义的是组件，在什么位置定义呢？找到src->components文件夹
      //自定义一个.js文件就可以了，文件名就是属性值
      <Router>
        <div>
          
          <Route exact path='/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/search-book' component={SearchBook} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;