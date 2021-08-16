import React from 'react';
import './index.css';
import app1 from './img/app1.jpeg';
import app2 from './img/app2.jpeg';
import fellow from './img/fellow.jpg';
import footerLogo from './img/REDMATTER.png';
import whiteDots from './img/white_dots.png';


export default function Home() {
    return(
        <div className="body">

            <div className="hero">
             <div>
                <h1 className="hero-text">We make the complex <span className="red">simple.</span>
                <br></br>
                and the simple <span className="red">unique.</span>
                </h1>
                <p className="hero-text">
                Red Matter Technologies uses Big Data, A.I. and Cloud Computing <br/> to bring the certainty of computer science to the bioscience of bioscience.
                </p>
                </div>

                <div>
                <button className="hero-button"> Try Red Matter <br></br> For Free</button>
                </div>
                
            </div>

            <div className="products">
            <h2 className="red section-header">OUR PRODUCTS</h2>
                <div className="product-left">
                <div>
                <h2 className="subtitle">Red Matter App</h2>
                <p className="product-description">An easy to use and device agnostic flow cytommetry research tool. Accesible from anywhere with internet access.<br></br></p>
                <p>Perfect for analizing any type of fluid.</p>
                </div>

                <div className="app1">
                    <img src={app1} alt="" />
                </div>
                    
                </div>


                <div className="product-right">
                <div className="app2">
                    <img src={app2} alt="" />
                </div>
                <div>
                <h2 className="subtitle">Red Matter Drop</h2>
                <p className="product-description">Securely drop your flow cytometry data and have it re-analysed by our AI algorithms.</p>
                </div>

                
                    
                </div>
            </div>

            <div className="our-company">
            <h2 className="red section-header">OUR COMPANY</h2>

            <div className="feature">
            <h2 className="subtitle">BACKED BY INSTITUTES AND LABORATORIES</h2>
            <p className="product-description">
            Research Institutes, Pharmaceutical companies and Laboratories are gathering large volumes of diagnostic and medical research data at an ever increasing dramatically. Red Matter Technologies is dedicated to unlocking information from this data by using AI, Big Data and Cloud Computing. We aim to bring the certainty of computer science to the complexity of bioscience
            </p>
            </div>


            <div className="feature">
            <h2 className="subtitle">PRIVATE</h2>
            <p className="product-description">
            All the data collected from our products is completely anonymous nothing is linked to any one of our customers            </p>
            </div>


            <div className="feature">
            <h2 className="subtitle">PORTABILITY AND EASE-OF-USE</h2>
            <p className="product-description">
            Red Matter believes that the process of scientific research should be focused on the discovery and advance of humanity, not figuring out a bad interface            </p>
            </div>
            </div>


            <div className="team">

            <h2 className="red section-header">THE TEAM</h2>

            <div className="fellows">
                <div className="fellow">
                    <img src={fellow} className="fellowImage" alt="Mark Kelly"></img>
                    <h3>Mark Kelly</h3>
                    <p>
                        <strong>CEO</strong><br/>
                        CO-FOUNDER<br/>
                        Software Engineer<br/>
                    </p>
                </div>

                <div className="fellow">
                    <img src={fellow} className="fellowImage" alt="Mark Kelly"></img>
                    <h3>Renato Britto</h3>
                    <p>
                        <strong>CTO</strong><br/>
                        CO-FOUNDER<br/>
                        Software Engineer<br/>
                    </p>
                </div>

                <div className="fellow">
                    <img src={fellow} className="fellowImage" alt="Mark Kelly"></img>
                    <h3>Tomaz Einfalt</h3>
                    <p>
                        <strong>CPO</strong><br/>
                        CO-FOUNDER<br/>
                        PhD. Biomedicine<br/>
                    </p>
                </div>


            </div>

            <h3 className="quote">
            This could be either our very awesome and incredibly moving motto or an amazing and inspiring quote by our international ninja warrior founders. Or... just be removed, let me know.
            </h3>


            </div>

            <div className="contact">
            <h2 className="red section-header">CONTACT US</h2>

            <form className="contact-form">
                <input type="email"></input>
                <input type="text"></input>
                <textarea></textarea>
                <input type="submit" value="Send" className="submit"></input>
            </form>
            </div>


            <div className="footer">
                <div className="footer-body">
                    <div className="footer-top">
                        <div className="footer-logo">
                            <img className="isotype" src={whiteDots} alt="Red Matter Isotype"/>
                            <img className="typography" src={footerLogo} alt="Red Matter Typography"/>
                        </div>

                        <div className="footer-links">
                            <p><a href='#'>Red Matter App</a><br/></p>
                            <p><a href='#'>Red Matter Drop</a></p>
                            <p><a href='#'>Red Matter B2B</a></p>
                        </div>

                        <div className="footer-links">
                            <p><a href='#'>Who We Are</a></p>
                            <p><a href='#'>Press</a></p>
                            <p><a href='#'>Careers</a></p>
                        </div>

                        <div className="footer-links">
                            <p><a href='#'>Blog</a></p>
                            <p><a href='#'>Resources</a></p>
                            <p><a href='#'>Help Center</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}