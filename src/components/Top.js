import '../styles/Top.css';
import Logo from '../assets/logo.png';

function Top() {
    return(
        <header>
            <div className="vf-img-container">
                <img src={Logo} alt="Logo" className="vf-logo" />
                <p className="vf-title">Help To Find</p>
            </div>
            <nav className="vf-menu-top">
                <ul className="vf-ul-menu">
                    <li className="vf-li-menu">Who We Are</li>
                    <li className="vf-li-menu">Register Vehicle</li>
                    <li className="vf-li-menu">Some Tips</li>
                    <li className="vf-li-menu">My Data</li>
                </ul>
            </nav>
        </header> 
    )
}

export default Top;