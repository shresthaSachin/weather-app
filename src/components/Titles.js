import React from "react";

/*
class Titles extends React.Component {
	render(){
		return(
			<div>
			<h1>Weather Finder</h1>
			<p>Find out temperatures, condition and more...</p>

			 </div>
			);
	}
};
*/
//changing to stateless(repalcing class with function)
const Titles = () => (
			<div>
			<h1 className="title-container__title">Weather Finder</h1>
			<h3 className="title-container__subtitle">Find out temperatures, conditions and more...</h3>
			 </div>
			);


export default Titles;