import React, { useEffect, useState } from "react";
import "../style/Doctor/doctor.scss";
import Header from "./sub_components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Map_cate from "./sub_components/Map_cate";
import Footer from "./sub_components/Footer";
import Loading from "./sub_components/Loading";
import Aos from "aos";

//random stars
const randomstars = () => {
  return Math.floor(Math.random() * 10) / 2;
};
const Doctor = () => {
  const [data, setdata] = useState([]);
  const [value, setValue] = useState(randomstars());
  const [hover, setHover] = useState(-1);
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setperPage] = useState(5);
  const [select, setSelect] = useState(null);
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  const [showmessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const lastPostIndex = currentPage * perPage;
  const firstPost = lastPostIndex - perPage;
  const currenPost = data.slice(firstPost, lastPostIndex);
  let page = [];

  const handleSearch = async () => {
    try {
      if (!query.trim()) {
        setresult([]);
        setShowMessage(false);
        return;
      }
      const res = await axios.get(
        "https://data-healthcare.onrender.com/illness"
      );
      const filterSearch = res.data.filter((con) =>
        con.name.toLowerCase().includes(query.toLowerCase())
      ); // make all capital letter to lower

      setresult(filterSearch);
      setShowMessage(filterSearch.length === 0);
    } catch (e) {
      console.error("Failed Connection", e);
    }
  };

  // when user clicks on button
  const handleButtonClick = () => {
    handleSearch();
  };

  // handle on link click
  const handleItemClick = (id) => {
    navigate(`/Single_illness/${id}`);
  };

  for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
    page.push(i);
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "https://data-healthcare.onrender.com/hospital"
        );
        setdata(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
    setValue(randomstars());
    handleSearch();
    Aos.init();
  }, [query]);

  const handleClick = (index) => {
    setcurrentPage(index + 1);
    setSelect(index);
  };

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
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
                      value={query}
                      onChange={(e) => setquery(e.target.value)}
                    />
                    {query.trim() && (
                      <div className="dropdown_search ">
                        {showmessage ? (
                          <p className=" p-2 ">Can not found!</p>
                        ) : (
                          <ul className="search_list">
                            {result.map((Item) => (
                              <li
                                key={Item.id}
                                onClick={() => handleItemClick(Item.id)}
                                className="list"
                              >
                                <Link to={`/Single_illness/${Item.id}`}>
                                  {Item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
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
                  <button
                    type="submit"
                    className="btn p-3 btn-border  text-light"
                    onClick={handleButtonClick}
                  >
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
              {currenPost.map((index) => (
                <div data-aos="zoom-in-up" className="con-profile" key={index.id}>
                  <div className="profile-img">
                    <img src={index.hospital_type[0].detail[0].img} alt="" />
                    <span className="icon">
                      <FontAwesomeIcon icon={faPersonRifle} />
                    </span>
                  </div>
                  <div className="profile-detail">
                    <span className="department">
                      Hospital {index.hospital_type[0].lable}
                    </span>
                    <h3 className="title">
                      {index.hospital_type[0].detail[0].doctor_name}
                    </h3>
                    <span className="position">
                      <b>Position:</b>{" "}
                      {index.hospital_type[0].detail[0].illness_control}
                    </span>
                    <br />
                    <span className="email">
                      <a className="text-primary" href="javascript:void(0);">
                        <b style={{ color: "#00000098" }}>Email: </b>{" "}
                        {index.hospital_type[0].detail[0].email}
                      </a>
                    </span>
                    <br />
                    <span className="tel">
                      <b>Telphone:</b> {index.hospital_type[0].detail[0].phone}
                    </span>
                    <br />
                    <span className="exp">
                      <b>Experience:</b>{" "}
                      {index.hospital_type[0].detail[0].year_of_work}
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
                    <div className="btns">
                      <button className="button">Add Feedback</button>
                      <button className="button">Contact Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination ">
              {page.map((page, index) => (
                <button
                  className={`pagination-btn ${
                    select === index ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  {page}
                </button>
              ))}
            </div>
            <div className="map_cate ">
              <Map_cate />
            </div>
          </main>
          <footer className="concluding">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Doctor;
