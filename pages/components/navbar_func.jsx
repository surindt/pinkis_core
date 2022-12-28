import React, { useState, useEffect, useRef } from 'react';
import useScrollBlock from './useScrollBlock';
import Logo from "./logo";


const Navbar2 = (param) =>{
    const [blockScroll, allowScroll] = useScrollBlock();
    const [active, setActive] = useState(false);

    
    const toggleActive = () => {
        
        if (active == false) {
            setActive(() => true)
            blockScroll();
       
        }
        if (active == true) {
            setActive(() => false)
            allowScroll();
        
        }
      }
    function renderToggle() {
        return active === false ? 'nav__active' : 'nav__not__active';
    };
    
    return(
        <div>
                
        <div className="menu__hamb__sticky ">
           
            <div className={"nav__mobile__prin "+(param.goingUp)}>
                <div className="logo__item">
                    <a href="#init" onClick={toggleActive} className="nav__link"> <Logo load={param.load} /> </a>
                </div>
                <div onClick={toggleActive} className="container__menu_three">
                    
                    <div className={"three__lines__"+(param.load)}>
                        <span></span>
                    </div>
                </div>
            </div>
               
        </div>
                       

        <nav className={renderToggle()+"__"+(param.load)}>
            
            <ul className={"nav__f__"+(param.goingUp)}>
                <li className="nav__item exception">
                    <ul className="nav__web">    
                        <li onClick={toggleActive} className="nav__item nav__mobile">
                            <a href="#services" className="nav__link__web">SERVICIOS</a>
                        </li>
                        <li onClick={toggleActive} className="nav__item nav__mobile">
                            <a href="#aboutme" className="nav__link__web"> SOBRE MÍ</a>
                        </li>
                        <li onClick={toggleActive} className="nav__item nav__mobile">
                            <a href="#contact" className="nav__link__web">CONTACTO</a>
                        </li>
                        <li onClick={toggleActive} className="nav__item nav__mobile">
                            <a href="https://estilizatusideas.gumroad.com/" className="nav__link__web">SHOP</a>
                        </li>
                    </ul>
                </li>
                
                <li className="nav__item menu__logo">
                    <ul className="logo__hamburger">
                        <li className="nav__item">
                            <a href="#init" onClick={toggleActive} className="nav__link"> <Logo load={param.load} /> </a>
                        </li>
                        <li className="toogle__menu menu__onlymobile"> 
                            <div onClick={toggleActive} className="container__hamb">
                              
                            <div className="hamburger"><span></span></div></div>
                        </li>
                    </ul>
                </li>
                <li className="nav__item item_social">
                    <ul className="nav__social">
                        <li className="nav__item__social menu__onlymobile">
                            <a href="" className="nav__link__social">
                                Di <span className="hola">hola</span> :)) 
                            </a>
                        </li>
                        <li className="nav__item__social lessFontSize__social orden__cel">
                            <a href="wa.me/525587653861" className="nav__link__social">(<span>mex</span>)55 8765 3861</a>
                        </li>
                        <li className="nav__item__social lessFontSize__social">
                            <a href="https://instagram.com/estilizatusideas?r=nametag" className="nav__link__social menu__insta">@estilizatusideas</a>
                        </li>
                        <li className="nav__item__social menu__onlymobile lessFontSize__social">
                            <a href="wa.me/525587653861" className="nav__link__social">estilizatusideas@gmail.com</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        
    </div>
     
    );
}

export default Navbar2;