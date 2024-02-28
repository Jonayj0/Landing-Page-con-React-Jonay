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
		<div className="container-fluid col-12">
			<div>
			<Jumbotron/>
			</div>
			<div className="container-fluid d-flex">
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
