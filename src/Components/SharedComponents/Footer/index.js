/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import './footer.model.css';

function Footer() {
    return(
        <footer className='footer'>
            <div className='links-container'>
                <a href={'/'}className='logoText'> {'{CodiGon}'} </a>
                <a href="#nav-bar" className='footer-icon-a'>
                    <FontAwesomeIcon className='footer-icon fa-bounce' icon={faArrowUpWideShort}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;