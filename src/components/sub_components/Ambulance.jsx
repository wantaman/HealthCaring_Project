import React from "react";
import "../../style/home/rating_hos.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Ambulance_data from "../google_map/Ambulance_data"

const Ambulance = () => {
  return (
    <>
    {
      Ambulance_data.map((index, item) => (
        <div className="view-hospital" key={index}>
          <div className="view-img">
            <img src={item.img} alt="" />
            <span className="icon">
              <FontAwesomeIcon icon={faPersonRifle} />
            </span>
          </div>
          <div className="view-detail">
            <span className="detail-name">ID:{item.code}</span>
            <p className="title">
              <b>{item.name}</b>
            </p>
            <span className="detail-made">{item.drive}</span>
            <p className="embed"><FontAwesomeIcon color="#FF5851" icon={faMap} /> {}</p>
            <button className="btn">
              <Link>View More</Link>
            </button>
          </div>
        </div>
      ))
    }
    </>

  );
};

export default Ambulance;
