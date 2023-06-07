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
              <a href={`https://instagram.com/${ props.instagram }`} target="_blank" className='social-link-team'>
                  <InstagramLogo size={20} color="#ffff" weight='bold' />
              </a>
              <a href={`https://github.com/${ props.github }`} target="_blank" className='social-link-team'>
                  <GithubLogo size={20} color="#ffff"  weight='bold'/>
              </a>
              <a href={`https://www.linkedin.com/in/${ props.linkedin }`} target="_blank" className='social-link-team'>
                  <LinkedinLogo size={20} color="#ffff" weight='bold' />
              </a>
             
          </div>
        </div>
    
    )
}