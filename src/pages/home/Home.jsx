import React from "react";
import hero from "../../assets/hero-right.svg";
import "./Home.css";
import { IoSearchSharp } from "react-icons/io5";
import { BANNER } from "../../static";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-all">
            <div className="hero-left">
              <h1>Discover Most Suitable Watches</h1>
              <p>
                Find the best, reliable, and cheap smart watches here. We focus
                on product quality. Here you can find smart watches of almost
                all brands. So why you are waiting? Just order now!
              </p>
              <div className="hero-left-input">
                <input type="text" placeholder="Find the best brands" />
                <button>Search</button>
                <IoSearchSharp />
              </div>
            </div>
            <div className="hero-right">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="container">
          <div className="banner-wrapper">
            {BANNER?.map((el) => (
              <div key={el.id} className="banner-card">
                <div className="banner-img">
                  <img src={el.img} alt="" />
                </div>
                <div className="banner-info">
                  <h1>{el.title}</h1>
                  <p>{el.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="products-top">
            <h3>Find your favourite smart watch.</h3>
            <h1>Our Latest Products</h1>
          </div>
          <div className="products-bottom">
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
