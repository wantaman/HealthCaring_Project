import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../style/illness/single_illness.scss";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEye,
  faShare,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import Map_cate from "./Map_cate";
import Footer from "./Footer";
import Loading from "./Loading";

const Single_illness = () => {
  const { id } = useParams();
  const [condition, setCondition] = useState(null);
  const [relateHospital, setRelateHospital] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConditionDetails = async () => {
      try {
        const response = await axios.get(
          `https://data-healthcare.onrender.com/illness/${id}`
        );
        setCondition(response.data);

        // Fetch related hospitals based on the condition name
        const hospitalResponse = await axios.get(
          "https://data-healthcare.onrender.com/hospital"
        );
        const conditionName = response.data.name;
        const filteredHospitals = hospitalResponse.data.filter((hospital) =>
          hospital.hospital_type.some((type) =>
            type.illness_name.includes(conditionName)
          )
        );
        setRelateHospital(filteredHospitals);
      } catch (error) {
        console.error("Error fetching condition details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConditionDetails();
  }, []);
  const handleMap = (id) => {
    navigate(`/Single_illness/google map/${id}`);
  };

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="single_illness">
          <div className="header">
            <Header />
          </div>
          <main>
            <div className="illness_con">
              <div className="head-navigate">
                <ul>
                  <li>
                    <Link to={"/"} style={{ color: "#55acee" }}>
                      Home{">"}
                    </Link>
                  </li>
                  <li>
                    <Link> Single illness</Link>
                  </li>
                </ul>
              </div>
              <div className="illness_info">
                <h1 className="title">{condition.name}</h1>
                <small>Healthy, stay with smile</small>
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
                    <b>
                      <i>Symtoms:</i>
                    </b>{" "}
                    {condition.symtoms}
                  </span>
                  <br />
                  <span>
                    <b>
                      <i>Record of patients that have this illness:</i>
                    </b>{" "}
                    {condition.average} in the world!
                  </span>
                </p>
                <div className="des">
                  <h4 className="fw-bold">Detail: </h4>
                  <div className="des-con">
                    <div className="left">
                      <p className="line">{condition.description[0].line1}</p>
                      <p className="line">{condition.description[0].line2}</p>
                      <p className="line">{condition.description[0].line3}</p>
                    </div>
                    <div className="right">
                      <img src={condition.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relate_hos">
                <p className="title">Relate Hospital</p>

                <div className="con_hos">
                  {relateHospital.map((index) => (
                    <div className="box" key={index.id}>
                      <div className="pic">
                        <img src={index.logo} alt="" />
                      </div>
                      <div className="detail">
                        <h5 className="title">{index.name_hos}</h5>
                        <p className="star">
                          <span>Rating:</span> {index.rate}stars *
                        </p>
                        <p className="type">
                          <span>Type: </span>
                          {index.hospital_type[0].lable}
                        </p>
                        <p className="name">
                          <span>illness: </span>
                          {index.hospital_type[0].illness_name}
                        </p>
                        <p className="locate">
                          <span>
                            Location:{" "}
                            <Link
                              to={`/Single_illness/google map/${index.id}`}
                              onClick={() => handleMap(index.id)}
                            >
                              {index.location[0].locate}
                            </Link>{" "}
                            <FontAwesomeIcon icon={faShare} />
                          </span>{" "}
                        </p>
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

export default Single_illness;
