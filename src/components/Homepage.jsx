import React, { useEffect, useState } from "react";
import Header from "./sub_components/Header";
import "../style/home/home.scss";
import SliderPoster from "./sub_components/SliderPoster";
import Search from "./sub_components/Search";
import Intro_dtor from "./sub_components/Intro_dtor";
import Rating_hos from "./sub_components/Rating_hos";
import Problem from "./sub_components/Problem";
import Map_cate from "./sub_components/Map_cate";
import Footer from "./sub_components/Footer";
import Loading from "./sub_components/Loading";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const data = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (e) {
        console.log("error", e);
        setLoading(false);
      }
    };

    data();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="homepage">
          {/* Header */}
          <div className="header">
            <Header />
          </div>
          {/* Header */}

          {/* Contain */}
          <main>
            <div className="silder">
              <SliderPoster />
            </div>
            <div className="filter">
              <Search />
            </div>
            <div className="intro-doctor">
              <Intro_dtor />
            </div>
            <div className="rating">
              <Rating_hos />
            </div>
            <div className="problem_pt">
              <Problem />
            </div>
            <div className="map_cate">
              <Map_cate />
            </div>
          </main>
          {/* Contain */}
          {/* Conclude */}
          <footer className="concluding">
            <Footer />
          </footer>
          {/* Conclude */}
        </div>
      )}
    </>
  );
};

export default Homepage;
