import React from 'react';
import ModerationForm from '../components/ModerationForm.js';
import axios from 'axios';

class ModerateArticle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       article: []
    }
 
    this.updateArticle = this.updateArticle.bind(this);
  }

  updateArticle (data) {
    axios
    .get(`https://thawing-thicket-05050.herokuapp.com/api/books/${data.id}`)
    .then((res) =>{
      this.setState({article: res.data});
    })
    .catch(()=>{
      alert('error finding data');
    });
    
    if (data.status === "decline") {
      axios
      .delete(`https://thawing-thicket-05050.herokuapp.com/api/books/${data.id}`)
      .catch(err => {
        console.log("Error deleting article");
      })
    } 
  }

  // render(){
  //   return (
  //   <div>
  //     <h2>Moderate Article</h2>
  //         <p>This will be a form to allow moderators to accept or reject a submission.</p>
  //           <ModerationForm onSubmit={this.updateArticle}/>
  //   </div>
  //   );
  // }
};

export default ModerateArticle;