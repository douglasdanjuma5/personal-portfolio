import React from 'react';

//import vmarine
import pharma_link from "../img/pharma_link.png";
import pharma_link1 from "../img/pharma_link1.png";
import pharma_link2 from "../img/pharma_link2.png";
import pharma_link3 from "../img/pharma_link3.png";
//O'jay Collections pics
import jay from "../img/jay.png";
import jay1 from "../img/jay1.png";
import jay2 from "../img/jay2.png";
import jay3 from "../img/jay3.png";
import jay4 from "../img/jay4.png";

//import NDA
import nda from "../img/nda.png";
import nda1 from "../img/nda1.png";
import nda2 from "../img/nda2.png";


//import amtbw
import amtbw from "../img/amtbw.png";

//import GPA
import gpa from "../img/gpa.png";

//import landing page
import plapoly from "../img/plapoly.png";

class Portfolio extends React.Component{

    render(){
        return (
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Check Out My Latest Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={pharma_link} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={pharma_link} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Pharma_Link</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Node, Express, hbs, Mongoose, Node-Geocoder, Mdbootstrap.</span> {/* {<span className="w-date">January 2019.</span>} */}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={pharma_link1} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={pharma_link2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      {<a href={pharma_link3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>}

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={jay} data-lightbox="gallery-aguadeluz">
                      <div className="work-img">
                        <img src={jay} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">O'Jay Collection Store</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Node, Express, hbs, Mongoose SmoothScrolling</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={jay1} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={jay2} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={jay3} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={jay4} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={nda} data-lightbox="gallery-todo">
                      <div className="work-img">
                        <img src={nda} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Cadet complain System</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap </span>{/*} / <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={nda} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={nda1} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={nda2} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={gpa} data-lightbox="gallery-medlingos">
                      <div className="work-img">
                        <img src={gpa} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">GPA / CGPA Calculator</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Agular js</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={gpa} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={gpa} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={amtbw} data-lightbox="gallery-amtbw">
                      <div className="work-img">
                        <img src={amtbw} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">A Mile To Be Wild</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Wordpress  Blogging-Website</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={plapoly} data-lightbox="gallery-mf">
                      <div className="work-img">
                        <img src={plapoly} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Plapoly Project</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap</span>{/*/ <span className="w-date">18 Sep. 2017</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        );
    }
}

export default Portfolio;