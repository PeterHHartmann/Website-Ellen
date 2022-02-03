import main_logo from '../assets/psykologpraksis.png'
import dp_logo from '../assets/dp-logo.png'
import '../sass/Header.scss'

const Header = () => {
    return (
        <header>
            <img src={main_logo} alt="Pyskologpraksis" className='logo'/>
            <img src={dp_logo} alt="Dansk Psykolog Forening" className='dp-logo'/>
        </header>
    );
}

export default Header;