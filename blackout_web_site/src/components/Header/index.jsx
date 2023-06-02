import './style.css';

import { useState } from 'react';
import whiteBlackout from '../../images/blackoutBranco.png'

export default function Header() {

  const body = document.querySelector("body")
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  if (isOpen === true)  {
    body.style.overflowY = "hidden"
  } else {
    const body = document.querySelector("body")
    body.style.overflowY = "scroll"
  }

  return (
    <header>
      <img src={whiteBlackout} className={`${isOpen && 'image-position-left'}`} alt="Logo" />

      { !isOpen &&
      <nav>
        <ul className={`menu-list`}>
          <li>
            <a href="#" className="first-link">Home</a>
          </li>
          <li>
            <a href="#quemSomos">Quem somos</a>
          </li>
          <li>
            <a href="#equipe">Equipe</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </ul>
      </nav>
      }

      <div onClick={toggleMenu} className={` ${isOpen ? 'menuOpen' : ''}`}>
          <div className='line-on-the-right'>
            <div className={`${isOpen && 'closeMenuLeft'} line`}></div>
            <div className={` ${isOpen && 'no-display'}  line`}></div>
            <div className={`${isOpen && 'closeMenuRight'} line`}></div>
          </div>

          { isOpen && 
          <nav className='open'>
          <ul className={`menu-list ${isOpen && 'open display-block'}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#quemSomos">Quem somos</a>
            </li>
            <li>
              <a href="#equipe">Equipe</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </nav>
        }

      </div>
    </header>

  )
}
