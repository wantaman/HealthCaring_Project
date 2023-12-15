import React, { useEffect } from 'react'
import "../../style/About/choice.scss"
import icon1 from "../../assets/image/icon9.png"
import icon2 from "../../assets/image/icon8.png"
import icon3 from "../../assets/image/icon7.png"
import Aos from 'aos'


const About_choice = () => {
    useEffect(()=>{
        Aos.init();
    })
  return (
    <section>
        <div className="sec-choice">
            <div className="cho-title">
                <h2 className="title">
                    Empowering Informed <br/><span>Health Decisions</span>
                </h2>
                {/* <div className="title-status">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Quo obcaecati amet molestiae, mollitia non laborum dolorum minus omnis sit nemo accusantium. id vero et fugiat saepe dicta nostrum, 
                        itaque temporibus delectus vitae quidem distinctio officia. Debitis, mollitia eius!
                </div> */}
            </div>
            <div className="cho-des" 
            >
                <div className="des-box"
                data-aos="zoom-in">
                    <img width={100} height={100} src={icon1} alt="" />
                    <p className="name-img">
                        {/* Search Best Online */}
                    </p>
                    <h3 className='point-img'>
                        User-Friendly Interface
                    </h3>
                    <p className="des-img">
                        <li>Design a clean and intuitive user interface that is easy to navigate for users of all ages and technological backgrounds.</li>
                        <li>Ensure accessibility features to make the website usable for individuals with disabilities, such as screen readers and keyboard navigation.</li>
                        <li>Provide multilingual support to cater to a diverse audience and enhance accessibility for non-English speakers.</li>
                    </p>
                </div>
                <div className="des-box"
                data-aos="zoom-in">
                    <img width={100} height={100} src={icon2} alt="" />
                    <p className="name-img">
                        {/* Search Best Online */}
                    </p>
                    <h3 className='point-img'>
                        Hospital Locator and Reviews:
                    </h3>
                    <p className="des-img">
                        <li> Implement a robust search functionality that allows users to find hospitals based on the type of illness, location, and other relevant criteria.</li>
                        <li>Include a rating and review system for hospitals to help users make informed decisions about where to seek medical care.</li>
                        <li>Integrate maps and directions to make it easy for users to find the hospital's physical location.</li>
                    </p>
                </div>
                <div className="des-box"data-aos="zoom-in">
                    <img width={100} height={100} src={icon3} alt=""  />
                    <p className="name-img">
                        {/* Search Best Online */}
                    </p>
                    <h3 className='point-img'>
                        Comprehensive Illness Information
                    </h3>
                    <p className="des-img">
                        <li>Provide detailed and accurate information about various illnesses, including symptoms, causes, and available treatments.</li>
                        <li>Ensure user-friendly navigation, allowing visitors to easily search for specific illnesses or browse through categories.</li>
                        <li>Include reputable sources and references to ensure the credibility of the information.</li>
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About_choice;