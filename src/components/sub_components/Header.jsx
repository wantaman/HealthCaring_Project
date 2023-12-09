import React, { useState } from "react";
import "../../style/home/header.scss";
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
    getItem("Infectious Diseases", "5","/Infectious"),
    getItem("Cancer", "6","/Cancer"),
    getItem("Respiratory Diseases", "7","/Respiratory"),
    getItem("Cardiovascular Diseases", "8","/Cardiovascular"),
  ]),
  getItem("Hospital", "sub4", "", [
    getItem("Public Hospital", "9","Hospital Public"),
    getItem("Private Hosiptal", "10","Hospital Private"),
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
    const body = document.body;

    if (sidebarVisible) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';

    }
  
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
            <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </div>
        </div>
      </div>
      <Headroom
        style={{
          transition: "all .5s ease-in-out",
          zIndex: 100,
        }}
      >
        <div className="contain-2">
          <div className="con2">
            <div className="con2-img">
              <img src={logo} alt="" />
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
                      <Link className="down-hover">Infectious Diseases</Link>
                    </li>
                    <li>
                      <Link className="down-hover">Cancer</Link>
                    </li>
                    <li>
                      <Link className="down-hover">Respiratory Diseases</Link>
                    </li>
                    <li>
                      <Link className="down-hover">
                        Cardiovascular Diseases
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="nav-hover">Hospitals</Link>
                  <ul className="dropdown">
                    <li>
                      <Link className="down-hover">Public</Link>
                    </li>
                    <li>
                      <Link className="down-hover">Private</Link>
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
              <button className="login">Login</button>
            </div>
            <div className="con2-nav-mobile">
              <div className="res-nav">
                <button className="btn">Login</button>
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
    </section>
  );
};

export default Header;
