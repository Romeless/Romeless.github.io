import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faCode, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import Photo from '../images/erika.png'

const socials = [
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/rama-lesmana-870176207/",
      icon: faLinkedin,
    },
    {
      text: "Github",
      url: "https://github.com/Romeless",
      icon: faGithub
    },
  ]

const buttons = [
  {
    icon: faUser,
    text: "About Me"
  },
  {
    icon: faCode,
    text: "My Skills"
  },
  {
    icon: faBriefcase,
    text: "Works"
  },
  {
    icon: faPhone,
    text: "Contact Me"
  }
]

const MainWindow = () => {
  return (
    <div className="mainContainer">
      <div className='windowTab'></div>
      <div className="statusScreen flexColumn">
          <div className="nameInfo flexRow">
            <div className="nameBox"><p>Rama Lesmana</p></div>
            <div className="levelBox"><p>Lv <span>23</span></p></div>
          </div>
          <div className="mainStatusScreenSplit flexRow">
              <div className="leftScreen flexColumn">
                <div className="nextLvl"><p>Next Lvl Exp 365</p></div>
                <ul className="jobTitle">
                  <li><div className="jobContainer"><p>Web Developer</p></div></li>
                  <li><div className="jobContainer"><p>App Developer</p></div></li>  
                </ul>
                
                <div className="descriptionContainer">
                  <div className="titleContainer">
                    <h1>
                      Hello There!
                    </h1>
                  </div>
                  <div className="textContainer">
                    <div className="borderBar">
                      <p>
                        My name is <span>Rama Lesmana</span> and this is my website! I'm a web developer from <span>Indonesia</span>, feel free to take a look around!
                      </p>
                    </div>
                    <div className="professionalButton flexRow">
                      <a href="/" className="flatButton">
                        Resumé
                      </a>
                      {socials.map((social, i) => (
                          <a href={social.url} className="proButton" target="_blank" rel='noopener noreferrer' key={social.url}>
                            <FontAwesomeIcon icon={social.icon} size="lg" fixedWidth/>
                          </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <ul className="sectionDecorations flexRow">
                  <div className='sectionButtons flexColumn'>
                    {buttons.map((button, i) => (
                      <li key={"button-section"+i} className="flexRow">
                        <div className="iconContainer"><FontAwesomeIcon icon={button.icon} fixedWidth /></div>
                        <div className="textContainer"><p>{button.text}</p></div>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
              <div className="rightScreen flexColumn">
                <div className="homeImageContainer">
                  <img src={Photo} alt="Rama Lesmana."/>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default MainWindow