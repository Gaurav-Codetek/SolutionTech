// import logo from './logo.svg';
import './App.css';
import './AppMob.css'
import img3 from './Images/img3.png'
import logo from './Images/solnfortech.png'
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
import { FaPhone } from "react-icons/fa";

function App() {

  const [ham, setHam] = useState(false)

  const onLoad = () => {
    console.log(ham)
    const menuIcon = document.getElementById('a');
    const menu = document.getElementById('menu');
    menuIcon.classList.toggle('active');

    if (ham === true) {
      setHam(false)
      menu.style.left = "-500px"
    }
    else if (ham === false) {
      setHam(true)
      menu.style.left = "0"

    }

  }

  const onMenuClick = () => {
    const menuIcon = document.getElementById('a');
    const menu = document.getElementById('menu');
    menuIcon.classList.remove('active');
    console.log(ham)
    setHam(false)
    menu.style.left = "-500px"
  }

  useEffect(() => {
    //   slideFunc()
    // onLoad()
  }, [])
  return (
    <>
      <div className="home">
        <header>
          <nav>
            <div className="companyName">
              <img src={logo} alt="SolutionsForNet" height='50px' width='230px' />
            </div>
            <div className="navBtn">
              <a href="#">Home</a>
              <a href="#services">Services</a>
              <a href="#3">Technology</a>
              <a href="#about">About</a>
              <a href="#5">Contact us</a>
              <a href="#5" className='connect'>Connect</a>
            </div>
            <div id='a' onClick={()=>onLoad()} className="menu-icon">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div id='menu' className="menu">
              <a onClick={onMenuClick} href="#">Home</a>
              <a onClick={onMenuClick} href="#services">Services</a>
              <a onClick={onMenuClick} href="#3">Technology</a>
              <a onClick={onMenuClick} href="#about">About</a>
              <a onClick={onMenuClick} href="#5">Contact us</a>
              <a href='#5' className='connect'>Connect</a>
            </div>
          </nav>
        </header>
        <main>
          <div className="mast">
            <div className="mastLeft">
              <p>Building <b className='mastName'>Solutions</b></p>
              <p className='forTech'>For Tech <b className='mastCompName'>Giants</b></p>
              <p className="mastDes">We are the best Techno-Solutions provider in the region. Connect for your first step in TECH!</p>
              <a href='#5' className='mastConnect'>Connect</a>
              <IoIosMail className='mail' size='35' color='black' />
              <FaPhone className='phone' size='30' color='rgb(7, 52, 83)' /><span className='phoneNo'>+91-9142049692</span>
            </div>
            <div className="mastRight">
              <img src={img3} alt="vectorImg" />
            </div>
          </div>
        </main>
        <hr id='services' />
        <section>
          <center>We Shape The Perfect <span className='section'>Solutions</span>
            <p className="mastDes">We are committed to provide our customers with exceptional service while offering our employees the best training.</p></center>
          <div className="cardSection">

            <div className="card">
              <div className="cardImg">
                <DiAndroid size='60' color= "rgb(7,52,83)" />
              </div>
              <div className="cardHead">
                Android Dev
              </div>
            </div>
            <div className="card">
              <div className="cardImg">
                <SiBmcsoftware size='60' color= "rgb(7,52,83)" />
              </div>
              <div className="cardHead">
                Software Dev
              </div>
            </div>

            <div className="card">
              <div className="cardImg">
                <GrCloudSoftware size='60' color= "rgb(7,52,83)" />
              </div>
              <div className="cardHead">
                Cloud Computing
              </div>

            </div>

            <div className="card">
              <div className="cardImg">
                <AiFillDatabase size='60' color= "rgb(7,52,83)" />
              </div>
              <div className="cardHead">
                Backend Architect
              </div>

            </div>

            <div className="card">
              <div className="cardImg">
                <FaComputer size='60' color= "rgb(7,52,83)" />
              </div>
              <div className="cardHead">
                Web Dev
              </div>

            </div>

            <div className="card">
              <div className="cardImg">
                <AiFillSecurityScan size='60' color= "rgb(7,52,83)" />
              </div>
              <div className="cardHead">
                Cyber Security
              </div>

            </div>
          </div>
        </section>
        <hr id='3' />
        <section>
          <center>We work on <span className="section">Technologies</span>
            <p className="mastDes">We are committed to provide our customers with exceptional.</p></center>
          <div className="technoCardSec">
            <div className="technoCard">
              <FaReact className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">React</div>
            </div>
            <div className="technoCard">
              <FaAngular className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">Angular</div>
            </div>
            <div className="technoCard">
              <FaNodeJs className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">Node</div>
            </div>
            <div className="technoCard">
              <SiMongodb className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">Mongo</div>
            </div>
            <div className="technoCard">
              <SiExpress className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">Express</div>
            </div>
            <div className="technoCard">
              <SiBlockchaindotcom className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">BlockChain</div>
            </div>
            <div className="technoCard">
              <SiMysql className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">SQL</div>
            </div>
            <div className="technoCard">
              <BiLogoPostgresql className="technoIcon" size='35' color= "rgb(7,52,83)" /> <div className="technoTxt">PosgreSQL</div>
            </div>
          </div>
          <a href='#5' className="consultBtn">
            <p id="about">Consult Now</p>
            <PiTelegramLogo color='#fff' size='25' />
          </a>
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
              SolutionsForNet is an offshore provider of outsourced development solutions, we provide affordable solutions to organizations worldwide seeking software application development,JAVA ,Node, React js, Angular, PHP core programming, CMS, iOS mobile applications, Games APP’s, web design and web development services, web optimization, e-commerce Portals, web services application & social media development services.
            </p>
            <br />
            <div className="btn">
              <a href='#5' className='captionBtn'>Consult Now <PiTelegramLogo className='captionBtnIcon' color='#fff' size='25' />
              </a>
            </div>

          </div>

        </section>
        <hr id="5" />
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
            <input type="number" id='PhNO' required />
            <br />
            <label className='emailLabel' htmlFor="PhNO">Phone number</label>
          </div>
          <div className="emailInp">
            <input type="text" id='query' required />
            <br />
            <label className='emailLabel' htmlFor="query">Your query</label>
          </div>
          <div className="contBtn">
            <button>Continue</button>
          </div>
        </section>
        <footer>
          <div className="compLogo">
            
            <div className="quickLinks">
              <div className="col1">
                <h3>Important Links</h3>
                <ul>
                  <a href="#">Home</a>
                  <a href='#services'>Services</a>
                  <a href="#3">Technology</a>
                  <a href='#about'>About us</a>
                  <a href='#5'>Contact us</a>
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
                <h3>Connect with SoutionsForNet</h3>
                <ul>
                  <li>L-122, First floor, sector-12 noida Uttar Pradesh 201301</li>
                  <li>sales@solutionsfornet.com</li>
                  <li>9142049692</li>
                </ul>
              </div>
            </div>
            <hr className='footer' />
            <div className="footEnd">
              <p className="copyright">
                Copyright © 2024 SolutionsForNet. All Rights Reserved
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
