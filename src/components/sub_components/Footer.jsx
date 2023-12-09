import React from 'react'
import "../../style/home/footer.scss"
import logo from "../../assets/image/_logo_.jpg"
import user from "../../assets/image/user.png"
import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faMap, faPerson, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {

  

  return (
    <section>
      <div className="center-footer">
        <div className="left-footer">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p className="des">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium dolore
            voluptas voluptatem eos dolores impedit sit fuga dignissimos harum, voluptatum 
            dolor dolorem possimus incidunt minus rerum veritatis modi soluta totam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero
            maxime velit dolorum at a quis fugiat corporis quas ipsum nesciunt illum perspiciatis
            qui sed consequuntur, ad asperiores cumque! Itaque?
          </p>
          <div className="relate_us">
            <span><FontAwesomeIcon icon={faMap}/> Phnom Penh, Cambodia</span>
            <span><FontAwesomeIcon icon={faPerson}/> <a href="javascript:void(0)" >KertEy@gmail.com</a></span>
            <span><FontAwesomeIcon icon={faPhone}/> +855 90033442</span>
          </div>

          <div className="icon">
            <a href="javascript:void(0)"><span><FontAwesomeIcon icon={faFacebook}/></span></a>
            <a href="javascript:void(0)"><span><FontAwesomeIcon icon={faTwitter}/></span></a>
            <a href="javascript:void(0)"><span><FontAwesomeIcon icon={faLinkedin}/></span></a>
            <a href="javascript:void(0)"><span><FontAwesomeIcon icon={faYoutube}/></span></a>
          </div>
        </div>
        <div className="right-footer">
          <div className="logo">
            <br/>
            <br/>
            <h4>Twitter Live</h4>
          </div>
          <div className="profile_user">
            <img width={50}  height={50} style={{borderRadius: "50%"}} src={user} alt="" />
            <div className="info-user">
              <p className="des">Doctor Mr.Kris <code>@Kris</code> Almost 10 thousands always go to hospital in a day <span>#patients</span></p>
              <b>11:40 AM - Jun 10 ,2023</b>
            </div>
          </div>
          <div className="profile_user">
            <img width={50}  height={50} style={{borderRadius: "50%"}} src={user} alt="" />
            <div className="info-user">
              <p className="des">Doctor Mr.Thubat <code>@Thubat</code> Almost 10 thousands always go to hospital in a day <span>#patients</span></p>
              <b>11:40 AM - Jun 10 ,2023</b>
            </div>
          </div>
          <div className="profile_user">
            <div className="email">
              <input type="email" className="form-control input rounded-0" placeholder='Enter your email' required/>
              <button className='btn rounded-0' >
                <FontAwesomeIcon icon={faArrowRight}/>
              </button>
            </div>
          </div>
          <b>Copyright @ 2023 by <span style={{color:"#0EC2FB"}}>HealthCare</span>. All Right Reserved </b>
        </div>
      </div>
    </section>
  )
}

export default Footer;