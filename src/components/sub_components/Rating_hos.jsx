import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style/home/rating_hos.scss";
import img_rate from "../../assets/image/icon_4.png";
import car_hos from "../../assets/image/icon11.png";
import Hospital_data from "./Hospital_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faMap, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import Ambulance_data from "../google_map/Ambulance_data"

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button onClick={onClick} className="custom-arrow left-arrow">
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button onClick={onClick} className="custom-arrow right-arrow">
      <FontAwesomeIcon className="icon" icon={faArrowRight} />
    </button>
  );
};

const Rating_hos = () => {
  // carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1750 },
      items: 4,
    },
    largeDesktop: {
      breakpoint: { max: 1750, min: 1256 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1256, min: 992 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 992, min: 650 },
      items: 2,
    },
    small_mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      <div className="rating-contain">
        <div className="box-left">
          <div className="left-img">
            <img src={img_rate} alt="" />
            <h2>
              Our Top Rate <span>Hospital</span>
            </h2>
          </div>
          <div className="left-des">
            <div className="des">
              dolor sit, amet consectetur adipisicing elit. Asperiores
              praesentium provident excepturi fugiat nihil esse magnam numquam
              dolor distinctio inventore consectetur ipsa, ipsum suscipit ab
              dolores minus perferendis doloribus expedita.
            </div>
            <button className="btn">
              <Link
                style={{
                  textDecoration: "none",
                }}
              >
                View All
              </Link>
            </button>
          </div>
        </div>
        <div className="box-right">
          <Carousel
            responsive={responsive}
            draggable={true}
            infinite={true}
            containerClass="carousel-container"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <Hospital_data />
            <Hospital_data />
            <Hospital_data />
            <Hospital_data />
            <Hospital_data />
            <Hospital_data />
            <Hospital_data />
            <Hospital_data />
          </Carousel>
        </div>
      </div>
      <div className="rating-contain">
        <div className="box-left">
          <div className="left-img">
            <img src={car_hos} alt="" />
            <h2>
              <span>Ambulance</span>
            </h2>
          </div>
          <div className="left-des">
            <div className="des">
              Ambulances are not just vehicles; they represent a critical link
              in the chain of emergency medical services, providing timely and
              specialized care that can make a significant difference in patient
              outcomes. These mobile healthcare units are staffed with
              compassionate professionals who are not only skilled in delivering
              immediate medical aid but are also adept at offering reassurance
              and comfort during times of crisis.
            </div>
            {/* <button className="btn">
                        <Link style={{
                            textDecoration: 'none',
                        }}>View All</Link> 
                    </button> */}
          </div>
        </div>
        <div className="box-right">
          <Carousel
            responsive={responsive}
            draggable={true}
            infinite={true}
            containerClass="carousel-container"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {Ambulance_data.map((index, item) => (
              <div className="view-hospital" key={item.id}>
                <div className="view-img">
                  <img style={{height:"220px"}} src={index.img} alt="" />
                </div>
                <div className="view-detail">
                  <span className="detail-name">{index.type_hos} Hospital</span>
                  <p className="title">
                    <b>{index.name}</b>
                  </p>
                  <span className="detail-made">ID: {index.code}</span><br/>
                  <span className="detail-made">Name Driver: {index.driver}</span><br/>
                  <span className="detail-made">Telphone: {index.phone}</span><br/>
                  <p className="embed">
                    <FontAwesomeIcon color="#FF5851" icon={faMap} /> {
                        index.location
                    }
                  </p>
                  <button className="btn">
                    <Link>View More</Link>
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Rating_hos;
