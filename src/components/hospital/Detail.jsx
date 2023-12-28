import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Aos from "aos";
import Header from "../sub_components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarChart,
  faCalendar,
  faEye,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../../style/Hospital/detail.scss";
import Loading from "../sub_components/Loading";
import Map_cate from "../sub_components/Map_cate";
import Footer from "../sub_components/Footer";

const Detail = () => {
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  const [showmessage, setShowMessage] = useState(false);
  const [resultHos, setRelateHos] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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

  useEffect(() => {
    const hosData = async () => {
      try {
        const item = await axios.get(
          `https://data-healthcare.onrender.com/hospital/${id}`
        );
        setRelateHos(item.data);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
    hosData();
    Aos.init();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="detail">
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

            <div className="detail-con">
              <div className="head-navigate">
                <ul>
                  <li>
                    <Link to={"/"} style={{ color: "#55acee" }}>
                      Home{" > "}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}> Detail {"> "}</Link>
                  </li>
                  <li>
                    <Link to={"/detail/hospital"}>Single Informtation</Link>
                  </li>
                </ul>
              </div>

              <div className="illness_info">
                <h1 className="title">{resultHos.name_hos}</h1>
                <small>@Choosen with best one!..</small>
                <div className="view">
                  <span>
                    <FontAwesomeIcon icon={faCalendar} /> December, 22,2023{" "}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faEye} /> 24,555
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faShareAlt} /> 2K
                  </span>
                </div>
                <p className="static_illness">
                  <span>
                    <b style={{color:"#FF5851"}}>
                      <i>Symtoms:</i>
                    </b>{" "}
                    {resultHos.hospital_type[0].illness_name}
                  </span>
                  <br />
                  <span>
                    <b style={{color:"#FF5851"}}>
                      <i>Rating:</i>
                    </b>{" "}
                    {resultHos.rate} <FontAwesomeIcon color="orange" icon={faStar} />
                  </span>
                </p>
                <div className="des">
                  <h2 className="fw-bold">Professional Doctor</h2>
                  <div className="des-con mt-4">
                    <div className="right">
                      <img src={resultHos.hospital_type[0].detail[0].img} alt="" />
                    </div>
                    <div className="left">
                      <h3 className="name">{resultHos.hospital_type[0].detail[0].doctor_name}</h3>
                      <p className="line">
                        <b style={{color:"#FF5851"}}>Experince: </b> {resultHos.hospital_type[0].detail[0].exper} years
                      </p>
                      <p className="line">
                        <b style={{color:"#FF5851"}}>Controll: </b> {resultHos.hospital_type[0].detail[0].des_doc}
                      </p>
                      <p className="line">
                        <b style={{color:"#FF5851"}}>Year of Work: </b> {resultHos.hospital_type[0].detail[0].year_of_work}
                      </p>
                      <p className="line"><b style={{color:"#FF5851"}}>Contact: </b> {resultHos.hospital_type[0].detail[0].phone}</p>
                      <p className="line"><code>{resultHos.hospital_type[0].detail[0].email}</code></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="map">
            <iframe
              src={resultHos.location[0].embed}
              style={{ width: "100%", height: "800px", border: "none" }}
              frameBorder="0"
              allowfullscreen=""
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map_cate ">
            <Map_cate/>
          </div>
          </main>
          <footer className='concluding'>
            <Footer/>
          </footer>
        </div>
      )}
    </>
  );
};

export default Detail;
