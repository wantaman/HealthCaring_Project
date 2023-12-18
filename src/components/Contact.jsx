import React, { useEffect, useState } from "react";
import Header from "./sub_components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faMap, faPerson, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../style/Contact/contact.scss"
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Map_cate from "./sub_components/Map_cate";
import Footer from "./sub_components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import axios from "axios";



const Contact = () => {
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
      const res = await axios.get("http://localhost:5000/illness");
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
  useEffect(()=>{
    handleSearch();
    Aos.init();
  },[query])
  return (
    <div className="contact">
      {/* Header */}
      <div className="header">
        <Header />
      </div>

      {/* main */}
      <main>
        {/*  Search */}
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
              <span><FontAwesomeIcon icon={faBarChart} /></span>
              <p>Advance Search</p>
            </div>
          </div>
        </div>

        <div className="contact_us">
          <div className="head-navigate">
            <ul>
              <li><Link to={"/"} style={{color:"#55acee"}}>Home {">"}</Link></li>
              <li><Link to={"/Contact Us"}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="con1">
            <div className="con1-center">
              <div className="center-left"
              data-aos="zoom-in-up">
                <p className="title-left">
                  Alway Get In To Touch<br/> <span>Our Contact Detail</span>
                </p>
                <p className="des-left">
                We hope this message finds you well. HealthCaring System, we value your feedback and inquiries, and we strive to provide excellent customer service. We understand the importance of keeping you informed about the status of your recent contact with us.
                </p>
                <div className="relate_us">
                  <span><FontAwesomeIcon style={{color:"#FF5851"}} icon={faMap}/> Phnom Penh, Cambodia</span>
                  <span><FontAwesomeIcon style={{color:"#FF5851"}}  icon={faPerson}/> <a href="javascript:void(0)" >KertEy@gmail.com</a></span>
                  <span><FontAwesomeIcon style={{color:"#FF5851"}} icon={faPhone}/> +855 90033442</span>
                </div>
              </div>

              <div className="center-right"
              data-aos="zoom-in-up">
                <form action="">
                  <label for="" className="title"><h4>Say "Hello" To Us</h4></label>
                  <div className="form-input">
                    <input type="text" className="form-control" placeholder="Username"/>
                  </div>
                  <div className="form-input">
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="form-input">
                    <input type="password" min={0} className="form-control" placeholder="Password"/>
                  </div>
                  <button className="button">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
        <div className="con2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250174.09030994552!2d104.89364479999998!3d11.553996800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1702058115239!5m2!1sen!2skh" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Contact;
