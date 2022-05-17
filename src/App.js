import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './index.css';
const App = function () {
	return (
		<>
			<div class="topnav">
			<a class="active" href="#home">Home</a>
 		 	<a href="#find">Find Article</a>
 			<a href="#submit">Submit Article</a>
 		 	<a href="#moderator">Moderator Login</a>
			</div>
			<div class="titlediv">
			<h1 class="centertitle">Speed Article Tool</h1>
			</div>
			<div>
			</div>
		</>
	);
};
export default App