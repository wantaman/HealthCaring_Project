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
import lung from "../../assets/image/lung.jpg";
import Aos from "aos";

const Cancer = () => {
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
                    <h1 className="h1">Cancer</h1>
                  </div>
                  <p className="spp-title">
                  Learning that you have cancer can be stressful and frightening. Knowing what to expect — from diagnosis to recovery — can empower you and help you take control of your health. This is a general overview of what cancer is, symptoms to watch for, how it’s detected, treatments and post-treatment care.
                  </p>
                </div>
                <div className="content">
                  <div className="c-left">
                    <div className="overview" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Overview</h1>
                      <div className="con-overview">
                        <h2 className="h2">What is cancer?</h2>
                        <p className="spp-des">
                          <div className="desImg">
                            <p className="des">
                            Cancer is a large group of diseases with one thing in common: They all happen when normal cells become cancerous cells that multiply and spread. Cancer is the second most common cause of death in the U.S. But fewer people are dying of cancer now than 20 years ago. Early detection and innovative treatments are curing cancer and helping people with cancer live longer. At the same time, medical researchers are identifying independent risk factors linked to developing cancer to help prevent people from developing cancer.
                            </p>
                            <div className="img">
                                <img src={lung} alt="" />
                            </div>
                          </div>
                        </p>
                        {/* common2 */}
                        <h3 className="h3">What is the difference between a normal cell and a cancerous cell?</h3>
                        <p className="spp-des">
                            Normally, cells follow instructions provided by <a href="javascript(0)" className="link-list">genes</a>. Genes set down rules for cells to follow, such as when to start and stop growing. Cancerous cells ignore the rules that normal cells follow:
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                          Normal cells divide and multiply in a controlled manner. Cancerous cells multiply uncontrollably.
                          </li>
                          <li className="l-cover">
                          Normal cells are programmed to die (apoptosis). Cancerous cells ignore those directions.
                          </li>
                          <li className="l-cover">
                          Normal cells for solid organs stay put. All cancerous cells are able to move around.                          </li>
                          <li className="l-cover">
                          Normal cells don’t grow as fast as cancerous cells.
                          </li>
                        </ul>

                        {/* common3 */}
                        <h3 className="h3">How does cancer start in your body?</h3>
                        <p className="spp-des">
                        Cancer starts when a gene or several genes mutate and create cancerous cells. These cells create cancer clusters, or tumors. Cancerous cells may break away from tumors, using your <a href="javascript(0)" className="link-list">lymphatic system</a> or bloodstream to travel to other areas of your body. (Healthcare providers call this <a href="javascript(0)" className="link-list">metastasis</a>.)
                        </p>
                        <p className="spp-des">
                        For example, a tumor in your breast may spread to your lungs, making it hard for you to breathe. In some types of <a href="javascript(0)" className="link-list">blood cancer</a>, abnormal cells in your bone marrow make abnormal blood cells that multiply uncontrollably. Eventually, the abnormal cells crowd out normal blood cells.
                        </p>

                        {/* common4 */}
                        <h3 className="h3">How common is cancer?</h3>
                        <p className="spp-des">
                            According to the American Cancer Society, 1 in 2 men and people assigned male at birth (AMAB) and 1 in 3 women and people assigned female at birth (AFAB) will develop cancer. As of 2019, more than 16.9 million people in the U.S. were living with cancer. The most common cancers in the United States are:
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                            <a href="javascrip(0)" className=" link-list"><b>Breast cancer</b></a>: Breast cancer is the most common type of cancer. It mostly affects women and people AFAB. But about 1% of all breast cancer cases affect men and people AMAB.
                          </li>
                          <li className="l-cover">
                            <b>Lung cancer</b>: Lung cancer is the second most common cancer. There are two types of lung cancer: <a href="javascript(0)" className="link-list">non-small cell cancer</a> and <a href="javascript(0)" className="link-list">small cell lung cancer</a>.
                          </li>
                          <li className="l-cover">
                          <a href="javascrip(0)" className=" link-list"><b>Prostate cancer</b></a>: This cancer affects 1 in 9 men and people AMAB.
                          </li>
                          <li className="l-cover">
                          <a href="javascrip(0)" className=" link-list"><b>Colorectal cancer</b></a>:  Colon cancer and <a href="javascript(0)" className="link-list">rectal cancer</a> affect different parts of your digestive system.
                          </li>
                          <li className="l-cover">
                          <a href="javascrip(0)" className=" link-list"><b>Blood cancers</b></a>: Leukemia and lymphoma are the most common blood cancers.
                          </li>
                        </ul>

                        {/* common5 */}
                        <h3 className="h3">Who’s affected by cancer?</h3>
                        <p className="spp-des">
                        Almost anyone may develop cancer, but data show cancer cases vary based on race and sex. According to the 2022 Annual Report on Cancer, the disease:                        </p>
                        <ul className="list">
                          <li className="l-cover">
                          Affects slightly more men and people AMAB than women and people AFAB.                          </li>
                          <li className="l-cover">
                          Affects more Black men (AMAB) than people in other racial groups                          </li>
                          <li className="l-cover">
                          Affects more women (AFAB) who are American Indian or Alaska natives than people in other racial groups.                          </li>
                        </ul>
                        <p className="spp-des">
                        Almost anyone may develop cancer, but it typically affects people aged 60 and older.
                        </p>
                      </div>
                    </div>
                    <div className="symptoms" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Symptoms and Causes</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                            What are cancer symptoms?
                        </h2>
                        <p className="spp-des">
                        Cancer is a complicated disease. You can have cancer for years without developing symptoms. Other times, cancer may cause noticeable symptoms that get worse very quickly. Many cancer symptoms resemble other, less serious illnesses. Having certain symptoms doesn’t mean you have cancer. In general, you should talk to a healthcare provider anytime there’s a change in your body that lasts for more than two weeks.
                        </p>
                        <h3 className="h3">First symptoms of cancer</h3>
                        <p className="spp-des">Some common early cancer symptoms include</p>
                        <ul className="list">
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Unexplained weight loss.</a></li>
                          <li className="l-cover">Chronic <a href="javascript(0)" className="link-list">tiredness</a>.</li>
                          <li className="l-cover">Persistent pain.</li>
                          <li className="l-cover"><a href="javascript(0)" className="link-list">Fever </a>that occurs mostly at night.</li>
                          <li className="l-cover">Skin changes, particularly moles that change shape and size or new moles.</li>
                        </ul>
                        <p className="spp-des">
                        Left untreated, cancer may cause additional symptoms, including:
                        </p>
                        <ul className="list">
                          <li className="l-cover">Bruising or bleeding more easily.</li>
                          <li className="l-cover">Lumps or bumps under your skin that don’t go away.</li>
                          <li className="l-cover">Difficulty breathing.</li>
                          <li className="l-cover">Difficulty swallowing.</li>
                        </ul>
                      </div>
                      <div className="con-overview">
                        <h2 className="h2">What causes cancer?</h2>
                        <p className="spp-des">
                        Cancer is a <a href="javascript(0)" className="link-list">genetic disorder</a> . It happens when genes that manage cell activity mutate and create abnormal cells that divide and multiply, eventually disrupting how your body works.
                        </p>
                        <p className="spp-des">
                        Medical researchers estimate 5% to 12% of all cancers are caused by <a href="javascript(0)" className="link-list">inherited genetic mutations</a>  that you can’t control.
                        </p>
                        <p className="spp-des">
                        More frequently, cancer happens as an acquired genetic mutation. Acquired genetic mutations happen over the course of your life. Medical researchers have identified several risk factors that increase your chance of developing cancer.                        
                        </p>
                        <h3 className="h3">Cancer risk factors you can control</h3>
                        <ul className="list">
                          <li className="l-cover">
                            <a href="javascript(0)" className="link-list"><b>Smoking</b></a> : Smoking cigarettes and cigars and using e-cigarettes increases your chance of developing lung, pancreatic, esophageal and oral cancer.
                          </li>
                          <li className="l-cover">
                            <b>Diet</b>: Eating high-fat or high-sugar foods can increase your risk for many types of cancer. You’re also more vulnerable to disease if you don’t get enough exercise.
                          </li>
                          <li className="l-cover">
                          <b>Environment</b>: Exposure to toxins in your environment — such as asbestos, pesticides and radon — can eventually lead to cancer.

                          </li>
                          <li className="l-cover">
                            <b>Radiation exposure</b>: Ultraviolet (UV) radiation from the sun significantly increases your risk of developing skin cancer. Over-exposure to radiation treatment can also be a risk factor.
                          </li>
                          <li className="l-cover">
                            <b>Hormone therapy</b>: Women and people AFAB taking hormone replacement therapy may have an increased risk for breast cancer and endometrial cancer.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="diagnosis" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Diagnosis and Tests</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        How do healthcare providers diagnose cancer?
                        </h2>
                        <p className="spp-des">
                        Healthcare providers begin a cancer diagnosis by doing a comprehensive physical examination. They’ll ask you to describe your symptoms. They may ask about your family medical history. They may also do the following tests:
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                          Blood tests.
                          </li>
                          <li className="l-cover">
                          Imaging tests.
                          </li>
                          <li className="l-cover">
                          Biopsies
                          </li>
                        </ul>
                        {/* common2 */}
                        <h3 className="h3">Blood tests</h3>
                        <ul className="list">
                          <li className="l-cover">
                                <a href="javascript(0)" className="link-list"><b>Complete blood count (CBC)</b>:</a>A CBC test measures and counts your blood cells.
                          </li>
                          <li className="l-cover">
                                <b>Tumor markers</b>: Tumor markers are substances that cancer cells release or that your normal cells release in response to cancer cells.
                          </li>
                          <li className="l-cover">
                          <b>Blood protein tests</b>:  Healthcare providers use a process called electrophoresis to measure immunoglobulins. Your immune system reacts to certain cancers by releasing immunoglobulins.

                          </li>
                          <li className="l-cover">
                          <b>Circulating tumor cell tests</b>: Cancerous tumors may shed cells. Tracking tumor cells helps healthcare providers monitor cancer activity.

                          </li>
                        </ul>

                        {/* common2 */}
                        <h3 className="h3">Imaging tests</h3>
                        <p className="spp-des"><a href="javascript(0)" className="link-list">Imaging tests</a> may include:</p>
                        <ul className="list">
                          <li className="l-cover">
                                <a href="javascript(0)" className="link-list"><b>Computed tomography (CT) scan</b>:</a> CT scans check for cancerous tumors’ location and impact on your organs and bones.
                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list"><b>X-rays</b>:</a> X-rays use safe amounts of radiation to create images of your bones and soft tissues.
                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list"><b>Positron emission test (PET) scan</b>:</a> PET scans produce images of your organs and tissues at work. Healthcare providers may use this test to detect early signs of cancer.

                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list"><b>Ultrasound</b>:</a> An ultrasound uses high-intensity sound waves that show structures inside of your body.
                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list"><b>Magnetic resonance imaging (MRI):</b>:</a> MRIs use a large magnet, radio waves and a computer to create images of your organs and other structures inside of your body.
                          </li>
                          <li className="l-cover">
                          <a href="javascript(0)" className="link-list"><b>Iodine meta-iodobenzylguanidine (MIGB)</b>:</a> This nuclear imaging test helps detect cancer, including carcinoid tumors and neuroblastoma.
                          </li>
                        </ul>
                      </div>
                      <div className="con-overview">
                        <h2 className="h2">
                        How is cancer stage determined?
                        </h2>
                        <p className="spp-des">
                        Healthcare providers use <a href="javascript(0)" className="link-list">cancer staging systems</a> to plan treatment and develop a prognosis or expected outcome. TNM is the most widely used cancer staging system. T stands for primary tumor. N stands for lymph nodes and indicates whether a tumor has spread to your lymph nodes. M stands for metastasis, when cancer spreads.                        </p>

                        {/* common2 */}
                        <h3 className="h3">What are the four stages of cancer?</h3>
                        <p className="spp-des">Most cancers have four stages. The specific stage is determined by a few different factors, including the tumor’s size and location:</p>
                        <ul className="list">
                          <li className="l-cover">
                          Stage I: The cancer is localized to a small area and hasn’t spread to lymph nodes or other tissues.                          </li>
                          <li className="l-cover">
                          Stage II: The cancer has grown, but it hasn’t spread.                          </li>
                          <li className="l-cover">
                          Stage III: The cancer has grown larger and has possibly spread to lymph nodes or other tissues.
                          </li>
                          <li className="l-cover">
                          Stage IV: The cancer has spread to other organs or areas of your body. This stage is also referred to as metastatic or advanced cancer.
                          </li>
                        </ul>

                        {/* common2 */}
                        <p className="spp-des">Though stages one through four are the most common, there’s also a Stage 0. This earliest phase describes cancer that’s still localized to the area in which it started. Cancers that are still in Stage 0 are usually easily treatable and are considered pre-cancerous by most healthcare providers.</p>
                      </div>
                    </div>
                    <div className="management" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Management and Treatment</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        How do healthcare providers treat cancer?
                        </h2>
                        <p className="spp-des">
                        Healthcare providers may use several different treatments, sometimes combining treatments based on your situation. Common cancer treatments include:
                        </p>
                        <ul className="list">
                          <li className="l-cover">
                            <a href="javascript:void(0)" className="link-list">
                              <b>Chemotherapy</b>
                            </a>:
                            Chemotherapy is one of the most common cancer treatments. It uses powerful drugs to destroy cancer cells. You may receive chemotherapy in pill form or intravenously (through a needle into a vein). In some cases, providers may be able to direct chemotherapy to the specific area affected.
                          </li>
                          <li className="l-cover">
                            <a href="javascript:void(0)" className="link-list">
                              <b>Radiation therapy</b>
                            </a>:
                            This treatment kills cancer cells with high dosages of radiation. Your healthcare provider may combine radiation therapy and chemotherapy.                          
                            </li>
                            <li className="l-cover">
                              <b>Surgery</b>:
                            This treatment kills cancer cells with high dosages of radiation. Your healthcare provider may combine radiation therapy and chemotherapy.                          
                            </li>
                            <li className="l-cover">
                            <a href="javascript:void(0)" className="link-list">
                              <b>Hormone therapy</b>
                            </a>:
                            Sometimes, providers prescribe hormones that block other cancer-causing hormones. For example, men and people assigned male at birth who have prostate cancer might receive hormones to keep testosterone (which contributes to prostate cancer) lower than usual.                            
                            </li>
                            <li className="l-cover">
                            <a href="javascript:void(0)" className="link-list">
                              <b>Immunotherapy for cancer</b>
                            </a>:
                            Immunotherapy is a cancer treatment that engages your immune system to fight the disease. The treatment may be called biological therapy.
                            </li>
                            <li className="l-cover">
                            <a href="javascript:void(0)" className="link-list">
                              <b>Targeted therapy for cancer</b>
                            </a>:
                            Targeted therapy is a cancer treatment that targets the genetic changes or mutations that turn healthy cells into cancer cells.                            
                            </li>
                            <li className="l-cover">
                            <a href="javascript:void(0)" className="link-list">
                              <b>Bone marrow transplant</b>
                            </a>:
                            Also called stem cell transplantation, this treatment replaces damaged stem cells with healthy ones. Autologous transplantation uses your supply of healthy stem cells. Allogeneic transplantation uses stem cells donated by another person.
                            </li>
                        </ul>
                      </div>
                    </div>
                    <div className="Outlook" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Outlook / Prognosis</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        What is the prognosis/outlook for cancer?
                        </h2>{" "}
                        {/* common1 */}
                        <p className="spp-des">
                        Right now, more people are being cured of cancer or living longer with cancer. In general, people with cancer that were diagnosed and treated before it could spread have a good outlook.
                        </p>
                        {/* common2 */}
                        <p className="spp-des">
                        But you’re unique, and so is your cancer prognosis. Your healthcare providers will base your prognosis on factors such as
                        </p>
                        {/* common3 */}
                        <p className="spp-des">
                        Your healthcare provider is your best resource for prognosis information. They know your situation and they know you.
                        </p>
                      </div>
                    </div>
                    <div className="question" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom">
                      <h1 className="h1">Living With</h1>
                      <div className="con-overview">
                        <h2 className="h2">
                        How do I live with cancer?
                        </h2>{" "}
                        {/* common1 */}
                        <p className="spp-des">
                        Self-care is an important part of living with cancer. Some self-care suggestions include:
                        </p>
                        
                        <ul className="list">
                          <li className="link-list">
                          Establish good eating and exercise habits. Ask to speak with a nutritionist for healthy menu ideas.
                          </li>
                          <li className="link-list">Fatigue is a common symptom and treatment side effect. Pay attention to your body and rest when you need to, not just when you can.</li>
                          <li className="link-list">
                          You may be living with cancer for a long time. That’s good news, of course, but chronic illness may be challenging. Talking to a mental health professional or finding a support group may help you navigate challenges.
                          </li>
                          
                        </ul>
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
  );
};

export default Cancer;
