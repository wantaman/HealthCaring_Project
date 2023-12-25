import React, { useEffect, useState } from "react";
import "../../style/home/search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import {
  faArrowCircleRight,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";
import contact from "../../assets/image/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  const [showmessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  // handle on link click
  const handleItemClick = (id) => {
    navigate(`/Single_illness/${id}`);
  };

  useEffect(() => {
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
    handleSearch();
    AOS.init();
  }, [query]);

  return (
    <section>
      <div
        className="search"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="sch-box add">
          <div className="box-top">
            <span>Start your search </span>
            <span>
              <FontAwesomeIcon icon={faBarChart} />
              Advance Search
            </span>
          </div>
          <div className="box-bottom">
            <div className="search-input">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Search.."
                value={query}
                onChange={(e) => setquery(e.target.value)}
              />
            </div>
            <div className="search-input">
              <select
                class="form-select form-select p-3"
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
              className="btn px-3 border"
            >
              <FontAwesomeIcon icon={faArrowCircleRight} color="#0EC2FB" />
            </button>
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
        </div>
        <div className="sch-contact">
          <img src={contact} alt="" />
          <div className="con">
            <h2>Do you have any question?</h2>
            <button className="con-hover">Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
