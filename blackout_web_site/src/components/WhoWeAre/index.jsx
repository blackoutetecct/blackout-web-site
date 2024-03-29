import './style.css'

import light from '../../images/luz.png'
import outlet from '../../images/outlet.png'
import phone from '../../images/phone.png'

export default function WhoWeAre() {

    return (
        <section className='who-we-are'> 

        <h2 id="quemSomos"> QUEM SOMOS </h2>
  
        <div className="description-we-are">
          <img src={phone} alt="Phone" className="phone" />
  
          <div>
            <p> A BLACKOUT é uma empresa especializada em oferecer <br />soluções tecnológicas sob medida para você. <br /> com uma equipe altamente qualificada de programadores, <br /> desenvolvemos softwares, aplicativos, websites e sistemas. </p>
            
            <p>buscamos sempre estar atualizados com as últimas tendências <br /> e tecnologias do mercado <br /> garantindo assim que nossos <br /> projetos sejam inovadores, eficientes e de alta qualidade.</p>
  
           <a className="meet-team" href="#equipe"> CONHECER A NOSSA EQUIPE </a>
           <div className="animation-line"></div>
          </div>
        </div>

        <img className="light" src={light} alt="Lampada"/>
        <img className="outlet" src={outlet} alt="Tomada" />
          
        </section>
  
    )
}