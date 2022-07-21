import React from "react";

const Item = ({info}) => {
    return (
        <div>
            <a href="" className="bankOfImages">
                <img src={info.url} alt="item" />
                <p>{info.title}</p>
            </a>
                <p>{info.desc}</p>
                <p>${info.price}</p>
        </div>
    );
};

export default Item;