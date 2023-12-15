import React, { useEffect, useState } from "react";
import "../style/Doctor/doctor.scss";
import Header from "./sub_components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Map_cate from "./sub_components/Map_cate";
import Footer from "./sub_components/Footer";


  //random stars
  const randomstars = ()=>{
    return Math.floor(Math.random() * 10) /2
  }
const Doctor = () => {
  const [data, setdata] = useState([]);
  const [value, setValue] = useState(randomstars());
  const [hover, setHover] = useState(-1);

  

  useEffect(() => {
    
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:3001/hospital");
        setdata(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
    setValue(randomstars());
  }, []);

  return (
    <div className="doctor">
      {/* Header */}
      <div className="header">
        <Header />
      </div>
      <main>
        <div className="search">
          <div className="sch-box">
            <div className="box-bottom">
              <div className="search-input">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Search.."
                />
              </div>
              <div className="search-input">
                <select
                  className="form-select form-select p-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Calemette</option>
                  <option value="1">Soviet</option>
                  <option value="2">Royal Phnom Penh Hospital</option>
                  <option value="3">Jurie</option>
                </select>
              </div>
              <button type="submit" className="btn p-3 btn-border  text-light">
                Search
              </button>
            </div>
            <div className="box-top">
              <span>
                <FontAwesomeIcon icon={faBarChart} />
              </span>
              <p>Advance Search</p>
            </div>
          </div>
        </div>
        <div className="doctor-con">
          <div className="head-navigate">
            <ul>
              <li>
                <Link to={"/"} style={{ color: "#55acee" }}>
                  Home{">"}
                </Link>
              </li>
              <li>
                <Link to={"/Exper_Doctor"}>Search Doctor</Link>
              </li>
            </ul>
          </div>
          {data.map((index) => (
            <div className="con-profile" key={index.id}>
              <div className="profile-img">
                <img src={index.hospital_type[0].detail[0].img} alt="" />
                <span className="icon">
                  <FontAwesomeIcon icon={faPersonRifle} />
                </span>
              </div>
              <div className="profile-detail">
                <span className="department">
                  Work in {index.hospital_type[0].lable}
                </span>
                <h3 className="title">{index.hospital_type[0].detail[0].doctor_name}</h3>
                <span className="position">
                  <b>Position:</b> {index.hospital_type[0].detail[0].illness_control}
                </span>
                <br />
                <span className="email">
                  <a className="a" href="javascript:void(0);">
                    <b>Email: </b> {index.hospital_type[0].detail[0].email}
                  </a>
                </span>
                <br />
                <span className="tel">
                  <b>Telphone:</b> {index.hospital_type[0].detail[0].phone}
                </span>
                <br />
                <span className="exp">
                  <b>Experience:</b> {index.hospital_type[0].detail[0].year_of_work}
                </span>
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
                      value={value}
                      precision={1}
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
                        {value} Feedback
                      </Typography>
                    )}
                  </Box>
                </div>
                <p className="des">
                  "{index.hospital_type[0].detail[0].des_doc}"
                </p>
                '
                <div className="btn">
                  <button className="button">Add Feedback</button>
                  <button className="button">Contact Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="map_cate ">
          <Map_cate/>
        </div>
      </main>
      <footer className='concluding'>
        <Footer/>
      </footer>
    </div>
  );
};

export default Doctor;
