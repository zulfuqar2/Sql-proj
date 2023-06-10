import React, { useState } from "react";
import "./Advanced.css";

function Advanced() {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="box">
        <p className="filter" onClick={handleFilterClick}>
          Advanced filter ^ 
        </p>
        {showFilter && (
          <>
            <div className="selected">
                <p>Country</p>
              <select name="Country" id="">
                <option value="">Canada</option>
                <option value="">USA</option>
                <option value="">Costa Rica</option>
                <option value="">Chinese</option>
                <option value="">Portugase</option>
                <option value="">Egyp</option>
                <option value=""> the Weimar Republic</option>
                <option value="">Gana</option>
              </select>
              <p> Metal</p>
              <select name="" id="">
                <option value="">Gold</option>
                <option value="">Silver</option>
                <option value="">Bronze</option>
                <option value="">Paper</option>
              </select>
             <p> Quality of the coin</p>
              <select name="" id="">
                <option value="">Proof</option>
                <option value="">New</option>
              </select>
            </div>
            <div className="input">
                <p>Price</p>
              <input type="number" placeholder="Price" className="price" />
                <p>Years</p>
              <input type="number" placeholder="year" className="year" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Advanced;
