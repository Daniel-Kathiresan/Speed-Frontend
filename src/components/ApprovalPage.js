import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AnalystForm = (props) => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState([]);
    const [article, setArticle] = useState([]);

    axios.get("https://thawing-thicket-05050.herokuapp.com/api/books/")
    .then((res) =>{
        setResult(res.data);
    })
    .catch(()=>{
      alert('error retrieving data');
    });

const optionItems = result.map((article) =>
    <option key={article._id}>{article._id}</option>
    );

const [selectValue, setValue] = useState("")

const handleSelect = (e) => {
  setValue(e.target.value);
  findArticle(e.target.value);
}

const findArticle = (id) => {
    axios.get(`https://thawing-thicket-05050.herokuapp.com/api/books/${id}`)
    .then((res) =>{
        setArticle(JSON.stringify(res.data));
    })
    .catch(()=>{
       setArticle([]);
    });
  }

  const onSubmit = (data) => {
    props.onSubmit(data);;
};

    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("id")} value={selectValue} onChange={handleSelect}>
            <option value="article">Select Article</option>
            {optionItems}
        </select>
        <p>{article}</p>
        <select {...register("claim")}>
            <option value="">Select Claim</option>
            <option value="Code Quality Improvement">Code Quality Improvement</option>
            <option value="Product Quality Improvement">Product Quality Improvement</option>
            <option value="Team Satisfaction Improvement">Team Satisfaction Improvement</option>
        </select>
        <p/>
        <select {...register("evidence")}>
            <option value="">Select Evidence Level</option>
            <option value="Weak support">Weak support</option>
            <option value="Strong support">Strong support</option>
        </select>
        <p/>
      <input type="submit" />
    </form>
  );
}
export default AnalystForm;