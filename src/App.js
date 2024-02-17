// import logo from './logo.svg';
import './App.css';
import './AppMob.css'
import img3 from './Images/img3.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiBmcsoftware } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";
import { DiAndroid } from "react-icons/di";
import { AiFillDatabase } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { AiFillSecurityScan } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { SiMongodb } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiBlockchaindotcom } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPython } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { PiTelegramLogo } from "react-icons/pi";
import { FaLayerGroup } from "react-icons/fa";
import { BiMessageAltCheck } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { VscGraphLine } from "react-icons/vsc";

function App() {

  const [ham, setHam] = useState(false)

  const slideFunc = () => {
    const slider = document.querySelector('.technoCardSec');
    const slides = document.querySelectorAll('.technoCard');

    slider.style.width = `${slides.length * 100}%`;

    let currentIndex = 0;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    function updateSlider() {
      const translateValue = -currentIndex * (40 / slides.length);
      slider.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(nextSlide, 1000); // Change slide every 2000 milliseconds (2 seconds)  

  }

  const onLoad = () => {
    console.log(ham)
    const menuIcon = document.getElementById('a');
    const menu = document.getElementById('menu');
    menuIcon.classList.toggle('active');

    if (ham === true) {
      setHam(false)
      menu.style.left = "0"
    }
    else if (ham === false) {
      setHam(true)
      menu.style.left = "-500px"

    }

  }

  useEffect(() => {
    slideFunc()
    onLoad()
  }, [])
  return (
    <>
      <div className="home">
        <header>
          <nav>
            <div className="companyName">
              Solutions-<span className='comSecName'>Tech</span>
            </div>
            <div className="navBtn">
              <li>Home</li>
              <li>About</li>
              <li>Services <span className='dropArrow'><RiArrowDropDownLine size="25" /></span></li>
              <li>Our products</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>More <span className='dropArrow'><RiArrowDropDownLine size="25" /></span></li>
              <button className='connect'><p>Connect</p></button>
            </div>
            <div onClick={onLoad} id='a' className="menu-icon">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <div id='menu' className="menu">
              <li className='hamComp'>Solutions-<span className='comSecName'>Tech</span></li>
              <li>Home</li>
              <li>About</li>
              <li>Services <span className='dropArrow'><RiArrowDropDownLine size="25" /></span></li>
              <li>Our products</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>More <span className='dropArrow'><RiArrowDropDownLine size="25" /></span></li>
              <button className='connect'><p>Connect</p></button>
            </div>
          </nav>
        </header>
        <main>
          <div className="mast">
            <div className="mastLeft">
              <p>Building <b className='mastName'>Solutions</b></p>
              <p className='forTech'>For Tech <b className='mastCompName'>Giants</b></p>
              <p className="mastDes">We are the best Techno-Solutions provider in the region. Connect for your first step in TECH!</p>
              <button className='mastConnect'>Connect</button>
              <FaWhatsapp className='whatsapp' size='35' color='green' />
              <IoIosMail className='mail' size='35' color='black' />
            </div>
            <div className="mastRight">
              <img src={img3} alt="vectorImg" />
            </div>
          </div>
        </main>
        <hr />
        <section>
          <center>We Shape The Perfect <span className='section'>Solutions</span>
            <p className="mastDes">We are committed to provide our customers with exceptional service while offering our employees the best training.</p></center>
          <div className="cardSection">

            <div className="card">
              <div className="cardImg">
                <DiAndroid size='60' color='rgb(118, 23, 187)' />
              </div>
              <div className="cardHead">
                Android Dev
              </div>
            </div>
            <div className="card">
              <div className="cardImg">
                <SiBmcsoftware size='60' color='rgb(118, 23, 187)' />
              </div>
              <div className="cardHead">
                Software Dev
              </div>
            </div>

            <div className="card">
              <div className="cardImg">
                <GrCloudSoftware size='60' color='rgb(118, 23, 187)' />
              </div>
              <div className="cardHead">
                Cloud Computing
              </div>

            </div>

            <div className="card">
              <div className="cardImg">
                <AiFillDatabase size='60' color='rgb(118, 23, 187)' />
              </div>
              <div className="cardHead">
                Backend Architect
              </div>

            </div>

            <div className="card">
              <div className="cardImg">
                <FaComputer size='60' color='rgb(118, 23, 187)' />
              </div>
              <div className="cardHead">
                Web Dev
              </div>

            </div>

            <div className="card">
              <div className="cardImg">
                <AiFillSecurityScan size='60' color='rgb(118, 23, 187)' />
              </div>
              <div className="cardHead">
                Cyber Security
              </div>

            </div>
          </div>
        </section>
        <hr />
        <section>
          <center>We work on <span className="section">Technologies</span>
            <p className="mastDes">We are committed to provide our customers with exceptional.</p></center>
          <div className="technoCardSec">
            <div className="technoCard">
              <FaReact size='35' /> <span className="technoTxt">React</span>
            </div>
            <div className="technoCard">
              <FaAngular size='35' /> <span className="technoTxt">Angular</span>
            </div>
            <div className="technoCard">
              <FaNodeJs size='35' /> <span className="technoTxt">Node</span>
            </div>
            <div className="technoCard">
              <SiMongodb size='35' /> <span className="technoTxt">Mongo</span>
            </div>
            <div className="technoCard">
              <SiExpress size='35' /> <span className="technoTxt">Express</span>
            </div>
            <div className="technoCard">
              <SiBlockchaindotcom size='35' /> <span className="technoTxt">BlockChain</span>
            </div>
            <div className="technoCard">
              <SiMysql size='35' /> <span className="technoTxt">SQL</span>
            </div>
            <div className="technoCard">
              <BiLogoPostgresql size='35' /> <span className="technoTxt">PosgreSQL</span>
            </div>
            <div className="technoCard">
              <SiPython size='35' /> <span className="technoTxt">Python</span>
            </div>
          </div>
          <div className="consultBtn">
            <p>Consult Now</p>
            <PiTelegramLogo color='#fff' size='25' />
          </div>
        </section>
        {/* <hr /> */}
        <section className='details'>
          <div className="leftSec">
            <div className="row1">
              <div className="smCard">
                <FaLayerGroup size='45' />
                <p className='count'>20+</p>
                <p className="caption">Countries Served</p>
              </div>
              <div className="smCard">
                <BiMessageAltCheck size='45' />
                <p className='count'>200+</p>
                <p className="caption">Project Completed</p>
              </div>
            </div>
            <div className="row2">
              <div className="smCard">
                <GrUserExpert size='45' />
                <p className='count'>25+</p>
                <p className="caption">Project Experts</p>
              </div>
              <div className="smCard">
                <VscGraphLine size='45' />
                <p className='count'>10+</p>
                <p className="caption">Market Experience</p>
              </div>
            </div>
            <div className="captionTxt">
              We’re Committed To Deliver High Quality Projects.
            </div>
          </div>
          
          <br />
          <div className="rightSec">
            <p className="captionCardHead">
              WE’RE TRUSTED BY MORE THAN 100 CLIENTS
            </p>
            <p className="captionDes">
              Our sole aim is to make you get recognition in the online market. Evolving your business to a newer height is our business. With our years of experience, we give the word of honour to provide you the best of the services by our savvy people.
            </p>
            <br />
            <div className="btn">
              <button className='captionBtn'>Consult Now <PiTelegramLogo className='captionBtnIcon' color='#fff' size='25' />
              </button>
            </div>

          </div>
        </section>
        {/* <hr /> */}

        <section className='connectForm'>
          <center><span className="section">Connect </span>with us
            <p className="mastDes">We are the best Techno-Solutions provider in the region. Connect for your first step in TECH!</p>
          </center>
          <div className="emailInp">
            <input type="text" id='name' required />
            <br />
            <label className='emailLabel' htmlFor="name">Name</label>
          </div>
          <div className="emailInp">
            <input type="text" id='Email' required />
            <br />
            <label className='emailLabel' htmlFor="Email">Email address</label>
          </div>
          <div className="emailInp">
            <input type="text" id='query' required />
            <br />
            <label className='emailLabel' htmlFor="query">your Query</label>
          </div>
          <div className="contBtn">
            <button>Continue</button>
          </div>
        </section>
        <footer>
          <div className="compLogo">
            <div className="companyName footerTxt">
              Solutions-<span className='footerCompName'>Tech</span>
            </div>
            <div className="quickLinks">
              <div className="col1">
                <h3>Important Links</h3>
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Services</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div className="col2">
                <h3>Web Solution</h3>
                <ul>
                  <li>Website Designing</li>
                  <li>Software Development</li>
                  <li>Web Application Development</li>
                  <li>Web Host Solutions</li>
                </ul>
              </div>
              <div className="col2">
                <h3>App Solution</h3>
                <ul>
                  <li>Android App Development</li>
                  <li>Ios App Development</li>
                  <li>Hybrid App Development</li>
                  <li>Native App Development</li>
                </ul>
              </div>
              <div className="col2">
                <h3>Digital Marketing</h3>
                <ul>
                  <li>Search Engine Optimisation</li>
                  <li>Digital Media Marketing</li>
                  <li>Social Media Marketing</li>
                  <li>Bulk SMS & Email Marketing</li>
                </ul>
              </div>
              <div className="col2">
                <h3>Connect with Soutions-Tech</h3>
                <ul>
                  <li>2nd Floor Emerald Plaza, Telephone Exchange Road, Opposite CG Plaza, Bilaspur (C.G) Pin 495001</li>
                  <li>info@solutionstech.com</li>
                  <li>9109911372,9201996377</li>
                </ul>
              </div>
            </div>
            <hr className='footer' />
            <div className="footEnd">
              <p className="copyright">
                Copyright © 2024 Solutions-Tech. All Rights Reserved
              </p>
              <div className="socialIcons">
                <AiFillInstagram className='icons' size='30' />
                <FaSquareFacebook className='icons' size='27' />
                <BsTwitterX className='icons' size='26' />
                <ImLinkedin className='icons' size='25' />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
