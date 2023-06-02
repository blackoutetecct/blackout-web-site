import './style.css'


import project1 from '../../images/phone.png'

export default function Projects() {

    return(

        <section id="projetos" className="projects">
            <h2 > PROJETOS </h2>

            <div className="projectCard">

                <div className="project"> 
                    <div><img src={project1} alt="Projeto" /></div>

                    <h3> SustenApp </h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adiacilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>

                    <a href="/">Saiba mais</a>     
                    </div>

                <div className="project"> 
                    <div><img src={project1} alt="Projeto" /></div>

                    <h3> Dev. Watch </h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adiacilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>

                    <a href="/">Saiba mais</a>     
                    </div>  

                <div className="project"> 
                    <div><img src={project1} alt="Projeto" /></div>

                    <h3> Gerenciador De Tarefas </h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adiacilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>

                    <a href="/">Saiba mais</a>     
                </div>

            </div>
        </section>

    )
}