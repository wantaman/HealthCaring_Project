import React, { useState } from "react";
import "../../style/home/map_cate.scss";
import sp_icon from  "../../assets/image/icon_5.png"
import sp_icon_2 from  "../../assets/image/icon_6.png"

const Map_cate = () => {
  const initialDisplayCount = 6;
  const [showAll, setShowAll] = useState(false);
  const [showAll_2, setShowAll_2] = useState(false);
  const [showAll_4, setShowAll_4] = useState(false);
  //specially
  const data_1 = [
    "Allergy Specially",
    "Andrologist",
    "Anesthetist",
    "Audiologist",
    "Dietitian/Nutritionist",
    "Infection",
  ];

  //Hospitals in Cambodia
  const data_2 = [
    "Calmette Hospital",
    "Khmer-Soviet Hospital ",
    "Royal Angkor International Hospital ",
    "Royal Phnom Penh Hospital",
    "Pacific Phnom Penh Hospital ",
    "Sihanoukville  Hospital",
    "Angkor Hospital for Children",
    "Neak Tep Hospital",
    "Sonja Kill Memorial Hospital",
  ];

  //Navbar Category
  const data_3 = [
    "General illness",
    "General Symptoms",
    "Infection Disease",
    "Treatments",
  ];

  //Location
  const data_4 = [
    "Phnom Penh",
    "Siem Reap",
    "Preah Sihanouk",
    "Kep",
    "Kampot",
    "Takéo",
    "Ratanakiri",
    "Mondulkiri",
    "Kampong Chhnang",
    "Battambang",
    "Kandal",
  ];

  const displayedData_1 = showAll
    ? data_1
    : data_1.slice(0, initialDisplayCount);
  const displayedData_2 = showAll_2
    ? data_2
    : data_2.slice(0, initialDisplayCount);
  const displayedData_3 = showAll ? data_3 : data_3.slice(0, 4);
  const displayedData_4 = showAll_4
    ? data_4
    : data_4.slice(0, initialDisplayCount);

  return (
    <section>
      <div className="cate">
        <div className="cen-cate">
          <div className="cate-detail">
            <h3 className="title">By Specially</h3>
            {displayedData_1.map((item, index) => (
              <p className="points-cate" key={index}>
                {item}
              </p>
            ))}
            {!showAll && (
              <span className="view-more" onClick={() => setShowAll(true)}>
                View All
              </span>
            )}
          </div>
          <div className="cate-detail">
            <h3 className="title">Hospitals in Cambodia</h3>
            {displayedData_2.map((item, index) => (
              <p className="points-cate" key={index}>
                {item}
              </p>
            ))}
            {!showAll_2 && (
              <span className="view-more" onClick={() => setShowAll_2(true)}>
                View All
              </span>
            )}
          </div>
          <div className="cate-detail">
            <h3 className="title">Category</h3>
            {displayedData_3.map((item, index) => (
              <p className="points-cate" key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className="cate-detail">
            <h3 className="title">By Location</h3>
            {displayedData_4.map((item, index) => (
              <p className="points-cate" key={index}>
                {item}
              </p>
            ))}
            {!showAll_4 && (
              <span className="view-more" onClick={() => setShowAll_4(true)}>
                View All
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="ab-cate ">
        <div className="ab-support">
          <div className="support-left">
            <img className="img" src={sp_icon} alt="" />
            <p className="emergency">
              Emergency Call <span>+855 90033442</span>
            </p>
          </div>
           Or 
          <div className="support-left">
            <p className="emergency">
                24/7 Email Support<span> KertEy@gmail.com</span>
            </p>
            <img className="img" src={sp_icon_2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map_cate;
