import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container col-9">
			<div className="container col-12">
			<Jumbotron/>
			</div>
			<div className="container col-12 d-flex">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
