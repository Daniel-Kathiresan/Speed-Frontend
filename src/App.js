import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './index.css';
const App = function () {
	return (
		<>
			<h1 class="centertitle">Speed Project</h1>
			<div>
			<button class="customButton" href="FindArticle.js">Find Article</button>
			<button class="customButton"><a href="SubmitArticle.js">Submit Article</a></button>
			<button class="customButton">Moderator Login</button>
			</div>
		</>
	);
};
export default App