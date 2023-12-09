import React from 'react';
import Header from './sub_components/Header';
import "../style/home/home.scss"
import Slider_poster from './sub_components/Slider_poster';
import Search from './sub_components/Search';
import Intro_dtor from './sub_components/Intro_dtor';
import Rating_hos from './sub_components/Rating_hos';
import Problem from './sub_components/Problem';
import Map_cate from './sub_components/Map_cate';
import Footer from './sub_components/Footer';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header */}
        <div className="header">
            <Header/>
        </div>
      {/* Header */}

      {/* Contain */}
      <main>
        <div className="silder">
          <Slider_poster/>
        </div>
        <div className="filter">
          <Search/>
        </div>
        <div className="intro-doctor">
          <Intro_dtor/>
        </div>
        <div className="rating">
          <Rating_hos/>
        </div>
        <div className="problem_pt">
          <Problem/>
        </div>
        <div className="map_cate">
          <Map_cate/>
        </div>
      </main>
      {/* Contain */}
      {/* Conclude */}
      <footer className='concluding'>
        <Footer/>
      </footer>
      {/* Conclude */}
    </div>
  )
}

export default Homepage;