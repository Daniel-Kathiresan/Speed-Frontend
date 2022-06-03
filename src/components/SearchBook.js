import React, { Component } from 'react';
import '../App.css';
//import axios from 'axios';
// import ArticleCard from './ArticleCard';

//组件：class
class SearchBook extends Component {
    //构造器
    constructor() {
        super();
        //将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI
        this.state = {
            //为了后续数据显示准备
            articles: [],
            title: '',
        };
    }
    // 为了跟后台交互的用的自定义的方法，axios
    //connect to the backend
    Search(Searchinput) {
        let postdate = {
            "title": Searchinput
        }
        alert(document.getElementById('myTitle').value);
        axios
            .post('http://localhost:5000/api/articles/search_article', postdate)
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
            .catch(err => {
                console.log('Error from ShowArticlesList');
            })
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    Search1 = e => {
        e.preventDefault();
        alert(this.state.title);
    }
    Search2(){
        alert(document.getElementById('myTitle').value);
    }
    Search3(){
        
    }


    render() {

        //为了后续做数据交互用的
        /*const articles = this.state.articles;
        console.log("PrintBook: " + articles);
        let articleList;

        if (articles) {
            articleList = "there is no articles record!";
        } else {
            // articleList = articles.map((article, k) =>
            //     <ArticleCard article={article} key={k} />
            // );
        }*/


        // return(返回值就是页面呈现的效果，)
        //    注意此处的href属性
        return (
            <div className="SearchBook">
                <div className="topnav">
                    <a href="/">Home Page</a>
                    <a href="/create-book">Add Article</a>                                      
                    <a className="active" href="/search-book">Search Article</a>
                    <a href="#about">About</a>
                    <div className="topnav-right">
                        <a href="#about" >Moderator Access</a>
                    </div>
                </div>
                <br /><br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Search Article</h1>
                            <p className="lead text-center">
                                Search Article
                            </p>
                            <form noValidate onSubmit={this.Search}>
                                <div className='form-group'>
                                    <input
                                        id='myTitle'
                                        type='text'
                                        placeholder='Title of the Article'
                                        name='title'
                                        className='form-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />
                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                    value="Search Article"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SearchBook;