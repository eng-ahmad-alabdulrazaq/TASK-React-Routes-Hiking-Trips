//\\ بسم الله الرحمن الرحيم //\\

// In TripItem.js import <Link> again and wrap your whole div with
// it so it takes you to tripDetail component.

// in app.js details route /details, add a route param called tripId.

// Back to TripItem.js change the link to the tripDetail page to
// include the tripId.
// In TripDetail.js import useParams from react-router-dom.
// Extract the tripId coming from the url and store it in a variable
// called tripId.
// Find the correct trip from the trips data file.
// Import Navigate from react-router-dom and if the trip isn't found
// redirect the user to the home page.
// Switch from using ids to using slugs.
import React from "react";
import { Link } from "react-router-dom";
import tripsData from "../tripsData";
function TripItem({ trip }) {
  //here
  //here
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <Link to={`/tripdetail/${trip.id}`}>
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target="#portfolioModal1"
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={trip.img} alt="..." />
        </div>
      </Link>
    </div>
  );
}

export default TripItem;
