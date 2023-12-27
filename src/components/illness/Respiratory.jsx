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

const Respiratory = () => {
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
  useEffect(() => {
    handleSearch();
    // Aos.init();
  }, [query]);

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
  }, []);

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
                    <Link to={"/Respiratory Disease"}>Respiratory Disease</Link>
                  </li>
                </ul>
              </div>
              {/* What is infection  */}
              <div className="main">
                <div className="con-title">
                  <div className="title">
                    <h1 className="h1">
                      Respiratory Diseases: Symptoms, Causes and Risk Factors
                    </h1>
                  </div>
                  <p className="spp-title">
                    Are you one of the millions of people who suffer from{" "}
                    <a
                      href="javascript(0)"
                      style={{ color: "#55acee" }}
                      className="link-list"
                    >
                      respiratory problems
                    </a>
                    ? Whether it’s a common cold,{" "}
                    <a
                      href="javascript(0)"
                      style={{ color: "#55acee" }}
                      className="link-list"
                    >
                      asthma
                    </a>
                    , or a more serious respiratory disease, such as COPD,
                    respiratory disorders can make breathing challenging and
                    significantly impact your quality of life. Thus,
                    understanding respiratory disease symptoms, causes, and risk
                    factors is essential to control and prevent them. In this
                    blog, we’ll dive into the world of respiratory disorders,
                    exploring the different types of respiratory diseases, the
                    causes of COPD, and the risk factors associated with
                    respiratory problems. So, sit back, relax, and join us as we
                    journey into the fascinating world of respiratory diseases.
                  </p>
                </div>
                <div className="content">
                  <div className="c-left">
                    <div className="overview">
                      <div className="con-overview">
                        <h2 className="h2">What is Respiratory Disease?</h2>
                        <p className="spp-des">
                          This organ plays a vital role in exchanging gas flow
                          in the human body: the trachea (windpipe), lungs,
                          diaphragms, etc. All these functions together in a
                          proper order to create uninterrupted airflow within
                          the body.
                          <br />
                          <br /> When people have respiratory disorders, their
                          tissues and organs, which exchange oxygen and carbon
                          dioxide, do not work properly. It decreases the oxygen
                          saturation level (SpO2). As a result, people who have
                          been afflicted experience anxiousness, dizziness,
                          disorientation, and bewilderment.
                        </p>
                        {/* common2 */}
                        <h2 className="h2">
                          Obstructive vs Restrictive Respiratory System
                        </h2>
                        <p className="spp-des">
                          Chronic respiratory diseases can be classified as
                          either obstructive or restrictive.
                        </p>
                        <h3>Obstructive</h3>
                        <p className="spp-des">
                          When a respiratory condition causes congested or
                          clogged airways, it is referred to as obstructive.
                          This hinders the lungs’ ability to exhale. Common
                          asthma triggers obstructive respiratory conditions
                          that irritate airways, including stress, pollen,
                          chemical gases, and other allergens.
                          <br />
                          <br />
                          Cystic fibrosis, chronic obstructive pulmonary disease
                          (COPD), bronchiectasis, and alpha-1 antitrypsin
                          deficiency are more instances of obstructive
                          respiratory illnesses.
                        </p>
                        <h3>Restrictive</h3>
                        <p className="spp-des">
                          When the lungs cannot expand to their full capacity,
                          respiratory diseases are classified as restrictive.
                          Pulmonary fibrosis, lung cancer,{" "}
                          <a href="javascript(0)" className="link-list">
                            chronic
                          </a>{" "}
                          <a href="javascript(0)" className="link-list">
                            obstructive
                          </a>{" "}
                          <a href="javascript(0)" className="link-list">
                            pulmonary
                          </a>{" "}
                          <a href="javascript(0)" className="link-list">
                            disease
                          </a>{" "}
                          (COPD), and sarcoidosis are some examples of
                          restrictive respiratory diseases.
                        </p>
                      </div>
                    </div>
                    <div className="symptoms">
                      <div className="con-overview">
                        <h2 className="h2">
                          Different Types of Respiratory Disorders?
                        </h2>
                        <p className="spp-des">
                          Here is a list of some common respiratory problems
                          developing breathing difficulties in the human body.
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                            <b>Chronic Obstructive Pulmonary Disease (COPD)</b>:
                            COPD is a type of{" "}
                            <a href="javascript(0)" className="link-list">
                              lung
                            </a>{" "}
                            disease that obstructs the air passage of the lungs,
                            making it difficult to function effectively.
                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list">
                              Asthma
                            </a>
                            : Due to chronic coughing or other factors, the
                            windpipes swell and narrow, impairing natural
                            airflow in asthma.{" "}
                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list">
                              Emphysema
                            </a>
                            : The alveoli, or tiny air sacs in the lungs,
                            deteriorate and may even rupture in emphysema
                            patients.
                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list">
                              Pleural Effusion
                            </a>
                            : Commonly referred to as “water on the lungs,”
                            occurs when surplus fluids build up between the
                            pleural layers.
                          </li>
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list">
                              Chronic Bronchitis
                            </a>
                            : Chronic bronchitis is a type of inflammation in
                            the breathing tubes or bronchi.{" "}
                          </li>
                        </ul>

                        <h3>Chronic Obstructive Pulmonary Disease (COPD)</h3>
                        <p className="spp-des">
                          COPD is a type of lung disease that obstructs the air
                          passage of the lungs, making it difficult to function
                          effectively. COPD’s primary lung disease symptoms
                          include cough, sputum production, breathing issues,
                          and wheezing. These respiratory problems are caused
                          due to long-term exposure to pollution and cigarette
                          smoke. People affected by this disease are vulnerable
                          to other{" "}
                          <a href="javascript(0)" className="link-list">
                            diseases related to the heart
                          </a>{" "}
                          and lungs.
                        </p>

                        <h3>Asthma</h3>
                        <p className="spp-des">
                          Due to chronic coughing or other factors, the
                          windpipes swell and narrow, impairing natural airflow
                          in asthma. Asthma triggers, however, vary from person
                          to person. Airborne allergens such as dust mites,
                          pollens, cat dander, and others can cause asthma
                          attacks in some people.
                        </p>
                        <h3>Emphysema</h3>
                        <p className="spp-des">
                          The alveoli, or tiny air sacs in the lungs,
                          deteriorate and may even rupture in emphysema
                          patients. This can make it difficult for the body to
                          remove air, preventing it from absorbing new,
                          oxygenated air.{" "}
                        </p>
                        <h3>Pleural Effusion</h3>
                        <p className="spp-des">
                          A respiratory disease called pleural effusion,
                          commonly referred to as “water on the lungs,” occurs
                          when surplus fluids build up between the pleural
                          layers. It can cause breathing issues, and severe
                          chest discomfort is the result.
                        </p>
                        <h3>Chronic Bronchitis</h3>
                        <p className="spp-des">
                          Chronic bronchitis is a type of inflammation in the
                          breathing tubes or bronchi. These airways create an
                          excessive amount of mucus as a result of this
                          inflammation. Patients may experience intense chest
                          pain and a strong urge to cough.
                          <br />
                          <br />
                          If you are suffering from any kind of respiratory
                          disorder, get in touch with the best hospital in
                          Delhi. The doctors will help you find your disease and
                          give the treatment accordingly.
                        </p>
                      </div>
                      <div className="con-overview">
                        <h2 className="h2">
                          What are the Causes of Respiratory Diseases?
                        </h2>
                        <p className="spp-des">
                          The most common respiratory disease causes are as
                          follows –
                        </p>
                        <p className="spp-des">
                          <b>Smoking and Air Pollution</b>: Smoking’s toxins and
                          air pollution cause damage to the lungs’ alveoli
                          (alveolar membrane). Therefore, it cannot properly
                          immerse gaseous oxygen into the blood. As a result,
                          the patients experience discomfort and shortness of
                          breath.
                        </p>
                        <p className="spp-des">
                          <b>Allergies</b>: Some people’s immune systems react
                          poorly to specific chemicals, such as pollen, dust, or
                          animal dander. When allergic people are exposed to
                          these allergens, they experience breathing
                          difficulties.
                        </p>
                        <p className="spp-des">
                          <b>Viral Infection</b>: One of the main causes of
                          respiratory disorders is viral infection. Some viruses
                          enter alveoli and produce inflammation, such as
                          influenza viruses, respiratory adenoviruses, and
                          respiratory syncytial viruses.
                        </p>
                        <p className="spp-des">
                          <b>Bacterial Infection</b>: Respiratory diseases can
                          also be brought on by some bacteria, including otitis,
                          sinusitis, and pneumonia.{" "}
                        </p>
                        <p className="spp-des">
                          Some additional respiratory disease causes are as
                          follows –
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                            Chest trauma and consequent bleeding
                          </li>
                          <li className="l-cover">
                            Abdominal and chest infection
                          </li>
                          <li className="l-cover">
                            Inflammatory or autoimmune diseases
                          </li>
                          <li className="l-cover">Tuberculosis</li>
                        </ul>
                      </div>
                    </div>
                    <div className="diagnosis">
                      <div className="con-overview">
                        <h2 className="h2">
                          What are the Symptoms of Respiratory Disease?
                        </h2>
                        <p className="spp-des">
                          The main drawback of COPD is that the symptoms are not
                          noticeable until significant lung damage has already
                          been done. The condition tends to worsen over some
                          time due to{" "}
                          <a href="javascript(0)" className="link-list">
                            excessive smoking
                          </a>
                          . In the case of chronic bronchitis, the common
                          symptoms are mucus production and daily coughing,
                          which prevails for 3 months to a couple of years. A
                          few other lung disease symptoms are as under:
                        </p>
                        <ul className="list">
                          <li className="l-cover">Wheezing</li>
                          <li className="l-cover">
                            Shortness of breath during any physical activity
                          </li>
                          <li className="l-cover">Chest congestion</li>
                          <li className="l-cover">
                            An urgency to clear the throat after waking up every
                            morning
                          </li>
                          <li className="l-cover">
                            Generation of cough that can be greenish, yellow or
                            clear in colour
                          </li>
                          <li className="l-cover">Lack of energy</li>
                          <li className="l-cover">
                            Frequent respiratory infections
                          </li>
                          <li className="l-cover">
                            Swelling in legs, feet or ankle
                          </li>
                          <li className="l-cover">
                            Blueness in cyanosis or lips
                          </li>
                          <li className="l-cover">Unnoticed weight loss</li>
                          <li className="l-cover">
                            Fatigue due to oxygen shortage
                          </li>
                        </ul>
                      </div>
                      <div className="con-overview">
                        <h2 className="h2">
                          What Are Some Common Respiratory Disease Treatments?
                        </h2>
                        <p className="spp-des">
                          Doctors conduct the following treatment procedure to
                          cure respiratory diseases –
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                            <b>Medications</b>: To widen patients’ airways and
                            treat inflammation, the best pulmonologist in Delhi
                            NCR can suggest some medications such as
                            bronchodilators, oral steroids, and antibiotics.
                          </li>
                          <li className="l-cover">
                            <b>Pulmonary Rehabilitation</b>: Physicians guide
                            patients in various strategies and activities during
                            pulmonary rehabilitation. Patients who practice
                            these see an improvement in their body’s oxygen
                            levels.
                          </li>
                          <li className="l-cover">
                            <b>Supplemental Oxygen</b>: Patients who have major
                            respiratory issues require assistance from a
                            constant oxygen supply at home. In certain
                            instances, they require more oxygen only after
                            exertion.
                          </li>
                          <li className="l-cover">
                            <b>Nutrition Therapy</b>: This cannot be used as a
                            stand-alone therapy for certain illnesses. However,
                            doctors pay close attention to their patients’
                            dietary needs. It speeds up their healing process.
                          </li>
                          <li className="l-cover">
                            <b>Surgery</b>: Patients must have surgery for some
                            respiratory conditions, including COPD and pleural
                            effusion. The portion of the lungs affected by these
                            disorders is removed via surgery.{" "}
                          </li>
                        </ul>

                        {/* common2 */}
                        <p className="spp-des">
                          PSRI Hospital is the best{" "}
                          <a href="javascript(0)" className="link-list">
                            multispeciality hospital in Delhi
                          </a>{" "}
                          and has an expert team of professional doctors to
                          treat various respiratory disorders.
                        </p>
                      </div>
                    </div>
                    <div className="management">
                      <div className="con-overview">
                        <h2 className="h2">Conclusion</h2>
                        <p className="spp-des">
                          You can control these risk factors by adopting a
                          healthy lifestyle. Try eating healthily and indulge
                          yourself in physical activities like walking and
                          exercising. Make sure you quit smoking immediately to
                          avert any risk of any kind of respiratory problems. If
                          unattended, these can become more severe.
                        </p>
                        <p className="spp-des">
                          Stay alert to any changes in your body functions and
                          get a consultation from PSRI Hospital, the{" "}
                          <a href="javascript(0)" className="link-list">
                            best multispeciality hospital in New Delhi
                          </a>
                          . Our experienced team of doctors provides holistic
                          care in diagnosing and treating respiratory disorders.
                          Find expert pre and post-operative care only at{" "}
                          <a href="javascript(0)" className="link-list">
                            PSRI Hospital
                          </a>
                          .{" "}
                        </p>
                      </div>
                    </div>
                    <div className="question">
                      <div className="con-overview">
                        <h2 className="h2">FAQs</h2> {/* common1 */}
                        <p className="spp-des">
                          <b>
                            Q 1: What are some common respiratory disorders?
                          </b>
                        </p>
                        <p className="spp-des">
                          <b>Ans</b>: Some common respiratory diseases include
                          asthma, chronic obstructive pulmonary disease (COPD),
                          pneumonia, influenza, bronchitis, and tuberculosis.
                        </p>
                        {/* common2 */}
                        <p className="spp-des">
                          <b>
                            Q 2: What is the role of genetics in respiratory
                            diseases?
                          </b>
                        </p>
                        <p className="spp-des">
                          <b>Ans</b>: Genetics can play a role in developing
                          certain respiratory diseases, such as cystic fibrosis
                          and alpha-1 antitrypsin deficiency. Individuals with a
                          family history of these conditions may be at increased
                          risk and should discuss this with their healthcare
                          provider.{" "}
                        </p>
                        {/* common3 */}
                        <p className="spp-des">
                          <b>Q 3: What are the respiratory disease symptoms?</b>
                        </p>
                        <p className="spp-des">
                          <b>Ans</b>: The symptoms of respiratory diseases can
                          vary depending on the specific disease, but some
                          common symptoms include shortness of breath, coughing,
                          wheezing, chest tightness, fatigue, and fever.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="c-right">
                    <h1 className="h1">Relate illness</h1>
                    {illness.map((item, index) => (
                      <div className="box-relate" key={index}>
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
  );
};

export default Respiratory;
