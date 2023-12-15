import React, { useEffect } from "react";
import "../../style/About/team.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import p1 from "../../assets/image/profile1.jpg";
import p2 from "../../assets/image/profile2.jpg"
import p3 from "../../assets/image/profile3.jpg"
import p4 from "../../assets/image/profile4.jpg"
import Aos from "aos";

const About_team = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <section>
      <div className="team">
        <div className="con-top">
          <span className="point">Talent Behind Curtain</span>
          <h2 className="title">
            Meet <span>Our Team</span>
          </h2>
          <p className="des">
          Empowering individuals through a centralized platform, our vision is to provide reliable information on illnesses, 
          aiding informed health decisions. With comprehensive details on symptoms, causes, and treatments, coupled with a hospital locator feature, 
          we strive to connect users with specialized healthcare facilities, fostering a healthier and more confident community.
          </p>
        </div>
        <div className="con-bottom">
          <div className="bottom-box"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="200">
            <div className="profile">
              <img src={p1} alt="" />
            </div>
            <div className="info">
              <span className="position">Founder, Leader Team</span>
              <h5 className="name">Heam Dararoth</h5>
              <div className="contact-team">
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#4267B2" }}
                    icon={faSquareFacebook}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#0077b5" }}
                    icon={faLinkedin}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#c71610" }}
                    icon={faGoogle}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-box"
          data-aos="zoom-in" data-aos-duration="200">
            <div className="profile">
              <img src={p3} alt="" />
            </div>
            <div className="info">
              <span className="position">Member</span>
              <h5 className="name">Phen Sokheng</h5>
              <div className="contact-team">
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#4267B2" }}
                    icon={faSquareFacebook}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#0077b5" }}
                    icon={faLinkedin}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#c71610" }}
                    icon={faGoogle}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-box"
          data-aos="zoom-in" data-aos-duration="200">
            <div className="profile">
              <img src={p2} alt="" />
            </div>
            <div className="info">
              <span className="position">Member</span>
              <h5 className="name">Sorn Raksmey</h5>
              <div className="contact-team">
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#4267B2" }}
                    icon={faSquareFacebook}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#0077b5" }}
                    icon={faLinkedin}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#c71610" }}
                    icon={faGoogle}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-box"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="200">
            <div className="profile">
              <img src={p4} alt="" />
            </div>
            <div className="info">
              <span className="position">Member</span>
              <h5 className="name">Leng Henglong</h5>
              <div className="contact-team">
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#4267B2" }}
                    icon={faSquareFacebook}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#0077b5" }}
                    icon={faLinkedin}
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon className="icon"
                    style={{ color: "#c71610" }}
                    icon={faGoogle}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_team;
