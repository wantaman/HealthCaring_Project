import React from "react";
import "../../style/home/doctor.scss";
import pro_doc from "../../assets/image/doctor_1.png";
import icon1 from "../../assets/image/icon_1.png";
import icon2 from "../../assets/image/icon_2.png";
import icon3 from "../../assets/image/icon_3.png";
import { Link, useNavigate } from "react-router-dom";

const Intro_dtor = () => {
  const navigate = useNavigate();

  const handleHos = () => {
    navigate(`/Private Hospital`);
  };
  const handleHI = () => {
    navigate(`Exper_Doctor`);
  };
  const handleCon = () => {
    navigate(`Contact Us`);
  };

  return (
    <section>
      <div className="intro_feature">
        <div className="feature">
          <div className="fea-box">
            01
            <div className="box-detail">
              <p className="title">Fast appointment with</p>
              <h2 style={{ color: "#0EC2FB" }} className="detail">
                Nearest Hospital
              </h2>
              <button className="btn" onClick={handleHos}>
                Show All Nearest Hospital
              </button>
            </div>
          </div>
          <div className="fea-box">
            02
            <div className="box-detail">
              <p className="title">Artical From Top</p>
              <h2 style={{ color: "#DAC400" }} className="detail">
                Hospitals & Doctors
              </h2>
              <button className="btn" onClick={handleHI}>
                Show All Hospitals & Doctors
              </button>
            </div>
          </div>
          <div className="fea-box">
            03
            <div className="box-detail">
              <p className="title">Our 24/7 Active</p>
              <h2 style={{ color: "#9747FF" }} className="detail">
                Help Support
              </h2>
              <button className="btn" onClick={handleCon}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="profile-doctor">
          <div className="des">
            <h2 className="des-title">
              Bring Care To Your Home <span>With One Click</span>
            </h2>
            <p className="des-detail">
              "Experience the convenience of bringing care to your home with
              just one click. Our innovative platform is designed to seamlessly
              connect you with a range of personalized care services, all
              accessible at the touch of a button." <br />
              <br /> Welcome to a new era of personalized care, where technology
              meets compassion, and your well-being is just a click away. Bring
              care to your home effortlessly and experience the freedom to focus
              on what matters most – your health and happiness."
            </p>
            <div className="des-button">
              <button className="button-white">
                <Link className="about" to={"/About"}>
                  About Us
                </Link>{" "}
              </button>
              <button className="button-blue">
                <Link style={{ color: "white" }} to={"/Contact Us"}>
                  Contact
                </Link>
              </button>
            </div>
          </div>
          <div className="profile">
            <div className="blur">
              <img src={pro_doc} alt="" />
            </div>
            <div className="abs-pro">
              <span>Greeting & Welcome</span>
              <p>Dr.Tyrone Grindle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="plan">
        <div className="typ-plan">
          <div className="plan-detail">
            <div className="detail">
              <span>We made simple</span>
              <h1 className="title">
                How it <span>works?</span>
              </h1>
              <p className="des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt ullam itaque explicabo, alias quaerat sed natus nihil
                corrupti nam nemo asperiores ab sunt quibusdam illo. Quae sit
                corporis officia harum. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Rem numquam tempore nam repellendus veniam
                iusto incidunt in et iste, provident beatae doloremque?
                Consequatur hic amet illo quia, ratione odit aperiam.
              </p>
            </div>
          </div>
          <div className="plan-img">
            <div className="contain">
              <div className="box-img">
                <img src={icon1} alt="" />
              </div>
              <div className="box-title">
                <b>Professional</b>
              </div>
            </div>
            <div className="contain">
              <div className="box-img">
                <img src={icon2} alt="" />
              </div>
              <div className="box-title">
                <b>Appointment</b>
              </div>
            </div>
            <div className="contain">
              <div className="box-img">
                <img src={icon3} alt="" />
              </div>
              <div className="box-title">
                <b>Feedback</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro_dtor;
