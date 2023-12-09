import React from 'react';
import "../../style/home/search.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.css";
import { faArrowCircleRight, faBarChart } from '@fortawesome/free-solid-svg-icons';
import contact from '../../assets/image/contact.png'


const Search = () => {
  return (
    <section>
        <div className="search">
            <div className="sch-box">
                <div className="box-top">
                    <span>Start your search </span>
                    <span>
                        <FontAwesomeIcon icon={faBarChart} />
                        Advance Search
                    </span>
                </div>
                <div className="box-bottom">
                    <div className="search-input">
                        <input type="text" className='form-control p-3' placeholder='Search..' />
                    </div>
                    <div className="search-input">
                        <select class="form-select form-select p-3" aria-label=".form-select-lg example">
                            <option selected>Calemette</option>
                            <option value="1">Soviet</option>
                            <option value="2">Royal Phnom Penh Hospital</option>
                            <option value="3">Jurie</option>
                        </select>
                    </div>
                    <button type='submit' className='btn px-3 border' >
                        <FontAwesomeIcon icon={faArrowCircleRight} color='#0EC2FB' />
                    </button>
                </div>
            </div>
            <div className="sch-contact">
                <img src={contact} alt="" />
                <div className="con">
                    <h2>Do you have any question?</h2>
                    <button className='con-hover'>Contact</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search;