import React, { useEffect, useState } from "react";
import Header from "../sub_components/Header";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../sub_components/Footer";
import Map_cate from "../sub_components/Map_cate";
import "../../style/Hospital/model.scss";
import Loading from "../sub_components/Loading";
import Aos from "aos";

const Public = () => {
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  const [showmessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const [privateIllnessNames, setPrivateIllnessNames] = useState([]);
  const [hospitalData, setHospitalData] = useState([]);
  const [location, setLocation] = useState([]);
  const [loca_data, setLocaData] = useState([]);

  const [selectedIllness, setSelectedIllness] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredHospitalsCount, setFilteredHospitalsCount] = useState(12);

  // Search
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
    handleSearch();
    Aos.init();
  }, [query]);
  // Search

  // illness name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://data-healthcare.onrender.com/hospital"
        ); // Replace with your API endpoint
        setHospitalData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const privateHospitals = hospitalData.filter(
      (hospital) => hospital.hospital_type[0].lable.toLowerCase() === "public"
    );
    const uniqueIllnessNames = Array.from(
      new Set(
        privateHospitals.flatMap((hospital) =>
          hospital.hospital_type[0].illness_name
            .toLowerCase()
            .split(",")
            .map((word) => word.trim())
            .slice(0, 2)
            .join(", ")
        )
      )
    );
    setPrivateIllnessNames(uniqueIllnessNames);
  }, [hospitalData]);
  // illness name

  // location
  useEffect(() => {
    // Fetch hospital data from your API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://data-healthcare.onrender.com/hospital"
        ); // Replace with your API endpoint
        setLocaData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const privateHospitals = loca_data.filter(
      (hospital) => hospital.hospital_type[0].lable.toLowerCase() === "public"
    );

    const uniqueIllnessNames = Array.from(
      new Set(
        privateHospitals.flatMap((hospital) =>
          hospital.location[0].locate.toLowerCase()
        )
      )
    );

    setLocation(uniqueIllnessNames);
  }, [loca_data]);
  // location

  //filter select
  const filteredHospitals = loca_data.filter((hospital) => {
    const isPrivate =
      hospital.hospital_type[0].lable.toLowerCase() === "public";
    const matchesIllness = selectedIllness
      ? hospital.hospital_type[0].illness_name
          .toLowerCase()
          .split(",")
          .map((word) => word.trim())
          .slice(0, 2)
          .join(", ") === selectedIllness.toLowerCase()
      : true; // If no illness is selected, consider it a match
    const matchesLocation = selectedLocation
      ? hospital.location[0].locate.toLowerCase() ===
        selectedLocation.toLowerCase()
      : true; // If no location is selected, consider it a match

    return isPrivate && matchesIllness && matchesLocation;
  });
  //filter select

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="layout">
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
            <div className="content">
              <div className="head-navigate">
                <ul>
                  <li>
                    <Link to={"/"} style={{ color: "#55acee" }}>
                      Home{">"}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Public Hospital"}>Public Hospital</Link>
                  </li>
                </ul>
              </div>

              {/* private layout */}
              <div className="pri-hos">
                <div className="left-layout">
                  <div className="reset">
                    <a href="" className="clear">
                      CLEAR ALL FILLTER
                    </a>
                  </div>
                  <ul className="form-option">
                    <li className="form">
                      illness Name
                      <br />
                      <Form.Select
                        className="input"
                        aria-label="Default select example"
                        value={selectedIllness}
                        onChange={(e) => setSelectedIllness(e.target.value)}
                      >
                        <option>Select an Illness...</option>
                        {privateIllnessNames.map((illnessName, index) => (
                          <option
                            className="option"
                            value={illnessName}
                            key={index}
                          >
                            {illnessName}
                          </option>
                        ))}
                      </Form.Select>
                    </li>
                    <li className="form">
                      Location
                      <br />
                      <Form.Select
                        className="input"
                        aria-label="Default select example"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option>Select an location...</option>
                        {location.map((location, index) => (
                          <option value={location} key={index}>
                            {location}
                          </option>
                        ))}
                      </Form.Select>
                    </li>
                  </ul>
                </div>
                <div className="right-layout">
                  <div className="title">
                    <p> </p>
                    <h1 className="name">
                      <span>{filteredHospitalsCount} </span>
                      {filteredHospitalsCount === 1 ? "Location" : "Locations"}
                    </h1>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="light"
                        className="drop"
                        id="dropdown-basic"
                      >
                        Sort By
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Sort by</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">A-Z</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {filteredHospitals.map((hospital, index) => (
                    <div data-aos="fade-left" className="view-hos" key={index}>
                      <div className="img-hos">
                        <img src={hospital.logo} alt="" />
                      </div>
                      <div className="des">
                        <p className="name">
                          <Link to={"/"}>{hospital.name_hos}</Link>
                        </p>
                        <span className="location">
                          Place: {hospital.location[0].locate}
                        </span>
                        <br />
                        <span className="illness">
                          Disease: {hospital.hospital_type[0].illness_name}
                        </span>
                        <br />
                        <span className="phone">
                          Tel:{" "}
                          <span style={{ color: "#FF5851" }}>
                            {hospital.hospital_type[0].detail[0].phone}
                          </span>
                        </span>
                        <br />
                        <button className="btn-direction" type="submit">
                          <Link to={`/Single_illness/google map/${hospital.id}`}>Direction</Link>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

export default Public;
