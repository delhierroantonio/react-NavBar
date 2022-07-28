import React, { useState, useEffect } from "react";
import cartLogo from "../../logos/cartLogo.png";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const bankOfImages = [
  {
    id: 1,
    url: "https://m.media-amazon.com/images/I/91LSF1iZUFL._AC_SY355_.jpg",
    title: "pc1",
    desc: "descripcion generica 1",
    price: 500,
    category: "gaming",
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGH-wMM_LrLFYUTuz2oesbfYfpRzg5iixG5xPHwdfL5fa99Pw6ac2M1pIUPvA-n_xrzbw&usqp=CAU",
    title: "pc2",
    desc: "descripcion generica 2",
    price: 800,
    category: "gaming",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIW1YHSclmHhnMU5-uD653NSr2PbOmsRPHj63P47O9PJ24HWsPLFd9-ZX_sXbk02lC8Y&usqp=CAU",
    title: "pc3",
    desc: "descripcion generica 3",
    price: 1200,
    category: "productivity",
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJS0n3mGJdWkyMEi65ELDf-TWUk0HsumXRxA&usqp=CAU",
    title: "pc3",
    desc: "descripcion generica 4",
    price: 1600,
    category: "gaming",
  },
  {
    id: 5,
    url: "https://gaming.comoescoger.com/img/gaming-984947c5f18ef08be05999ad51fb1e16-Gaming-PC.png",
    title: "pc3",
    desc: "descripcion generica 5",
    price: 1200,
    category: "gaming",
  },
];

export const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(bankOfImages);
      }, 1500);
    });
    if (idCategory) {
      getData.then((res) =>
        setData(
          res.filter((bankOfImages) => bankOfImages.category === idCategory)
        )
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [idCategory]);
  const onAdd = (cantidad) => {
    console.log(`la cantidad a comprar sera: ${cantidad}`);
  };
  return (
    <div>
      <img src={cartLogo} alt="cart button" />
      <h1>{props.greetings}</h1>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
