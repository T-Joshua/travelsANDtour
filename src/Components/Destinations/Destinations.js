import React from "react";
import "./DestinationsStyles.css";

import Picture1 from "../../Asssets/picture1.jpg";
import Picture2 from "../../Asssets/picture2.jpg";
import Picture3 from "../../Asssets/picture3.jpg";
import Picture4 from "../../Asssets/picture4.jpg";
import Picture5 from "../../Asssets/picture5.jpg";

function Destinations() {
  return (
    <div name="destination" className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
      </div>
      <div className="img-container">
        <img className="span-3 img-grid-row-2" src={Picture1} alt="/" />
        <img src={Picture2} alt="/" />
        <img src={Picture3} alt="/" />
        <img src={Picture4} alt="/" />
        <img src={Picture5} alt="/" />
      </div>
    </div>
  );
}

export default Destinations;
