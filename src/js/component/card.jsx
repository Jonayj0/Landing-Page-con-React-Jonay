import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {
	return (
  <div className="col-12 col-md-6 col-lg-3 mb-4">
		<div className="card">
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div class="card-footer text-center">
          <a href={props.buttonURL} className="btn btn-primary btn-sm">{props.buttonLabel}</a>
        </div>
    </div>
  </div>
	);
};

Card.propTypes = {
  // PropTypes
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
}


export default Card;


