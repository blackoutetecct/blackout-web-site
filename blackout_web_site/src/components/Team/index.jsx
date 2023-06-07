import './style.css'

import miguel from '../../images/miguel.png'
import erick from '../../images/erick.png'
import kauan from '../../images/kauan.png'
import henry from '../../images/henry2.png'
import bruna from '../../images/bruna.png'
import kaique from '../../images/kaique.png'
import nicolly from '../../images/nicolly.png'
import lorena from '../../images/lorena.png'
import kaio from '../../images/kaio.png'
import wiliam from '../../images/wiliam.png'

import InfiniteCarousel from 'react-leaf-carousel';
import { InstagramLogo, GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

import TeamCard from './../TeamCard'

export default function Team() {
    return(
        <section className="team">
            <h2 id="equipe"> EQUIPE </h2>

            <div className='carousel'> 
            <InfiniteCarousel
                breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    },
                },
                ]}
                dots={true}
                showSides={false}
                sidesOpacity={.2}
                sideSize={.1}
                slidesToScroll={5}
                slidesToShow={5}
                scrollOnDevice={true}
            >

                <TeamCard 
                image={kaique}
                name="KAIQUE SOUZA"
                office="Back-end/CEO"
                
                instagram="kaiquesouzasantos"
                github="kaiquesouzasantos"
                linkedin="kaique-souza-santos"
                />
                <TeamCard 
                image={henry}
                name="HENRY MODESTO"
                office="Front-End/UX-UI"
                
                instagram="henry_modesto05"
                github="henrymodesto"
                linkedin="henry-modesto-90b66b265"
                />
                <TeamCard 
                image={bruna}
                name="BRUNA KAREN"
                office="Designer UI-UX"
                
                instagram="bru_k19"
                github="brunaK19"
                linkedin="bruna-karen-gomes-lopes-464b77279"
                />
                <TeamCard 
                image={wiliam}
                name="WILIAM MELO"
                office="Mobile-developer"
                
                instagram="https://www.instagram.com/"
                github="https:www.github.com/"
                linkedin="https://www.linkedin.com/in/"
                />
                <TeamCard 
                image={kaio}
                name="KAIO KENUY"
                office="Secretário"
                
                instagram="https://www.instagram.com/"
                github="https:www.github.com/"
                linkedin="https://www.linkedin.com/in/"
                />
                <TeamCard 
                image={miguel}
                name="Miguel Santos"
                office="Front-end"
                
                instagram="https://www.instagram.com/"
                github="https:www.github.com/"
                linkedin="https://www.linkedin.com/in/"
                />
                <TeamCard 
                image={kauan}
                name="KAUAN GABRIEL"
                office="Back-end"
                
                instagram="https://www.instagram.com/"
                github="https:www.github.com/"
                linkedin="https://www.linkedin.com/in/"
                />
                <TeamCard 
                image={erick}
                name="ERICK CHAVES"
                office="Back-end"
                
                instagram="https://www.instagram.com/"
                github="https:www.github.com/"
                linkedin="https://www.linkedin.com/in/"
                />
                <TeamCard 
                image={lorena}
                name="LORENA ARAUJO"
                office="Front-end"
                
                instagram="https://www.instagram.com/"
                github="https:www.github.com/"
                linkedin="https://www.linkedin.com/in/"
                />
                <TeamCard 
                image={nicolly}
                name="NICOLLY CHAVES"
                office="Front-end"
                
                instagram="https://www.instagram.com/"
                github="https:www.github.com/"
                linkedin="https://www.linkedin.com/in/"
                />

            </InfiniteCarousel>
            </div>

        </section>
    )
}