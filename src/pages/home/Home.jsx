import React from "react";
import hero from "../../assets/hero-right.svg";
import "./Home.css";
import { IoSearchSharp } from "react-icons/io5";
import { BANNER } from "../../static";
import Card from "../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import brat1 from "../../assets/brat-1.png";
import brat2 from "../../assets/brat-2.png";
import rating from "../../assets/rating.svg";
import newsletter from "../../assets/finished.svg";

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
      <section className="about">
        <div className="container">
          <div className="products-top">
            <h3>Here are our some of the best clients.</h3>
            <h1>What People Say About Us</h1>
          </div>
          <div className="about-bottom">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat1} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hamza Faizi</h3>
                    <p>
                      Don’t waste time, just order! This is the best website to
                      puschase smart watches.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat2} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hafiz Huzaifa</h3>
                    <p>
                      I’ve been purchasing smart watches of Mohid for a long
                      time. All the products are good quality.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat1} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hamza Faizi</h3>
                    <p>
                      Don’t waste time, just order! This is the best website to
                      puschase smart watches.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat2} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hafiz Huzaifa</h3>
                    <p>
                      I’ve been purchasing smart watches of Mohid for a long
                      time. All the products are good quality.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat1} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hamza Faizi</h3>
                    <p>
                      Don’t waste time, just order! This is the best website to
                      puschase smart watches.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat2} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hafiz Huzaifa</h3>
                    <p>
                      I’ve been purchasing smart watches of Mohid for a long
                      time. All the products are good quality.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat1} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hamza Faizi</h3>
                    <p>
                      Don’t waste time, just order! This is the best website to
                      puschase smart watches.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="about-swiper">
                  <div className="swiper-image">
                    <img src={brat2} alt="" />
                  </div>
                  <div className="swiper-info">
                    <h3>Hafiz Huzaifa</h3>
                    <p>
                      I’ve been purchasing smart watches of Mohid for a long
                      time. All the products are good quality.
                    </p>
                    <img src={rating} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-all">
            <div className="newsletter-left">
              <h1>Subscribe To Newsletter</h1>
              <p>Get free guide about smart watches daily. </p>
              <div className="newsletter-input">
                <input type="email" placeholder="Enter Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="newsletter-right">
              <img src={newsletter} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
