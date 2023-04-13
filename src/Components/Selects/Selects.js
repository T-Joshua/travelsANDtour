import React from "react";
import "./SelectsStyles.css";

import Picture1 from "../../Asssets/picture1.jpg";
import Picture2 from "../../Asssets/picture2.jpg";
import Picture3 from "../../Asssets/picture3.jpg";
import Picture4 from "../../Asssets/picture4.jpg";
import Picture5 from "../../Asssets/picture5.jpg";
import Picture7 from "../../Asssets/picture7.jpg";

import SelectImg from "../SelectImg/SelectImg";

function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectImg bgImg={Picture1} text="Bora Bora" />
        <SelectImg bgImg={Picture2} text="Emerald Bay" />
        <SelectImg bgImg={Picture3} text="Maldives" />
        <SelectImg bgImg={Picture4} text="Grenada" />
        <SelectImg bgImg={Picture5} text="Barbados" />
        <SelectImg bgImg={Picture7} text="Key West" />
      </div>
    </div>
  );
}

export default Selects;
