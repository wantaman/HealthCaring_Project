import React from "react";
import "../../style/home/problem.scss";
import qr from "../../assets/image/qr_1.svg";
import banner from "../../assets/image/pro_1.webp";
import illness_1 from "../../assets/image/illness_1.jpeg"
import { AspectRatio,Card, CardContent, IconButton} from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faShareAlt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";


const Problem = () => {
  return (
    <section>
      <div className="issue_patient">
        <div className="center-issue">
          <div className="cen-img">
            <img src={banner} alt="" />
          </div>
          <div className="cen-detial">
            <div className="dt-start">
              <p className="detail-title">
                What is your Problem
                <br />
                <span>Comment it!</span>
              </p>
              <p className="detail-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit aliquid nam non libero numquam laboriosam dolor
                ipsam laudantium omnis deleniti vero delectus, fuga amet, minima
                quibusdam quod illum! Dolorem, est!
              </p>
            </div>
            <div className="dt-end">
              <img src={qr} alt="" />
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="art-des">
          <span className="status">Read Professional Article</span>
          <h2 className="title">
            Latest <span>Article</span>
          </h2>
          <p className="detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            laborum qui fugit, consequatur nostrum quo vel veritatis recusandae
            sint quam, nesciunt excepturi repellat? Dolorum totam quas nemo
            error, ducimus sapiente.
          </p>
        </div>
        <div className="art_contain">
          <Card sx={{ width: 450 }} className="card-article">
            <div>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
              </IconButton>
            </div>
            <AspectRatio minHeight="250px" maxHeight="300px">
              <img
                src={illness_1}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="vertical" >
              <div className="con-des">
                <span className="type_illness">No infection</span>
                <p className="des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iste quae. Laboriosam nostrum,
                     vero sequi sed neque, quod quia, illo ab aliquam molestiae modi similique minima minus atque optio unde.
                </p>
                <span className="date"><FontAwesomeIcon icon={faCalendar}/> 15, November 2022</span>
              </div>
              <div className="con-fav">
                <span className="fav">
                    <FontAwesomeIcon icon={faThumbsUp}/> 2,453
                </span>
                <span className="share">
                    <FontAwesomeIcon icon={faShareAlt}/> 200
                </span>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ width: 450 }} className="card-article">
            <div>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
              </IconButton>
            </div>
            <AspectRatio minHeight="250px" maxHeight="300px">
              <img
                src={illness_1}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="vertical" >
              <div className="con-des">
                <span className="type_illness">No infection</span>
                <p className="des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iste quae. Laboriosam nostrum,
                     vero sequi sed neque, quod quia, illo ab aliquam molestiae modi similique minima minus atque optio unde.
                </p>
                <span className="date"><FontAwesomeIcon icon={faCalendar}/> 15, November 2022</span>
              </div>
              <div className="con-fav">
                <span className="fav">
                    <FontAwesomeIcon icon={faThumbsUp}/> 2,453
                </span>
                <span className="share">
                    <FontAwesomeIcon icon={faShareAlt}/> 200
                </span>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ width: 450 }} className="card-article">
            <div>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
              </IconButton>
            </div>
            <AspectRatio minHeight="250px" maxHeight="300px">
              <img
                src={illness_1}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="vertical" >
              <div className="con-des">
                <span className="type_illness">No infection</span>
                <p className="des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iste quae. Laboriosam nostrum,
                     vero sequi sed neque, quod quia, illo ab aliquam molestiae modi similique minima minus atque optio unde.
                </p>
                <span className="date"><FontAwesomeIcon icon={faCalendar}/> 15, November 2022</span>
              </div>
              <div className="con-fav">
                <span className="fav">
                    <FontAwesomeIcon icon={faThumbsUp}/> 2,453
                </span>
                <span className="share">
                    <FontAwesomeIcon icon={faShareAlt}/> 200
                </span>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ width: 450 }} className="card-article">
            <div>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
              </IconButton>
            </div>
            <AspectRatio minHeight="250px" maxHeight="300px">
              <img
                src={illness_1}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="vertical" >
              <div className="con-des">
                <span className="type_illness">No infection</span>
                <p className="des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iste quae. Laboriosam nostrum,
                     vero sequi sed neque, quod quia, illo ab aliquam molestiae modi similique minima minus atque optio unde.
                </p>
                <span className="date"><FontAwesomeIcon icon={faCalendar}/> 15, November 2022</span>
              </div>
              <div className="con-fav">
                <span className="fav">
                    <FontAwesomeIcon icon={faThumbsUp}/> 2,453
                </span>
                <span className="share">
                    <FontAwesomeIcon icon={faShareAlt}/> 200
                </span>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ width: 450 }} className="card-article">
            <div>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
              </IconButton>
            </div>
            <AspectRatio minHeight="250px" maxHeight="300px">
              <img
                src={illness_1}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="vertical" >
              <div className="con-des">
                <span className="type_illness">No infection</span>
                <p className="des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iste quae. Laboriosam nostrum,
                     vero sequi sed neque, quod quia, illo ab aliquam molestiae modi similique minima minus atque optio unde.
                </p>
                <span className="date"><FontAwesomeIcon icon={faCalendar}/> 15, November 2022</span>
              </div>
              <div className="con-fav">
                <span className="fav">
                    <FontAwesomeIcon icon={faThumbsUp}/> 2,453
                </span>
                <span className="share">
                    <FontAwesomeIcon icon={faShareAlt}/> 200
                </span>
              </div>
            </CardContent>
          </Card>
          <Card sx={{ width: 450 }} className="card-article">
            <div>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
              </IconButton>
            </div>
            <AspectRatio minHeight="250px" maxHeight="300px">
              <img
                src={illness_1}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="vertical" >
              <div className="con-des">
                <span className="type_illness">No infection</span>
                <p className="des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iste quae. Laboriosam nostrum,
                     vero sequi sed neque, quod quia, illo ab aliquam molestiae modi similique minima minus atque optio unde.
                </p>
                <span className="date"><FontAwesomeIcon icon={faCalendar}/> 15, November 2022</span>
              </div>
              <div className="con-fav">
                <span className="fav">
                    <FontAwesomeIcon icon={faThumbsUp}/> 2,453
                </span>
                <span className="share">
                    <FontAwesomeIcon icon={faShareAlt}/> 200
                </span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Problem;
