/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.model.css';

function Footer() {
    return(
        <footer className='footer'>
            <div className='linksContainer'>
                <a>Quienes Somos</a>
                <a>Contacto</a>
                <div class="dropdown">
                    <span>Nuestras Redes</span>
                    <div class="dropdown-content">
                    <a href="#">GitHub</a>
                    <a href="https://www.youtube.com/">YouTube</a>
                    <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
            <div className='logoContainer'>
                <p>LOGO</p>
            </div>
        </footer>
    );
}

export default Footer;