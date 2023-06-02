import './style.css'
import blackoutLogo from '../../images/blackout2.png'

export default function Footer() {
    return(

        <footer>
            <div className='footerContent'>
                <div>
                    <h3> Links Rápidos </h3>
                    <div>
                        <a href="/" > Inicio </a>
                        <a href="/" > Quem somos </a>
                        <a href="/" > Equipe </a>
                        <a href="/" > Projetos </a>
                    </div>
                </div>
                <div>
                    <h3> Contatos </h3>
                    <div>
                        <a href="/" > São Paulo </a>
                        <a href="/" > + 55 119123-31231 </a>
                        <a href="/" > blackout@gmail.com </a>
                        <a href="/" > Etec Cidade Tirandentes </a>
                    </div>
                </div>
                <div>
                    <h3> Siga-nos </h3>
                    <div>
                        <a href="/" > Twitter </a>
                        <a href="/" > Instagram </a>
                        <a href="/" > Linkedin </a>
                        <a href="/" > Github </a>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <img src={blackoutLogo} alt="Blackout logo" />

                <p>All right by @BLACKOUT 2023</p>
            </div>


        </footer>
    )
}