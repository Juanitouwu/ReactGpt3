import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo}/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Inicio</a></p>
          <p><a href="#wgpt3">Que es GPT3?</a></p>
          <p><a href="#possibility">Chatbot-amigo</a></p>
          <p><a href="#blog">Chatbots</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
     <p>iniciar sesion</p> 
        <button type="button">Registrarse</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">inicio</a></p>
            <p><a href="#wgpt3">Que es GPT3?</a></p>
            <p><a href="#possibility">Chatbot-amigo</a></p>
           <p><a href="#blog">Chatbots</a></p>
         
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>iniciar sesion</p>
            <button type="button" action="/auth">Registrarse</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
