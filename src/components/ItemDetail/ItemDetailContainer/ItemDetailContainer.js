import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const image = {
  id: 1,
  url: "https://i.ytimg.com/vi/vyirRAuCPH0/maxresdefault.jpg",
  title: "windows 11 PC",
  price: 2500,
  descr: "PC de ultima generacion con windows 11 preinstalado!",
};

const bankOfImages2 = [
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

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { idDetalle } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(image);
      }, 1000);
    });

    getData.then((res) =>
      setData(
        res.find((bankOfImages2) => bankOfImages2.id === parseInt(idDetalle))
      )
    );
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
