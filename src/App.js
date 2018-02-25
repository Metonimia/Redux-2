import React from "react";
import "./App.css";

const App = () => {
	return <div className="App">Tu będzie lista komentarzy </div>;
};
store.dispatch(addComment("pierwszy komentarz"));

export default App;
