import React, {useState, useEffect} from 'react'
import axios from 'axios';
const App = function () {
	return (
		<>
			<h1>Speed Project</h1>

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Example Field (Username)"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Example Field (email)"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App