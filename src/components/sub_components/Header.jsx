import React, { useState } from "react";
import "../../style/home/header.scss";
import "bootstrap/dist/js/bootstrap";
import logo from "../../assets/image/_logo_.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Layout from "antd/es/layout/layout";
import { Menu } from "antd";



function getItem(label, key, to, children, type) {
  return {
    key,
    children,
    label,
    type,
    to,
  };
}
const items = [
  getItem("Home", "sub1", "/"),
  getItem("illness Type", "sub2", "", [
    getItem("Infectious Diseases", "5","/Infection Disease"),
    getItem("Cancer", "6","/Cancer Disease"),
    getItem("Respiratory Diseases", "7","/Respiratory Disease"),
    getItem("Cardiovascular Diseases", "8","/Cardiovascular Disease"),
  ]),
  getItem("Hospital", "sub4", "", [
    getItem("Public Hospital", "9","/Public Hospital"),
    getItem("Private Hosiptal", "10","/Private Hospital"),
  ]),
  getItem("Doctor", "sub5", "/Exper_Doctor"),
  getItem("Contact us", "sub6", "/Contact Us"),
  getItem("About us", "sub7", "/About"),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub4", "sub5", "sub6", "sub7"];



const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);  
  };
  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <section>
      <div className="contain-1">
        <div className="con1">
          <div className="con1-emergency">
            <span>Emergency</span>
            <br />
            <b>+855 8944022</b>
          </div>
          <div className="con1-social-media">
            <a href="www.Facebook.com?KERTEY"><FontAwesomeIcon className="icon" icon={faSquareFacebook} /></a>
            <a href="www.Twitter.com?KERTEY"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
            <a href="www.Linkedin.com?KERTEY"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            <a href="www.YouTube.com?KERTEY"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <Headroom room
        style={{
          transition: "all .5s ease-in-out",
          zIndex: 100,
          transform: 'translate3d(0px, 0px, 0px)'
        }}
      >
        <div className="contain-2">
          <div className="con2">
            <div className="con2-img">
              <Link to={"/"}><img src={logo} alt="" /></Link>
            </div>
            <div className="con2-nav">
              <ul className="nav">
                <li>
                  <Link className="nav-hover" to={"/"}>Home</Link>
                </li>
                <li>
                  <Link className="nav-hover">illnesses Type</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to={"/Infection Disease"} className="down-hover">Infectious Diseases</Link>
                    </li>
                    <li>
                      <Link to={"/Cancer Disease"} className="down-hover">Cancer</Link>
                    </li>
                    <li>
                      <Link to={"/Respiratory Disease"} className="down-hover">Respiratory Diseases</Link>
                    </li>
                    <li>
                      <Link to={"/Cardiovascular Disease"} className="down-hover">
                        Cardiovascular Diseases
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="nav-hover">Hospitals</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to={"/Public Hospital"} className="down-hover">Public</Link>
                    </li>
                    <li>
                      <Link to={"/Private Hospital"} className="down-hover">Private</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="nav-hover" to={"/Exper_Doctor"}>Doctor</Link>
                </li>
                <li>
                  <Link className="nav-hover" to={"/Contact Us"}>Contact us</Link>
                </li>
                <li>
                  <Link className="nav-hover" to={"/About"}>About Us</Link>
                </li>
              </ul>
              <button type="button"  className="login" data-bs-toggle="modal" data-bs-target="#login">Sign Up</button>
            </div>
            <div className="con2-nav-mobile">
              <div className="res-nav">
                <button className="btn" data-bs-toggle="modal" data-bs-target="#login">Sign Up</button>
                <div className="mobile-icon">
                  <FontAwesomeIcon onClick={toggleSidebar} icon={faBars} />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </Headroom>

      {sidebarVisible && (
        <Layout className="sidebar">
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{
                width: 256,
                backgroundColor: "#323a57",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              {items.map((item) => (
                item.children ? (
                  <Menu.SubMenu key={item.key} title={item.label}>
                    {item.children.map((child) => (
                      <Menu.Item key={child.key}>
                        <span>
                          {child.label}
                          <Link to={child.to}></Link>
                        </span>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={item.key}>
                    <span>
                      {item.label}
                      <Link to={item.to}></Link>
                    </span>
                  </Menu.Item>
                )
              ))}
            </Menu>
        </Layout>
      )}
      {/* Form */}
      <div className="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content login">
            <p className="title">
              <h3>Sign Up</h3>
              <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </p>
            <form action="" className="card_form" method="GET">
              
              <div className="input">
                <label className="name">Username</label>
                <input type="text" name="username" id="" className="form form-control" placeholder="Enter your username..."/>
              </div>
              <div className="input">
                <label className="name">Email</label>
                <input type="email" name="username" id="" className="form form-control" placeholder="Enter your email"/>
              </div>
              <div className="input">
                <label className="name">Password</label>
                <input type="password" name="username" id="" className="form form-control " placeholder="Enter your password"/>
              </div>
              <div className="select">
                <h4 className="gender">Gender</h4>
                <div className="option">
                  <div className=" form-check">
                    <input type="radio" className="form-check-input"name="flexRadioDefault" id="radio1" />
                    <label className="form-check-label" for = "radio1">Male</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" name="flexRadioDefault" id="radio2" />
                    <label className="form-check-label" for = "radio2">Female</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" name="flexRadioDefault" id="radio3" />
                    <label className="form-check-label"  for = "radio3">Other</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
