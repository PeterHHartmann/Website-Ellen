import img_header1 from '../assets/psykologpraksis.png'
import img_header2 from '../assets/dansk-psykolog-forening.png'
import '../sass/Header.scss'

const Header = () => {
    return (
        <header>
            <img src={img_header1} alt="Pyskologpraksis"/>
            <img src={img_header2} alt="Dansk Psykolog Forening" />
        </header>
    );
}

export default Header;