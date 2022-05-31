import AnalystForm from '../components/AnalystForm.js';
import React from 'react';
import axios from 'axios';

class AnalyseArticle extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
           article: []
        }
     
        this.extractArticle = this.extractArticle.bind(this);
      }
    
      extractArticle (data) {
        axios
        .get(`https://thawing-thicket-05050.herokuapp.com/api/books/${data.id}`)
        .then((res) =>{
          this.setState({article: res.data});
        })
        .catch(()=>{
          alert('error finding data');
        });

        let extract = {claim: data.claim, evidence: data.evidence};

        axios.put(`https://thawing-thicket-05050.herokuapp.com/api/books/${data.id}`, extract)
        .catch(err => {
            console.log("Error extracting article");
          })
        
    }
    render() {
        return (
        <div>
         <h2>Extract Text</h2>
            <p>This will be a form to allow analysts to extract article text for our SEPER repo.</p>
            <AnalystForm onSubmit={this.extractArticle}/>
        </div>
        );
    }
}

export default AnalyseArticle;