import lamp from '../../images/home.png'
import lamp2 from '../../images/lamp.png'

import { EnvelopeSimple, GithubLogo, InstagramLogo } from 'phosphor-react'

import './style.css'


export default function Home() {

    return(
        <section className='home'>

          <div>
            <h1> BLACKOUT </h1>
            <p> Em meio a escuridão nós somos a solução.<br />empresa com o intuito de facilitar o seu dia a dia. </p>
            <a className='watch link-home' href="youtube.com/videopitch"> Assistir </a>
            <a className="link-home" href="#home"> Saiba mais </a>
          </div>
    

        <img className='lamp' alt="lampada" src={lamp} />
        <img className='lamp2' alt="lampada" src={lamp2} />  


        <div className="divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className='social-media'> 
          
          <a href="https://github.com/blackoutetecct" target='_blank'>
            <GithubLogo  className="social-link" size={30} color="#ededed" />
          </a>
          <a href="https://instagram.com/blackoutetecct" target='_blank'>
            <InstagramLogo className="social-link" size={30} color="#ededed" />
          </a>
          <a href="mailto:blackout@gmail.com">
            <EnvelopeSimple className="social-link" size={30} color="#ededed" />
          </a>

          </div>


      </section>
    )
}