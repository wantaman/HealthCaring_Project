import React from "react";
import "../../style/home/footer.scss";
import logo from "../../assets/image/_logo_.jpg";
import user from "../../assets/image/user.png";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMap,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section>
      <div className="center-footer">
        <div className="left-footer">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p className="des">
            Empower yourself with our cutting-edge system that revolutionizes
            the way you search for information about illnesses. Say goodbye to
            traditional methods of sifting through endless web pages or
            confusing medical jargon. Our modern system is designed to provide
            you with accurate and user-friendly information, putting the power
            of knowledge at your fingertips.
          </p>
          <div className="relate_us">
            <span>
              <FontAwesomeIcon icon={faMap} /> Phnom Penh, Cambodia
            </span>
            <span>
              <FontAwesomeIcon icon={faPerson} />{" "}
              <a href="javascript:void(0)">KertEy@gmail.com</a>
            </span>
            <span>
              <FontAwesomeIcon icon={faPhone} /> +855 90033442
            </span>
          </div>

          <div className="icon">
            <a href="javascript:void(0)">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>
            <a href="javascript:void(0)">
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
            <a href="javascript:void(0)">
              <span>
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
            <a href="javascript:void(0)">
              <span>
                <FontAwesomeIcon icon={faYoutube} />
              </span>
            </a>
          </div>
        </div>
        <div className="right-footer">
          <div className="logo">
            <br />
            <br />
            <h4>Twitter Live</h4>
          </div>
          <div className="profile_user">
            <img
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
              src={user}
              alt=""
            />
            <div className="info-user">
              <p className="des">
                Doctor Mr.Kris <code>@Kris</code> Almost 10 thousands always go
                to hospital in a day <span>#patients</span>
              </p>
              <b>11:40 AM - Jun 10 ,2023</b>
            </div>
          </div>
          <div className="profile_user">
            <img
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
              src={user}
              alt=""
            />
            <div className="info-user">
              <p className="des">
                Doctor Mr.Koka <code>@Koka</code> I hope this message finds you well. I wanted to take a moment to express my appreciation for the exceptional care and attention I received during my recent visit to your office. <span>#patients</span>
              </p>
              <b>8:40 AM - Oct 15 ,2023</b>
            </div>
          </div>
          <div className="profile_user">
            <div className="email">
              <input
                type="email"
                className="form-control input rounded-0"
                placeholder="Enter your email"
                required
              />
              <button className="btn rounded-0">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <b>
            Copyright @ 2023 by <span style={{ color: "#0EC2FB" }}>KERTEY</span>
            . All Right Reserved{" "}
          </b>
        </div>
      </div>
    </section>
  );
};

export default Footer;
