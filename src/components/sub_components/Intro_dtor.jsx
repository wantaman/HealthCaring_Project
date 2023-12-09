import React from 'react'
import "../../style/home/doctor.scss"
import pro_doc from '../../assets/image/doctor_1.png'
import icon1 from '../../assets/image/icon_1.png'
import icon2 from '../../assets/image/icon_2.png'
import icon3 from '../../assets/image/icon_3.png'

const Intro_dtor = () => {
  return (
    <section>
        <div className="intro_feature">
            <div className="feature">
                <div className="fea-box">
                    01
                    <div className="box-detail">
                        <p className="title">
                            Fast appointment with
                        </p>
                        <h2 style={{color: '#0EC2FB'}} className="detail">
                            Nearest Hospital
                        </h2>
                        <button className="btn">
                            Show All Nearest Hospital
                        </button>
                    </div>
                </div>
                <div className="fea-box">
                    02
                    <div className="box-detail">
                        <p className="title">
                            Artical From Top
                        </p>
                        <h2 style={{color: '#DAC400'}} className="detail">
                            Hospitals & Doctors
                        </h2>
                        <button className="btn">
                            Show All Hospitals & Doctors
                        </button>
                    </div>
                </div>
                <div className="fea-box">
                    03
                    <div className="box-detail">
                        <p className="title">
                            Our 24/7 Active
                        </p>
                        <h2 style={{color: '#9747FF'}} className="detail">
                            Help Support
                        </h2>
                        <button className="btn">
                            Contact Us
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="profile-doctor">
                <div className="des">
                    <h2 className="des-title">Bring Care To Your
                        Home <span>With One Click</span>
                    </h2>
                    <p className="des-detail">
                        Lorem ipsum dolor sit amet, consectetur
                         adipisicing elit. Eius laboriosam distinctio
                          ratione eum iusto, nesciunt quod veritatis assumenda
                           cupiditate omnis nihil, dignissimos sequi libero laborum id! Deleniti nemo incidunt maiores. 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Iure suscipit at possimus illo harum! Voluptas commodi, 
                        rerum incidunt voluptatem repellendus nobis vitae distinctio
                        natus blanditiis similique sit labore maxime molestiae?                       
                    </p>
                    <div className="des-button">
                        <button className='button-white'>About Us</button>
                        <button className='button-blue'>Contact</button>
                    </div>
                </div>
                <div className="profile">
                    <div className="blur"><img src={pro_doc} alt="" /></div>
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
                        <span>
                            We made simple
                        </span>
                        <h1 className='title'>How it <span>works?</span></h1>
                        <p className='des'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ullam itaque explicabo, alias quaerat sed natus nihil corrupti nam nemo 
                            asperiores ab sunt quibusdam illo. Quae sit corporis officia harum.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem numquam tempore nam repellendus veniam iusto incidunt in et iste, provident 
                            beatae doloremque? Consequatur hic amet illo quia, ratione odit aperiam.
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
  )
}

export default Intro_dtor;