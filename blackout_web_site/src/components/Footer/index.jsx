import './style.css'
import blackoutLogo from '../../images/blackout2.png'
import { ArrowRight, MapPin, EnvelopeSimple, InstagramLogo, GithubLogo, LinkedinLogo  } from 'phosphor-react'

export default function Footer() {
    return(

        <footer>
            <nav className='footerContent'>
                <div>
                    <h3> Links Rápidos </h3>
                    <div>
                    <ul>
                        <li className="footer-link">
                            <ArrowRight size={20} weight='bold' color="#fdbf71" /> <a href="/" > início </a>
                        </li>
                        <li className='footer-link'>
                            <ArrowRight size={20} weight='bold' color="#fdbf71" />  <a href="#quemSomos" > Quem somos </a>
                        </li>
                        <li className='footer-link'>
                            <ArrowRight size={20} weight='bold' color="#fdbf71" />  <a href="#equipe" > Equipe </a>
                        </li>
                        <li className='footer-link'>
                            <ArrowRight size={20} weight='bold' color="#fdbf71" /><a href="#projetos" > Projetos </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <h3> Contatos </h3>
                    <div>
                        <ul>
                            <li className="footer-link"><MapPin size={20} color="#fdbf71" weight='fill' /><a href="https://goo.gl/maps/bmxcfpZSfE22HxHV8" >  Etec Cidade Tiradentes </a></li>
                            <li className="footer-link"> <EnvelopeSimple  size={20} color="#fdbf71" weight="bold" /><a href="mailto:blackoutempresa@gmail.com" > blackoutempresa@gmail.com </a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3> Siga-nos </h3>
                    <div>
                        <ul>
                            <li className="footer-link"> <InstagramLogo size={20} color="#fdbf71" weight="fill" /> <a href="https://instagram.com/blackoutetecct" target='_blank' > Instagram </a></li>
                            <li className="footer-link"> <GithubLogo size={20} color="#fdbf71" weight="fill" /> <a href="https://github.com/blackoutetecct" target='_blank' > Github </a></li>
                            <li className="footer-link"> <LinkedinLogo size={20} color="#fdbf71" weight="fill" /> <a href="/" target="_blank"> LinkedIn </a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='copyright'>
                <img src={blackoutLogo} alt="Blackout logo" />

                <p>All right by @BLACKOUT 2023</p>
            </div>


        </footer>
    )
}