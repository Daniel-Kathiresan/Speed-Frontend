import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ModerationForm = (props) => {
    const { handleSubmit, register } = useForm();
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
        <p><input {...register("quality")} type="checkbox" />Good Quality</p>
        <p><input {...register("relevant")} type="checkbox" />Relevant to SE Practices</p>
        <p><input {...register("duplicate")} type="checkbox"/>No Duplicates</p>
        <select {...register("status")}>
            <option value="">Select Status</option>
            <option value="accept">Accept</option>
            <option value="decline">Decline</option>
        </select>
        <p/>
        <input type="submit" />
    </form>
    ); 
};

export default ModerationForm;