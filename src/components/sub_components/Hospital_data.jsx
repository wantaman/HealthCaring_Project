import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import h1 from "../../assets/image/hp_1.jpg"
import Typography from "@mui/material/Typography";
import "../../style/home/rating_hos.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPersonRifle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Hospital_data = () => {
const [value, setValue] = useState(3);
const [hover, setHover] = useState(-1);  

  return (
    <div className="view-hospital">
      <div className="view-img">
        <img src={h1} alt="" />
        <span className="icon">
            <FontAwesomeIcon icon={faPersonRifle}/>
        </span>
      </div>
      <div className="view-detail">
        <span className="detail-name">Hospital</span>
        <p className="title">
          <b>Royal Phnom Penh Hospital</b>
        </p>
        <span className="detail-made">Made in: 2014</span>
        
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
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              readOnly
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
                <Typography ml={2} variant="body1">
                {value} Feedback
                </Typography>
            )}
          </Box>
        </div>
        <p className="embed"><FontAwesomeIcon color="#FF5851" icon={faMap}/> 888 Russian Federation Blvd (110), Phnom Penh</p>
        <button className="btn">
            <Link>View More</Link> 
        </button>

      </div>
    </div>
  );
};

export default Hospital_data;
