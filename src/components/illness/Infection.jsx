import React, { useEffect, useState } from "react";
import "../../style/illness/illnessType.scss";
import Header from "../sub_components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import Map_cate from "../sub_components/Map_cate";
import Footer from "../sub_components/Footer";
import Loading from "../sub_components/Loading"

const Infection = () => {
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
    {
      loading? (
        <div>
          <Loading/>
        </div>
      ):(
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
                  <Link to={"/Infection illness"}>Infection illness</Link>
                </li>
              </ul>
            </div>
            {/* What is infection  */}
            <div className="main">
              <div className="con-title">
                <div className="title">
                  <h1 className="h1">Infection Diseases</h1>
                </div>
                <p className="spp-title">
                  Infectious diseases are illnesses caused by harmful agents
                  (pathogens) that get into your body. The most common causes
                  are viruses, bacteria, fungi and parasites. Infectious
                  diseases usually spread from person to person, through
                  contaminated food or water and through bug bites. Some
                  infectious diseases are minor and some are very serious.
                </p>
              </div>
              <div className="content">
                <div className="c-left">
                  <div className="overview">
                    <h1 className="h1">Overview</h1>
                    <div className="con-overview">
                      <h2 className="h2">What are infectious diseases?</h2>
                      <p className="spp-des">
                        Infectious diseases are illnesses caused by harmful
                        organisms (pathogens) that get into your body from the
                        outside. Pathogens that cause infectious diseases are
                        viruses, bacteria, fungi, parasites and, rarely, prions.
                        You can get infectious diseases from other people, bug
                        bites and contaminated food, water or soil.
                      </p>
                    </div>
                    <div className="con-overview">
                      <h2 className="h2">
                        What’s the difference between infectious diseases and
                        noninfectious diseases?
                      </h2>
                      <p className="spp-des">
                        Infectious diseases are caused by harmful organisms that
                        get into your body from the outside, like viruses and
                        bacteria. Noninfectious diseases aren’t caused by
                        outside organisms, but by genetics, anatomical
                        differences, getting older and the environment you live
                        in. You can’t get noninfectious diseases from other
                        people, by getting a bug bite or from your food.
                        <br />
                        <br />
                        The flu, measles, HIV, strep throat, COVID-19 and
                        salmonella are all examples of infectious diseases.
                        Cancer, diabetes, congestive heart failure and
                        Alzheimer’s disease are all examples of noninfectious
                        diseases.
                      </p>
                    </div>
                    <div className="con-overview">
                      <h2 className="h2">
                        What are the types of infectious diseases?
                      </h2>
                      <p className="spp-des">
                        Infectious diseases can be viral, bacterial, parasitic
                        or fungal infections. There’s also a rare group of
                        infectious diseases known as transmissible spongiform
                        encephalopathies (TSEs)
                      </p>
                      <ul className="list">
                        <li className="l-cover">
                          <b>Viral infections.</b> Viruses are a piece of
                          information (DNA or RNA) inside of a protective shell
                          (capsid). Viruses are much smaller than your cells and
                          have no way to reproduce on their own. They get inside
                          your cells and use your cells’ machinery to make
                          copies of themselves.
                        </li>
                        <li className="l-cover">
                          <b>Bacterial infections.</b> Bacteria are
                          single-celled organisms with their instructions
                          written on a small piece of DNA. Bacteria are all
                          around us, including inside of our body and on our
                          skin. Many bacteria are harmless or even helpful, but
                          certain bacteria release toxins that can make you
                          sick.
                        </li>
                        <li className="l-cover">
                          <b>Fungal infections.</b> Like bacteria, there are
                          many different fungi. They live on and in your body.
                          When your fungi get overgrown or when harmful fungi
                          get into your body through your mouth, your nose or a
                          cut in your skin, you can get sick.
                        </li>
                        <li className="l-cover">
                          <b>Parasitic infections.</b> Parasites use the bodies
                          of other organisms to live and reproduce. Parasites
                          include worms (helminths) and some single-celled
                          organisms (protozoa).
                        </li>
                        <li className="l-cover">
                          <b>
                            Transmissible spongiform encephalopathies
                            (TSEs/prion diseases).
                          </b>{" "}
                          TSEs are caused by prions — faulty proteins that cause
                          other proteins in your body, usually in your brain, to
                          become faulty as well. Your body is unable to use
                          these proteins or get rid of them, so they build up
                          and make you sick. Prions are an extremely rare cause
                          of infectious diseases.
                        </li>
                      </ul>
                    </div>
                    <div className="con-overview">
                      <h2 className="h2">
                        What are common infectious diseases?
                      </h2>
                      <p className="spp-des">
                        Infectious diseases are extremely common worldwide, but
                        some are more common than others. For instance, each
                        year in the United States, 1 out of every 5 people is
                        infected with the influenza virus, but less than 300
                        people are diagnosed with prion diseases.
                        <br />
                        <br />
                        Some of the most common infectious diseases are listed
                        here by type.
                      </p>
                      {/* common 1 */}
                      <h3 className="h3">
                        Common infectious diseases caused by viruses:
                      </h3>
                      <ul className="list">
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Common cold.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            The flu (influenza).
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            COVID-19.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Stomach flu (gastroenteritis).
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Hepatitis.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Respiratory syncytial virus (RSV).
                          </a>
                        </li>
                      </ul>
                      {/* common 2 */}
                      <h3 className="h3">
                        Common infectious diseases caused by bacteria:
                      </h3>
                      <ul className="list">
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Strep throat.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Salmonella.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Tuberculosis.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Chlamydia, gonorrhea{" "}
                          </a>
                          and other{" "}
                          <a href="javascript:void(0)" className="link-list">
                            sexually transmitted infections (STIs).
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Urinary tract infections (UTIs).
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Clostridioides difficile (C. diff).
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            E. coli.
                          </a>
                        </li>
                      </ul>
                      {/* common 3 */}
                      <h3 className="h3">
                        Common infectious diseases caused by fungi:
                      </h3>
                      <ul className="list">
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Ringworm (like athlete’s foot).
                          </a>
                        </li>
                        <li className="l-cover">Fungal nail infections.</li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Vaginal candidiasis{" "}
                          </a>
                          (vaginal yeast infection).
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Thrush.
                          </a>
                        </li>
                      </ul>
                      {/* common 4 */}
                      <h3 className="h3">
                        Common infectious diseases caused by parasites:
                      </h3>
                      <ul className="list">
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Giardiasis.
                          </a>
                        </li>
                        <li className="l-cover">Toxoplasmosis.</li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Hookworms.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a className="link-list" href="javascript:void(0)">
                            Pinworms.
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="con-overview">
                      <h2 className="h2">
                        Who is most at risk for getting infectious diseases?
                      </h2>
                      <p className="spp-des">
                        Anyone can get an infectious disease. You may be at an
                        increased risk if your immune system is weakened or if
                        you travel to areas with certain highly transmissible
                        diseases.
                        <br />
                        <br />
                        People at higher risk of infectious disease include:{" "}
                      </p>
                      {/* common 1 */}
                      <ul className="list">
                        <li className="l-cover">
                          Those with suppressed or compromised immune systems,
                          such as those receiving cancer treatments, living with
                          HIV or on certain medicines.
                        </li>
                        <li className="l-cover">
                          Young children, pregnant people and adults over 60.
                        </li>
                        <li className="l-cover">
                          Those who are unvaccinated against common infectious
                          diseases.{" "}
                        </li>
                        <li className="l-cover">Healthcare workers. </li>
                        <li className="l-cover">
                          People traveling to areas where they may be exposed to
                          mosquitoes that carry pathogens such as{" "}
                          <a href="javascript:void(0)" className="link-list">
                            malaria
                          </a>
                          ,{" "}
                          <a href="javascript:void(0)" className="link-list">
                            dengue virus
                          </a>{" "}
                          and{" "}
                          <a href="javascript:void(0)" className="link-list">
                            Zika viruses
                          </a>
                          .{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="con-overview">
                      <h2 className="h2">
                        What complications are associated with infectious
                        diseases?{" "}
                      </h2>
                      <p className="spp-des">
                        Many infectious diseases resolve without complications,
                        but some can cause lasting damage. Serious and
                        life-threatening complications of various infectious
                        diseases include:
                      </p>
                      {/* common 1 */}
                      <ul className="list">
                        <li className="l-cover">
                          <a href="javascript:void(0)" className="link-list">
                            <b>Dehydration: </b>
                          </a>
                          Fever, vomiting, diarrhea.
                        </li>
                        <li className="l-cover">
                          <a href="javascript:void(0)" className="link-list">
                            <b>Pneumonia: </b>
                          </a>
                          Respiratory illness (viral or bacterial).
                        </li>
                        <li className="l-cover">
                          <a href="javascript:void(0)" className="link-list">
                            <b>Sepsis: </b>
                          </a>
                          Bacterial infections.
                        </li>
                        <li className="l-cover">
                          {" "}
                          <a href="javascript:void(0)" className="link-list">
                            Meningitis{" "}
                          </a>
                          (swelling of the brain): Multiple causes, including
                          bacterial, viral, fungal and parasitic infections.
                        </li>
                        <li className="l-cover">
                          <b>AIDS: </b>
                          <a href="javascript:void(0)" className="link-list">
                            HIV
                          </a>
                        </li>
                        <li className="l-cover">
                          <a href="javascript:void(0)" className="link-list">
                            <b>Liver cancer</b>
                          </a>{" "}
                          :{" "}
                          <a href="javascript:void(0)" className="link-list">
                            Hepatitis B, hepatitis C.
                          </a>
                        </li>
                        <li className="l-cover">
                          <a href="javascript:void(0)" className="link-list">
                            <b>Cervical cancer</b>
                          </a>{" "}
                          :{" "}
                          <a href="javascript:void(0)" className="link-list">
                            Human papillomavirus (HPV).
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="symptoms">
                    <h1 className="h1">Symptoms and Causes</h1>
                    <div className="con-overview">
                      <h2 className="h2">
                        What are the symptoms of infectious diseases?
                      </h2>
                      <p className="spp-des">
                        Symptoms of infectious diseases depend on the type of
                        illness. Fungal infections usually cause localized
                        symptoms, like rash and itching. Viral and bacterial
                        infections can have symptoms in many areas of your body,
                        like:
                      </p>
                      <ul className="list">
                        <li className="l-cover">Fever</li>
                        <li className="l-cover">Chills</li>
                        <li className="l-cover">Congestion</li>
                        <li className="l-cover">Cough</li>
                        <li className="l-cover">Fatigue</li>
                        <li className="l-cover">Muscle aches and headache.</li>
                        <li className="l-cover">
                          Gastrointestinal symptoms (diarrhea, nausea,
                          vomiting).
                        </li>
                      </ul>
                      {/* common2 */}
                      <p className="spp-des">
                        It’s important to see a doctor if you have any chronic
                        (ongoing) symptoms or symptoms that get worse over time.
                      </p>
                    </div>
                    <div className="con-overview">
                      <h2 className="h2">What causes infectious diseases?</h2>
                      <p className="spp-des">
                        Infectious diseases are caused by a variety of agents
                        that invade your body from the outside. These include:{" "}
                      </p>
                      <ul className="list">
                        <li className="l-cover">Viruses</li>
                        <li className="l-cover">Bacteria</li>
                        <li className="l-cover">Fungi</li>
                        <li className="l-cover">Parasites</li>
                        <li className="l-cover">Prions</li>
                      </ul>
                      {/* common2 */}
                      <p className="spp-des">
                        You may develop symptoms when your cells are damaged or
                        destroyed by the invading organism and as your immune
                        system responds to the infection.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="diagnosis">
                    <h1 className="h1">Diagnosis and Tests</h1>
                    <div className="con-overview">
                      <h2 className="h2">
                        How are infectious diseases diagnosed?
                      </h2>
                      <p className="spp-des">
                        Your healthcare provider usually diagnoses infectious
                        diseases using one or more lab tests. Your provider can
                        look for signs of disease by:{" "}
                      </p>
                      <ul className="list">
                        <li className="l-cover">
                          Swabbing your nose or throat.
                        </li>
                        <li className="l-cover">
                          Getting blood, pee (urine), poop (stool) or spit
                          (saliva) samples.
                        </li>
                        <li className="l-cover">
                          Taking a biopsy or scraping a small sample of skin or
                          other tissue.
                        </li>
                        <li className="l-cover">
                          Getting imaging (
                          <a href="javascript:void(0)" className="link-list">
                            X-rays
                          </a>
                          ,{" "}
                          <a href="javascript:void(0)" className="link-list">
                            CT scans
                          </a>{" "}
                          or{" "}
                          <a href="javascript:void(0)" className="link-list">
                            MRIS
                          </a>
                          ) of affected parts of your body.
                        </li>
                      </ul>
                      {/* common2 */}
                      <p className="spp-des">
                        Some test results, like from a nose swab, come back
                        quickly, but other results might take longer. For
                        instance, sometimes bacteria has to be grown in a lab
                        (cultured) from a sample before you can get your test
                        result{" "}
                      </p>
                    </div>
                  </div>
                  <div className="management">
                    <h1 className="h1">Management and Treatment</h1>
                    <div className="con-overview">
                      <h2 className="h2">
                        How are infectious diseases treated?
                      </h2>
                      <p className="spp-des">
                        Treatment depends on what causes the infection.
                        Sometimes your healthcare provider will recommend
                        monitoring your symptoms rather than taking medication.
                      </p>
                      <ul className="list">
                        <li className="l-cover">
                          Bacterial infections can be treated with{" "}
                          <a href="javascript:void(0)" className="link-list">
                            antibiotics
                          </a>
                          . The right antibiotic depends on what bacteria causes
                          the infection.{" "}
                        </li>
                        <li className="l-cover">
                          You can manage most viral infections with
                          over-the-counter medications for your symptoms until
                          you feel better. If you have the flu, your healthcare
                          provider may prescribe oseltamivir phosphate
                          (Tamiflu®) in some cases. Certain viral infections
                          have special medications to treat them, like
                          antiretroviral therapy for HIV.
                        </li>
                        <li className="l-cover">
                          Fungal infections can be treated with antifungal
                          medications. You can take them orally, like{" "}
                          <a href="javascript:void(0)" className="link-list">
                            fluconazole
                          </a>{" "}
                          (Diflucan®) or put them on your skin just where the
                          fungus is, like clotrimazole (Lotrimin®){" "}
                        </li>
                        <li className="l-cover">
                          Parasites can be treated with antiparasitic drugs,
                          such as{" "}
                          <a href="javascript:void(0)" className="link-list">
                            mebendazole
                          </a>{" "}
                          (Emverm®).{" "}
                        </li>
                        <li className="l-cover">
                          There are no treatments for prion diseases.
                        </li>
                      </ul>
                      {/* common2 */}
                      <p className="spp-des">
                        Some test results, like from a nose swab, come back
                        quickly, but other results might take longer. For
                        instance, sometimes bacteria has to be grown in a lab
                        (cultured) from a sample before you can get your test
                        result{" "}
                      </p>
                    </div>
                  </div>
                  <div className="Outlook">
                    <h1 className="h1">Outlook / Prognosis</h1>
                    <div className="con-overview">
                      <h2 className="h2">
                        What are the outcomes after treatment for infectious
                        diseases?
                      </h2>{" "}
                      {/* common1 */}
                      <p className="spp-des">
                        With treatment, most people get better after being sick
                        with an infectious disease.
                      </p>
                      {/* common2 */}
                      <p className="spp-des">
                        Sometimes there can still be serious complications,
                        especially with respiratory illnesses. People with
                        compromised immune systems are more at risk for serious
                        complications, but they can happen in healthy people
                        too.
                      </p>
                      {/* common3 */}
                      <p className="spp-des">
                        Some diseases, like HIV and hepatitis B, can’t be cured,
                        but medications can help prevent serious complications.
                        Sexually transmitted infections can cause infertility or
                        even lead to cancer, so it’s important to take steps to
                        protect yourself and others.{" "}
                      </p>
                      {/* common4 */}
                      <p className="spp-des">
                        Prion diseases are very serious and can’t be cured. They
                        are fortunately some of the rarest infectious diseases.
                      </p>
                    </div>
                  </div>
                  <div className="question">
                    <h1 className="h1">Additional Common Questions</h1>
                    <div className="con-overview">
                      <h2 className="h2">
                        What are emerging infectious diseases?
                      </h2>{" "}
                      {/* common1 */}
                      <p className="spp-des">
                        Emerging infectious diseases are those that are new or
                        are infecting more people than they had previously.
                        Special research is dedicated to these diseases. Some
                        emerging infectious disease agents include Ebola,
                        salmonella, hepatitis A, certain coronaviruses and West
                        Nile virus.
                      </p>
                      <h3 className="h3">
                        What are common pediatric infectious diseases?
                      </h3>
                      {/* common2 */}
                      <p className="spp-des">
                        Babies and children can be more likely to get sick from
                        infectious diseases because their immune systems are
                        still developing. They also can’t practice good hygiene
                        on their own like adults can. Some infectious diseases
                        that can be more common in children include:
                      </p>
                      <ul className="list">
                        <li className="link-list">
                          <a href="javascript:void(0)" className="link-list">
                            Chickenpox.
                          </a>
                        </li>
                        <li className="link-list">Common cold.</li>
                        <li className="link-list">
                          <a href="javascript:void(0)" className="link-list">
                            Fifth disease.
                          </a>
                        </li>
                        <li className="link-list">
                          <a href="javascript:void(0)" className="link-list">
                            Hand, foot, and mouth disease (HFMD).
                          </a>
                        </li>
                        <li className="link-list">Influenza.</li>
                        <li className="link-list">
                          <a href="javascript:void(0)" className="link-list">
                            Measles.
                          </a>
                        </li>
                        <li className="link-list">Pinworm</li>
                        <li className="link-list">
                          Respiratory syncytial virus (RSV).
                        </li>
                        <li className="link-list">Ringworm.</li>
                        <li className="link-list">
                          <a href="javascript:void(0)" className="link-list">
                            Roseola.
                          </a>
                        </li>
                        <li className="link-list">Strep throat.</li>
                        <li className="link-list">
                          Whooping cough (pertussis).
                        </li>
                      </ul>
                      {/* common3 */}
                      <p className="spp-des">
                        <b>A note from Cleveland Clinic</b>
                      </p>
                      {/* common4 */}
                      <p className="spp-des">
                        We coexist with viruses, bacteria, fungi and parasites
                        every day. In fact, you have 10 times more bacteria
                        inside your body than human cells — we couldn’t live
                        without them!
                      </p>
                      {/* common5 */}
                      <p className="spp-des">
                        Some of the organisms that we come across can be
                        harmful. Fortunately, there are many simple things you
                        can do to keep yourself healthy.
                      </p>
                      {/* common6 */}
                      <p className="spp-des">
                        It’s also important to remember that there might be
                        people around you who aren’t able to fight off
                        infections easily. Washing your hands, covering your
                        mouth when you cough or sneeze and other simple habits
                        can help protect others from getting seriously ill. A
                        small habit for you could be life-saving for someone
                        else.{" "}
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
      )
    }
      
    </>
  );
};

export default Infection;
