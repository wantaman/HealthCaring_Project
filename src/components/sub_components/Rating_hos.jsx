import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "../../style/home/rating_hos.scss"
import img_rate from "../../assets/image/icon_4.png"
import Hospital_data from './Hospital_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CustomLeftArrow = ({ onClick, ...rest }) => {
    return <button onClick={onClick} className="custom-arrow left-arrow"><FontAwesomeIcon className='icon' icon={faArrowLeft}/></button>;
};
  
const CustomRightArrow = ({ onClick, ...rest }) => {
    return <button onClick={onClick} className="custom-arrow right-arrow"><FontAwesomeIcon className='icon' icon={faArrowRight}/></button>;
};

const Rating_hos = () => {
    // carousel
    const responsive = {
        desktop: {
          breakpoint: { max: 2000, min: 1750 },
          items: 4
        },
        largeDesktop: {
            breakpoint: { max: 1750, min: 1256 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 1256, min: 992 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 992, min: 650 },
          items: 2,
        },
        small_mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1,
          }             
      };

  return (
    <section>
        <div className="rating-contain">
            <div className="box-left">
                <div className="left-img">
                    <img src={img_rate} alt="" />
                    <h2>Our Top Rate <span>Hospital</span></h2>
                </div>
                <div className="left-des">
                    <div className="des">
                        dolor sit, amet consectetur adipisicing elit. Asperiores praesentium provident excepturi fugiat nihil esse magnam numquam dolor
                        distinctio inventore consectetur ipsa, ipsum suscipit ab dolores minus perferendis doloribus expedita.
                    </div>
                    <button className="btn">
                        <Link style={{
                            textDecoration: 'none',
                        }}>View All</Link> 
                    </button>
                </div>
            </div>
            <div className="box-right">
                <Carousel
                responsive={responsive}
                draggable={true}
                infinite={true}
                containerClass="carousel-container"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                 >
                    <Hospital_data/>
                    <Hospital_data/>
                    <Hospital_data/>
                    <Hospital_data/>
                    <Hospital_data/>
                    <Hospital_data/>
                    <Hospital_data/>
                    <Hospital_data/>
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default Rating_hos;