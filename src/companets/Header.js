import React from 'react';
import {Link} from "react-router-dom"
import IMG from "../assets/Imeges/Rectangle.png"
const Header = () => {
    return (
        <div className="header">
            <div className="container Header-container">
                <div className="div">

                <div>
                    <img src={IMG} alt=""/>

                </div>

                <ul>

                    <li className="menu-item"><Link to="/home">Home</Link></li>
                    <li className="menu-item"><Link to="/recipes">Recipes</Link></li>
                    <li className="menu-item"><Link to="/meat">Meat</Link></li>
                    <li className="menu-item"><Link to="/about">About</Link></li>
                    <li className="menu-item"><Link to="/blog">Blog</Link></li>
                    <li className="menu-item"><Link to="/support">Support</Link></li>



                </ul>



                <div className="buttons">
                    <a href="https://youtu.be/w00Z5y8jEjk" className="wave-btn">
                        <span className="wave-btn__text">Sign in</span>
                        <span className="wave-btn__waves"> </span>
                    </a>
                    <a href="https://youtu.be/w00Z5y8jEjk" className="wave-btn2">
                        <span className="wave-btn2__text2">Request demo</span>
                        <span className="wave-btn2__waves2"> </span>
                    </a>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Header;

