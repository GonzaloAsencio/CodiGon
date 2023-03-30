/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.model.css';
import React, {useState} from 'react';

function Footer() {

        const [isOpen, setIsOpen] = useState(false);
        const handleSelectChange = (event) => {
            console.log("Selected value:", event.target.value);
            setIsOpen(false);
        };
        const handleMenuClick = () => {
            setIsOpen(!isOpen);
        };
        const handleMenuBlur = () => {
            setIsOpen(false);
        };

    return(
        <footer className='footer'>
            <div className='linksContainer'>
                <a>Quienes Somos</a>
                <a>Contacto</a>
                <div
                    className="menu"
                    tabIndex="0"
                    onClick={handleMenuClick}
                    onBlur={handleMenuBlur}
                >
                    <select id="menu" value="" onChange={handleSelectChange}>
                        <option value="" disabled hidden>
                        Nuestras Redes
                        </option>
                        <option value="YouTube">YouTube</option>
                        <option value="GitHub">GitHub</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Linkedin">Linkedin</option>
                    </select>
                </div>
            </div>
            <div className='logoContainer'>
                <p>LOGO</p>
            </div>
        </footer>
    );
}

export default Footer;