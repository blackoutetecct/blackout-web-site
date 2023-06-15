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
                arrows={false}
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
                office="CEO/Back-end"
                
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
                office="Designer/Mobile"
                
                instagram="bru_k19"
                github="brunaK19"
                linkedin="bruna-karen-gomes-lopes-464b77279"
                />
                
                <div className="card">
                <div>
                    <img
                        alt='integrante da Blackout'
                        src={wiliam}
                    />
                </div>
                <p> WILIAM MELO </p>
                <p>  Mobile </p>
            
                <div className="social-media-team">
                    
                    <a href={`https://github.com/WiliamMelo01`} target="_blank" className='social-link-team'>
                        <GithubLogo size={20} color="#ffff"  weight='bold'/>
                    </a>
                    <a href={`https://www.linkedin.com/in/wiliam-melo-730992232/`} target="_blank" className='social-link-team'>
                        <LinkedinLogo size={20} color="#ffff" weight='bold' />
                    </a>
                    
                </div>
                </div>

                <TeamCard 
                image={kaio}
                name="KAIO KENUY"
                office="Analista"
                
                instagram="kenuy_kaio"
                github="kenuykaio"
                linkedin="kaio-kenuy-71ba02279"
                />
                <TeamCard 
                image={miguel}
                name="MIGUEL SANTOS"
                office="Front-end"
                
                instagram="mgy1kk"
                github="miguelsantos1"
                linkedin="miguel-oliveira-santos"
                />
                <TeamCard 
                image={kauan}
                name="KAUAN GABRIEL"
                office="Back-end"
                
                instagram="kauan_ts11"
                github="Kauan-Ts11"
                linkedin="kauan-gabriel-aaab70264"
                />
                <TeamCard 
                image={erick}
                name="ERICK CHAVES"
                office="Back-end"
                
                instagram="erick_chqves"
                github="ErickSChaves"
                linkedin=""
                />
                <TeamCard 
                image={lorena}
                name="LORENA ARAUJO"
                office="Gerente/Mobile"
                
                instagram="lorenaarauj0_"
                github="lorenaaraujoo"
                linkedin="lorena-araujo-almeida-708432206"
                />
                <TeamCard 
                image={nicolly}
                name="NICOLLY CHAVES"
                office="Analista"
                
                instagram="nik_chaves"
                github="NicollyChaves"
                linkedin="nicolly-chaves-11136927a"
                />

            </InfiniteCarousel>
            </div>

        </section>
    )
}
