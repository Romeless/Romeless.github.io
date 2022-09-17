import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const links_icons =
[
    {
        link : 'https://github.com/Romeless',
        icon : faGithub
    },
    {
        link : 'https://www.instagram.com/gardencastletemple/?hl=en',
        icon : faInstagram
    },
    {
        link : 'https://twitter.com/romeless_id',
        icon : faTwitter
    },
    {
        link : 'https://www.linkedin.com/in/rama-lesmana-870176207/',
        icon : faLinkedin
    },
    {
        link : 'mailto:ramalesmana.1999@gmail.com',
        icon : faEnvelope
    }
]

const SocialLinks = () => {
  return (
    <ul className="links">
        {
            links_icons.map((linkObj,i)=>(
            <li key={`link-key-`+i}>
                <a href={linkObj.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="leftSocialIcon" icon={linkObj.icon} size="2xl"/>
                </a>
            </li>
            ))
        }
    </ul>
  )
}

export default SocialLinks