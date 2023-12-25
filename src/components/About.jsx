import React, { useEffect, useState } from "react";
import "../style/About/about.scss";
import Header from "./sub_components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import About_choice from "./sub_components/About_choice";
import About_team from "./sub_components/About_team";
import user_img from "../assets/image/profile4.jpg";
import Map_cate from "./sub_components/Map_cate";
import Footer from "./sub_components/Footer";
import axios from "axios";
import Aos from "aos";
const About = () => {
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  const [showmessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!query.trim()) {
        setresult([]);
        setShowMessage(false);
        return;
      }
      const res = await axios.get("https://data-healthcare.onrender.com/illness");
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

  useEffect(() => {
    handleSearch();
  }, [query]);
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div className="about">
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

                {
                  query.trim() && (
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
                  )
                }
                
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
              <button type="submit" className="btn p-3 btn-border  text-light" onClick={handleButtonClick}>
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

        <div className="about-con">
          <div className="head-navigate">
            <ul>
              <li>
                <Link to={"/"} style={{ color: "#55acee" }}>
                  Home{">"}
                </Link>
              </li>
              <li>
                <Link to={"/About"}> About us</Link>
              </li>
            </ul>
          </div>
          <div className="choice">
            <About_choice />
          </div>
          <div className="team">
            <About_team />
          </div>
        </div>
        <div className="feedback">
          <div className="con-feedback">
            <div className="heart-beat">
              <span>
                <FontAwesomeIcon
                  className="size"
                  color="#FF5851"
                  icon={faHeart}
                />
              </span>
            </div>
            <div className="user">
              <h2 className="title">
                Sweet Feedback <br/><span>From Our User</span>
              </h2>
              <div className="pro-user">
                <span className="border">
                  <img src={user_img} alt="" />
                </span>
                <span className="border">
                  <img src={user_img} alt="" />
                </span>
                <span className="border">
                  <img src={user_img} alt="" />
                </span>
              </div>
              <p className="des"
              data-aos="zoom-in">
                <i>
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem ad, blanditiis quia error consectetur distinctio
                ullam mollitia. Accusamus delectus perspiciatis at, ut odio
                facilis aperiam! Atque illum voluptatibus dolor fugit! "</i>
              </p>
              <span className="role">User</span>
              <h5 className="name">Thorn Nek</h5>
            </div>
          </div>
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

export default About;
