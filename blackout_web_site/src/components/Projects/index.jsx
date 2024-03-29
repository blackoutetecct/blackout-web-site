import './style.css'


import project1 from '../../images/sustenapp-logo.png'
import project2 from '../../images/eteclogo.png'

export default function Projects() {

    return(

        <section id="projetos" className="projects">
            <h2 > PROJETOS </h2>

            <div className="projectCard">

                <div className="project"> 
                    <div><img src={project1} alt="Projeto" /></div>

                    <h3> SustenApp </h3>

                    <p>Aplicativo para controlar uma de nossas patentes de automatização residencial por baixo custo.</p>

                    <a href="/">Saiba mais</a>     
                    </div>

                <div className="project project2"> 
                    <div><img src={project2} alt="projeto 2" /></div>

                    <h3> Dev. Watch </h3>

                    <p> Projeto didático desenvolvido com o intuito de testar nossas habilidades criando um E-commerce funcional de relógios de luxo como tema central.  </p>

                    <a href="https://github.com/kaiquesouzasantos/etec199-2022-pw2-projetoFinal" target="_blank">Saiba mais</a>     
                    </div>  
            </div>
        </section>

    )
}