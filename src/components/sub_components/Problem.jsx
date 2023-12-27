import React, { useEffect, useState } from "react";
import "../../style/home/problem.scss";
import qr from "../../assets/image/qr_1.svg";
import banner from "../../assets/image/pro_1.webp";
import { AspectRatio, Card, CardContent, IconButton } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faShareAlt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import axios from "axios";

const Problem = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(
          "https://data-healthcare.onrender.com/articles"
        );
        setArticle(res.data);
      } catch (error) {
        console.log("message:", error);
      } finally {
        setLoading(false);
      }
    };
    data();
    Aos.init();
  });
  return (
    <section>
      <div className="issue_patient">
        <div className="center-issue">
          <div className="cen-img">
            <img src={banner} alt="" />
          </div>
          <div className="cen-detial">
            <div className="dt-start">
              <p className="detail-title">
                What is your Problem
                <br />
                <span>Comment it!</span>
              </p>
              <p className="detail-des">
                Our commitment is to address these challenges head-on. We
                recognize the need for accessible, reliable information and the
                importance of fostering a supportive environment for those
                facing health-related concerns.
              </p>
            </div>
            <div className="dt-end">
              <img src={qr} alt="" />
              {/* <span>Contact Us</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="art-des">
          <span className="status">Read Professional Article</span>
          <h2 className="title">
            Latest <span>Article</span>
          </h2>
          <p className="detail">
            This article delves into the multifaceted aspects of health,
            exploring the significance of adopting a holistic approach that
            encompasses physical, mental, and emotional well-being.
          </p>
        </div>
        <div className="art_contain">
          {article.map((item, index) => (
            <Card
              data-aos="fade-up"
              data-aos-duration="1000"
              sx={{ width: 450 }}
              className="card-article"
              key={index.id}
            >
              <div>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{
                    position: "absolute",
                    top: "0.875rem",
                    right: "0.5rem",
                  }}
                ></IconButton>
              </div>
              <AspectRatio minHeight="250px" maxHeight="300px">
                <img src={item.ref} loading="lazy" alt="" />
              </AspectRatio>
              <CardContent orientation="vertical">
                <div className="con-des">
                  <span className="type_illness">
                    <b>{item.title}</b>
                  </span>
                  <p className="des">{item.scripte}</p>
                </div>
                <div className="con-fav">
                  <span className="date float-start">
                    <FontAwesomeIcon icon={faCalendar} /> {item.date}
                  </span>
                  <span className="fav">
                    <FontAwesomeIcon icon={faThumbsUp} /> {item.like}
                  </span>
                  <span className="share">
                    <FontAwesomeIcon icon={faShareAlt} /> {item.share}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
