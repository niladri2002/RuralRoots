import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
const MEDIA_URL="http://127.0.0.1:8000";

const Product = ({ id, name, image, price }) => {
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={`${MEDIA_URL}${image}`} alt={name} />
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
export default Product;