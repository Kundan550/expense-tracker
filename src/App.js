import Login from "./components/Login";
import React from "react";
import Main from "./Main";
import {BrowserRouter,Routes,Route} from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
		<Routes>
		  <Route exact path="/" element={<Login/>}/>
		  <Route exact path="/main" element={<Main/>}/>
		</Routes>
		</BrowserRouter>
	);
};

export default App;
