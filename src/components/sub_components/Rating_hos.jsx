import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style/home/rating_hos.scss";
import img_rate from "../../assets/image/icon_4.png";
import car_hos from "../../assets/image/icon11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faMap, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Loading from "../sub_components/Loading"

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
  const [hospital, setHospital] = useState([]);
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);
  const [loading, setLoading] = useState(true);

  const [ambulance, setAmbulance] = useState([]);

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
  // top hospital

  useEffect(() => {
    const getHospital = async () => {
      try {
        const res = await axios.get(
          "https://data-healthcare.onrender.com/hospital"
        );
        setHospital(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHospital();
  }, []);
  useEffect(() => {
    const getAmbulance = async () => {
      try {
        const res = await axios.get(
          "https://data-healthcare.onrender.com/ambulance"
        );
        setAmbulance(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAmbulance();
  }, []);

  return (
    <section>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="rating-contain">
            <div className="box-left">
              <div className="left-img">
                <img src={img_rate} alt="" />
                <h2>
                  Our Top Rate <span>Hospital</span>
                </h2>
              </div>
              <div className="left-des">
                <div className="des" style={{fontStyle:"italic"}}>
                At Our Hospital, your health is our priority, and we are honored to be a part of your healthcare journey. Trust us to provide not just medical expertise, but also compassion, respect, and the highest standards of care. Discover the difference at Our Hospital, where your well-being is our mission.
                </div>
                <button className="btn">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to={"/Public Hospital"}
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
                {hospital.map((item, index) => (
                  <div className="view-hospital" key={index}>
                    <div className="view-img">
                      <img src={item.logo} alt="" />
                      <span className="icon">
                        <FontAwesomeIcon icon={faPersonRifle} />
                      </span>
                    </div>
                    <div className="view-detail">
                      <span className="detail-name ">
                        {item.hospital_type[0].lable}
                      </span>
                      <p className="title">
                        <b>{item.name_host}</b>
                      </p>
                      <span className="detail-made">Build in: {item.year}</span>

                      <div className="star">
                        <Box
                          sx={{
                            width: 300,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            name="hover-feedback"
                            value={item.rate}
                            precision={0.5}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          {value !== null && (
                            <Typography ml={2} variant="body1">
                              {item.rate} Feedback
                            </Typography>
                          )}
                        </Box>
                      </div>
                      <p className="embed">
                        <FontAwesomeIcon color="#FF5851" icon={faMap} />{" "}
                        {item.location[0].locate}
                      </p>
                      <button className="btn">
                        <Link to={`/detail/hospital/${item.id}`}>
                          View More
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
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
                <div className="des" style={{fontStyle:"italic"}}>
                  Ambulances are not just vehicles; they represent a critical
                  link in the chain of emergency medical services, providing
                  timely and specialized care that can make a significant
                  difference in patient outcomes. These mobile healthcare units
                  are staffed with compassionate professionals who are not only
                  skilled in delivering immediate medical aid but are also adept
                  at offering reassurance and comfort during times of crisis.
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
                {ambulance.map((index, item) => (
                  <div className="view-hospital" key={item.id}>
                    <div className="view-img">
                      <img style={{ height: "220px" }} src={index.img} alt="" />
                    </div>
                    <div className="view-detail">
                      <span className="detail-name">
                        {index.type_hos} Hospital
                      </span>
                      <p className="title">
                        <b>{index.name}</b>
                      </p>
                      <span className="detail-made">ID: {index.code}</span>
                      <br />
                      <span className="detail-made">
                        Name Driver: {index.driver}
                      </span>
                      <br />
                      <span className="detail-made">
                        Telphone: {index.phone}
                      </span>
                      <br />
                      <p className="embed">
                        <FontAwesomeIcon color="#FF5851" icon={faMap} />{" "}
                        {index.location}
                      </p>
                      {/* <button className="btn">
                        <Link>Call Now!</Link>
                      </button> */}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Rating_hos;
