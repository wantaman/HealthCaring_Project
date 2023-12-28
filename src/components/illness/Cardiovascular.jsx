import React, { useEffect, useState } from "react";
import "../../style/illness/illnessType.scss";
import Header from "../sub_components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import Map_cate from "../sub_components/Map_cate";
import Footer from "../sub_components/Footer";
import Loading from "../sub_components/Loading";
import lung from "../../assets/image/Cardiovascular_disease_3.png"
import Aos from "aos";


const Cardiovascular = () => {
  const [query, setquery] = useState("");
  const [result, setresult] = useState([]);
  const [showmessage, setShowMessage] = useState(false);
  const [illness, setIllness] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      if (!query.trim()) {
        setresult([]);
        setShowMessage(false);
        return;
      }
      const res = await axios.get(
        "https://data-healthcare.onrender.com/illness"
      );
      const filterSearch = res.data.filter((con) =>
        con.name.toLowerCase().includes(query.toLowerCase())
      ); // make all capital letter to lower

      setresult(filterSearch);
      setShowMessage(filterSearch.length === 0);
    } catch (e) {
      console.error("Failed Connection", e);
    }
  };

  // when user clicks on button
  const handleButtonClick = () => {
    handleSearch();
  };
  const handleItemClick = (id) => {
    navigate(`/Single_illness/${id}`);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const relateIllness = async () => {
      try {
        const respone = await axios.get(
          "https://data-healthcare.onrender.com/illness"
        );
        const random = shuffleArray(respone.data);
        setIllness(random.slice(0, 8));
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    relateIllness();
    handleSearch();
    Aos.init();
  }, [query]);

  const handleRelateIllness = (id) => {
    navigate(`/Single_illness/${id}`);
  };
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="illness">
          {/* Header */}
          <div className="header">
            <Header />
          </div>
          <main>
            {/*  Search */}
            <div className="search">
              <div className="sch-box">
                <div className="box-bottom">
                  <div className="search-input">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Search.."
                      value={query}
                      onChange={(e) => setquery(e.target.value)}
                    />
                    {query.trim() && (
                      <div className="dropdown_search ">
                        {showmessage ? (
                          <p className=" p-2 ">Can not found!</p>
                        ) : (
                          <ul className="search_list">
                            {result.map((Item) => (
                              <li
                                key={Item.id}
                                onClick={() => handleItemClick(Item.id)}
                                className="list"
                              >
                                <Link to={`/Single_illness/${Item.id}`}>
                                  {Item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="search-input">
                    <select
                      className="form-select form-select p-3"
                      aria-label=".form-select-lg example"
                    >
                      <option selected>Calemette</option>
                      <option value="1">Soviet</option>
                      <option value="2">Royal Phnom Penh Hospital</option>
                      <option value="3">Jurie</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn p-3 btn-border  text-light"
                    onClick={handleButtonClick}
                  >
                    Search
                  </button>
                </div>
                <div className="box-top">
                  <span>
                    <FontAwesomeIcon icon={faBarChart} />
                  </span>
                  <p>Advance Search</p>
                </div>
              </div>
            </div>
            <div className="contains">
              <div className="head-navigate">
                <ul>
                  <li>
                    <Link to={"/"} style={{ color: "#55acee" }}>
                      Home {">"}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Cancer Disease"}>Cancer illness</Link>
                  </li>
                </ul>
              </div>
              {/* What is infection  */}
              <div className="main">
                <div className="con-title">
                  <div className="title">
                    <h1 className="h1">Cardiovascular Disease</h1>
                  </div>
                  <p className="spp-title">
                  Cardiovascular diseases (CVDs) affect your heart and blood vessels. Almost half of all adults in the U.S. have at least one form of heart disease. You may make lifestyle changes to manage cardiovascular disease or your healthcare provider may prescribe medications. The sooner you detect cardiovascular disease, the easier it is to treat.                  </p>
                </div>
                <div className="content">
                  <div className="c-left">
                    <div className="overview" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Overview</h1>
                      <div className="con-overview">
                        <h2 className="h2">What is cardiovascular disease?</h2>
                        <p className="spp-des">
                          <div className="desImg">
                            <p className="des">
                            Cardiovascular disease is a group of diseases affecting your heart and blood vessels. These diseases can affect one or many parts of your heart and/or blood vessels. A person may be symptomatic (physically experiencing the disease) or asymptomatic (not feeling anything at all).</p>
                            <div className="img">
                                <img src={lung} alt="" />
                            </div>
                          </div>
                        </p>
                        <p className="spp-des">
                        Cardiovascular disease includes heart or blood vessel issues, including:                        
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                          Narrowing of the blood vessels in your heart, other organs or throughout your body.                          </li>
                          <li className="l-cover">
                          Heart and blood vessel problems present at birth.                          </li>
                          <li className="l-cover">
                          Heart valves that aren’t working right.</li>
                          <li className="l-cover">
                          Irregular heart rhythms.
                          </li>
                        </ul>
                        {/* common2 */}
                        <h3 className="h3">How common is cardiovascular disease?</h3>
                        <p className="spp-des">
                        Cardiovascular disease is the leading cause of death worldwide and in the U.S.
                        <br/><br/>Almost half of adults in the U.S. have some form of cardiovascular disease. It affects people of all ages, sexes, ethnicities and socioeconomic levels. One in three women and people assigned female at birth dies from cardiovascular disease.                        
                        </p>
                      </div>
                    </div>
                    <div className="symptoms" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Symptoms and Causes</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        What causes cardiovascular disease?
                        </h2>
                        <p className="spp-des">
                        The causes of cardiovascular disease can vary depending on the specific type. For example, <a href="javascript(0)" className="link-list">atherosclerosis</a> (plaque buildup in your arteries) causes coronary artery disease and peripheral artery disease. Coronary artery disease, scarring of your heart muscle, genetic problems or medications can cause arrhythmias. Aging, infections and rheumatic disease can cause valve diseases.                        </p>
                        <h3 className="h3">What are cardiovascular disease risk factors?</h3>
                        <p className="spp-des">You may be more likely to develop cardiovascular disease if you have risk factors such as:</p>
                        <ul className="list">
                          <li className="l-cover">High blood pressure (hypertension).</li>
                          <li className="l-cover">High cholesterol (hyperlipidemia).</li>
                          <li className="l-cover">Tobacco use (including vaping).</li>
                          <li className="l-cover">Type 2 diabetes.</li>
                          <li className="l-cover">Family history of heart disease.</li>
                          <li className="l-cover">Lack of physical activity.</li>
                          <li className="l-cover">Having excess weight or obesity.</li>
                          <li className="l-cover">Diet high in sodium, sugar and fat.</li>
                          <li className="l-cover">Overuse of alcohol.</li>
                          <li className="l-cover">Misuse of prescription or recreational drugs.</li>
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Preeclampsia</a> or toxemia.</li>
                          <li className="l-cover">Gestational diabetes.</li>
                          <li className="l-cover">Chronic inflammatory or autoimmune conditions.</li>
                        </ul>
                      </div>
                      <div className="con-overview">
                        <h2 className="h2">What are the symptoms of cardiovascular disease?</h2>
                        <p className="spp-des">
                        Cardiovascular disease symptoms can vary depending on the cause. Older adults and people assigned female at birth may have more subtle symptoms. However, they can still have serious cardiovascular disease.                        </p>

                        <h3 className="h3">Symptoms of heart issues</h3>
                        <ul className="list">
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list">Chest pain (angina).</a>
                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list">Shortness of breath (dyspnea).</a>
                          </li>
                          <li className="l-cover">
                          Chest pressure, heaviness or discomfort, sometimes described as a “belt around the chest” or a “weight on the chest.”
                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list">Dizziness or fainting.</a>
                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list">Fatigue or exhaustion.</a>
                          </li>
                        </ul>
                        <h3 className="h3">Symptoms of blockages in blood vessels throughout your body</h3>
                        <ul className="list">
                          <li className="l-cover">
                          Pain or cramps in your legs when you walk.                          </li>
                          <li className="l-cover">
                          Leg sores that aren’t healing.                          </li>
                          <li className="l-cover">
                          Cool or red skin on your legs.                          </li>
                          <li className="l-cover">
                          Swelling in your legs.                          </li>
                          <li className="l-cover">
                          Numbness in your face or a limb. This may be on only one side of your body.                          </li>
                          <li className="l-cover">
                          Difficulty with talking, seeing or walking.                 </li>
                        </ul>
                      </div>
                      <div className="con-overview">
                        <h2 className="h2">What conditions are cardiovascular diseases?</h2>
                        <p className="spp-des">
                        There are many different types of cardiovascular diseases, including but not limited to:
                        </p>
                        <h3 className="h3">Symptoms of heart issues</h3>
                        <ul className="list">
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list"><b>Arrhythmia:</b></a>
                            Problem with your heart’s electrical conduction system, which can lead to abnormal heart rhythms or heart rates.
                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list"><b>Valve disease:</b></a>
                            Tightening or leaking in your heart valves (structures that allow blood to flow from one chamber to another chamber or blood vessel).                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list"><b>Coronary artery disease: </b></a>
                            Problem with your heart’s blood vessels, such as blockages                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list"><b>Heart failure: </b></a>
                            Problem with heart pumping/relaxing functions, leading to fluid buildup and shortness of breath.                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list"><b>Peripheral artery disease:</b></a>
                            Issue with the blood vessels of your arms, legs or abdominal organs, such as narrowing or blockages.
                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list"><b>Deep vein thrombosis (DVT)</b></a>
                            Blockage in your veins, vessels that bring blood back from your brain/body to your heart.                          </li>
                        </ul>
                        
                      </div>
                    </div>
                    <div className="diagnosis" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Diagnosis and Tests</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        How is cardiovascular disease diagnosed?
                        </h2>
                        <p className="spp-des">
                        Your healthcare provider will perform a physical exam and ask questions about your symptoms, personal health and family health history. They may also order tests to help diagnose cardiovascular disease.
                        </p>
                      </div>
                      <div className="con-overview">
                        <h2 className="h2">
                        What tests might I have for cardiovascular disease?
                        </h2>
                        <p className="spp-des">
                        Some common tests to diagnose cardiovascular disease include:                          </p>
                        <ul className="list">
                          <li className="l-cover">
                            <b>Blood work</b> measures substances that indicate cardiovascular health, such as cholesterol, blood sugar levels and specific proteins. A provider can use a blood test to check for blood clotting issues as well.
                          </li>
                          <li className="l-cover">
                          <b>Ankle brachial index (ABI)</b> compares the blood pressure in your ankles and arms to diagnose peripheral artery disease.
                          </li>
                          <li className="l-cover">
                          <b>Electrocardiogram (EKG)</b> records your heart’s electrical activity.
                          </li>
                          <li className="l-cover">
                          <b>Ambulatory monitoring</b> uses wearable devices that track your heart rhythm and rates.
                          </li>
                          <li className="l-cover">
                          <b>Echocardiogram</b> uses sound waves to create an image of your heartbeat and blood flow.
                          </li>
                          <li className="l-cover">
                          <b>Ultrasound</b> uses sound waves to check blood flow in your legs or neck.
                          </li>
                          <li className="l-cover">
                          <b>Cardiac computerized tomography (CT) </b>uses X-rays and computer processing to create 3D images of your heart and blood vessels.
                          </li>
                          <li className="l-cover">
                          <b>Cardiac magnetic resonance imaging (MRI)</b> uses magnets and radio waves to create highly detailed images of your heart.
                          </li>
                          <li className="l-cover">
                          <b>MR angiogram or CT angiogram </b> uses an MRI or CT, respectively, to see blood vessels in your legs, head and neck.
                          </li>
                          <li className="l-cover">
                          <b>Stress tests </b> analyze how physical activity affects your heart in a controlled setting, using exercise or medications, to determine how your heart responds. This type of test can involve EKGs and/or imaging tests.
                          </li>
                          <li className="l-cover">
                          <b>Cardiac catheterization</b> uses sound waves to check blood flow in your legs or neck.
                          </li>
                          <li className="l-cover">
                          <b>Ultrasound</b> uses a catheter (thin, hollow tube) to measure pressure and blood flow in your heart.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="management" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Management and Treatment</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        How is cardiovascular disease treated?
                        </h2>
                        <p className="spp-des">
                        Treatment plans can vary depending on your symptoms and the type of cardiovascular disease you have. Cardiovascular disease treatment may include:                        </p>
                        <ul className="list">
                          <li className="l-cover">
                            <b>Lifestyle changes</b>
                          </li>
                          <li className="l-cover">
                          <b>Medications</b>
                          </li>
                          <li className="l-cover">
                          <b>Procedures or surgeries</b>
                          </li>
                          <li className="l-cover">
                          <b>Cardiac rehabilitation</b>
                          </li>
                          <li className="l-cover">
                          <b>Active surveillance:</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="Outlook" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Outlook / Prognosis</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        What is the outlook for people with cardiovascular disease?
                        </h2>{" "}
                        {/* common1 */}
                        <p className="spp-des">
                        Many people enjoy a high quality of life and can manage their cardiovascular disease with the help of their healthcare team. Your chances for a positive outcome are higher if you engage in your healthcare and follow your provider’s treatment plan. It’s important to take medications exactly as prescribed.
                        </p>
                        <h2 className="h2">
                        Does cardiovascular disease increase my risk of other conditions?
                        </h2>
                        <p className="spp-des">
                        Untreated cardiovascular disease can lead to serious complications.
                        <br/><br/>If you have cardiovascular disease, you may have a higher risk of:
                        </p>
                        <ul className="list">
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Heart attack.</a></li>
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Stroke.</a></li>
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Acute limb ischemia</a> (sudden blockage in your leg arteries).</li>
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Aortic dissection.</a></li>
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Sudden cardiac death.</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="question" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Living With</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        When should I see my healthcare provider?
                        </h2>{" "}
                        {/* common1 */}
                        <p className="spp-des">
                        Cardiovascular disease is often easier to treat when healthcare providers catch it early. That’s why it’s important to see a primary care provider every year. They can detect cardiovascular issues before symptoms start. If you have any signs of cardiovascular disease, you should see your provider immediately.                        
                        <br/><br/>Call 911 or seek emergency medical attention if you experience sudden:
                        </p>
                        
                        <ul className="list">
                          <li className="link-list">
                          Chest pain, pressure, heaviness or discomfort, especially with exertion.                          </li>
                          <li className="link-list">Fainting (syncope).</li>
                          <li className="link-list">
                          Severe shortness of breath, especially if it’s new or progressive.
                          </li>
                          <li className="link-list">
                          Pain or numbness in your arms/legs.                          </li>
                          <li className="link-list">
                          Ripping or tearing back pain.                          
                          </li>
                        </ul>
                        <b>A note from Cleveland Clinic</b>
                        <p className="spp-des">
                        Cardiovascular diseases are conditions that affect your heart and blood vessels. Without appropriate treatment, heart disease can lead to heart attacks or strokes. You can make lifestyle changes or take medications to manage cardiovascular disease. Earlier diagnosis can help with effective treatment. Many people live a full and active life with a cardiovascular disease.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="c-right">
                    <h1 className="h1">Relate illness</h1>
                    {illness.map((item, index) => (
                      <div className="box-relate" key={index} data-aos="zoom-in">
                        <div className="img">
                          <img src={item.img} alt="" />
                          <span className="new">new</span>
                        </div>
                        <div
                          className="des"
                          onClick={() => handleRelateIllness(item.id)}
                        >
                          <p className="name">
                            <b>{item.name}</b>
                          </p>
                          <p className="symptoms">
                            <i>{item.symtoms}</i>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="map_cate ">
              <Map_cate />
            </div>
          </main>
          <footer className="concluding">
            <Footer />
          </footer>
        </div>
      )}
    </>
  )
}

export default Cardiovascular;