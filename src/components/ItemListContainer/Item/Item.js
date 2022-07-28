import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div>
      <Link to={`/detalle/${info.id}`} className="bankOfImages">
        <img src={info.url} alt="item" />
        <p>{info.title}</p>
      </Link>
      <p>{info.desc}</p>
      <p>${info.price}</p>
    </div>
  );
};

export default Item;
