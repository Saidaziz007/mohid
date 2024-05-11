import axios from "axios";
import React, { useEffect, useState } from "react";
import rating from "../../assets/rating.svg";
import "./Card.css";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const API_URL = "https://dummyjson.com/products";
const Card = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6);

  useEffect(() => {
    axios
      .get(`${API_URL}?limit=${count}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [count]);
  return (
    <>
      <div className="products-wrapper">
        {data?.map((el) => (
          <div key={el.id} className="card">
            <div className="card-img">
              <img src={el.images[0]} alt="" />
              <div className="card-hover">
                <MdShoppingCart className="card-cart" />
                <FaHeart className="card-heart" />
              </div>
            </div>
            <div className="card-info">
              <h1>{el.title}</h1>
              <img src={rating} alt="" />
              <div className="card-price">
                <h4>${el.price * 2}</h4>
                <h3>${el.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        disabled={count === 20}
        onClick={() => setCount((p) => p + 3)}
        className="card-btn"
      >
        View More
      </button>
    </>
  );
};

export default Card;
