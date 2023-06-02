import './style.css'
import { InstagramLogo, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'


export default function TeamCard(props) {
    return(
      
        <div className="card">
          <div>
              <img
                alt='integrante da Blackout'
                src={ props.image }
              />
          </div>
          <p> { props.name } </p>
          <p>  { props.office } </p>
    
          <div className="social-media-team">
              <a href={ props.instagram } className='social-link-team'>
                  <InstagramLogo size={20} color="#ffff" weight='bold' />
              </a>
              <a href={ props.github } className='social-link-team'>
                  <GithubLogo size={20} color="#ffff"  weight='bold'/>
              </a>
              <a href={ props.linkedin} className='social-link-team'>
                  <LinkedinLogo size={20} color="#ffff" weight='bold' />
              </a>
              <a href={ props.twitter } className='social-link-team'>
                  <TwitterLogo size={20} color='#ffff' weight='bold' />
              </a>
          </div>
        </div>
    
    )
}