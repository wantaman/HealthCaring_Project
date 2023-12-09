import React, { useRef} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bg_contain from "../../assets/image/bg_contain_1.png";
import photo1 from "../../assets/image/d_p_2.jpg";
import photo2 from "../../assets/image/d_p_3.jpg";
import photo3 from "../../assets/image/d_p_4.png";
import photo4 from "../../assets/image/d_p_5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/home/carosual.scss"
import { Autoplay, Pagination } from "swiper/modules";


const Slider_poster = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
  return (
    <section>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >

            
            <SwiperSlide>
                <div className="view-background">
                    <div className="vb-img">
                        <img src={bg_contain} alt="" />
                    </div>
                    <div className="vb-decription">
                        <div className="d-photo">
                            <img src={photo1}alt="" />
                        </div>
                        <div className="d-idea">
                            <h2 className="title">What we have?</h2>
                            <p className="description">HealtCare System, serves as a comprehensive platform dedicated to health and wellness. Navigating through our user-friendly interface,
                             individuals like Sarah can find solace in times of concern for their loved ones' well-being. Whether seeking information about local hospitals, understanding 
                             common illnesses, exploring the experiences of esteemed doctors, or utilizing our symptom checker for initial guidance, Healing Haven strives to be a reliable 
                             companion on your health journey. The culmination of these features ensures a holistic approach to healthcare, empowering individuals to make informed decisions
                              and receive expert guidance. 
                            </p>
                            <div className="btn">
                                <button className='btn-1'>View Hospital</button>
                                <button className='btn-2'>Show illness</button>
                            </div>
                        </div>
                    </div>
                </div>                
            </SwiperSlide>
            <SwiperSlide>
                <div className="view-background">
                    <div className="vb-img">
                        <img src={bg_contain} alt="" />
                    </div>
                    <div className="vb-decription">
                        <div className="d-photo">
                            <img src={photo2}alt="" />
                        </div>
                        <div className="d-idea">
                            <h2 className="title">Meeting with Doctor</h2>
                            <p className="description">
                                The conversation sets the stage for a collaborative and informative exchange with an experienced doctor. Always consult with a healthcare professional for personalized advice and guidance.
                            </p>
                            <div className="btn">
                                <button className='btn-1'>View Hospital</button>
                                <button className='btn-2'>Show illness</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </SwiperSlide>
            <SwiperSlide>
                <div className="view-background">
                    <div className="vb-img">
                        <img src={bg_contain} alt="" />
                    </div>
                    <div className="vb-decription">
                        <div className="d-photo">
                            <img src={photo3}alt="" />
                        </div>
                        <div className="d-idea">
                            <h2 className="title">Common and Advice</h2>
                            <p className="description">
                            you received advice from a doctor, it's important to follow their recommendations 
                            for your health and well-being. If you have any questions or concerns about the advice given,
                             feel free to ask for clarification. Additionally, if there are specific instructions or medications
                              prescribed, make sure you understand how to take them properly. Remember, open communication with your
                               healthcare provider is key to receiving the best possible care. 
                            </p>
                            <div className="btn">
                                <button className='btn-1'>View Hospital</button>
                                <button className='btn-2'>Show illness</button>
                            </div>
                        </div>
                    </div>
                </div>             
            </SwiperSlide>
            <SwiperSlide>
                <div className="view-background">
                    <div className="vb-img">
                        <img src={bg_contain} alt="" />
                    </div>
                    <div className="vb-decription">
                        <div className="d-photo">
                            <img src={photo4}alt="" />
                        </div>
                        <div className="d-idea">
                            <h2 className="title">Recover yourself</h2>
                            <p className="description">
                            As the body gradually heals, incorporating gradual increases in physical activity, under medical guidance, can help rebuild strength and endurance. Each individual's recovery journey is unique, and acknowledging the small victories along the way contributes to a sense of accomplishment and resilience during this period.
                            </p>
                            <div className="btn">
                                <button className='btn-1'>View Hospital</button>
                                <button className='btn-2'>Show illness</button>
                            </div>
                        </div>
                    </div>
                </div>              
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
            </div>
        </Swiper>
    </section>
  )
}

export default Slider_poster;