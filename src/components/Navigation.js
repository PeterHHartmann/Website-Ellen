import { Fragment } from "react/cjs/react.production.min";
import { Outlet, NavLink } from "react-router-dom";
import '../sass/Navigation.scss';

const Navigation = () => {

    let activeClassName = 'current'

    let setClassName = (isActive) => {
        let className = isActive ? activeClassName : undefined
        return className;
    }

    return (
        <Fragment>
            <nav>
                <NavLink to='/' className={({ isActive}) => setClassName(isActive)}>
                    Forside
                </NavLink>
                <NavLink to='/om' className={({ isActive}) => setClassName(isActive)}>
                    Om mig
                </NavLink>
                <NavLink to='/tilbud' className={({ isActive}) => setClassName(isActive)}>
                    Hvad tilbyder jeg?
                </NavLink>
                <NavLink to='/mindfulness-og-compassion' className={({ isActive}) => setClassName(isActive)}>
                    Mindfulness og Compassion
                </NavLink>
                <NavLink to='/priser-og-betingelser' className={({ isActive}) => setClassName(isActive)}>
                    Priser og betingelser
                </NavLink>
                <NavLink to='/databeskyttelse' className={({ isActive}) => setClassName(isActive)}>
                    Databeskyttelse
                </NavLink>
                <NavLink to='/kontakt' className={({ isActive}) => setClassName(isActive)}>
                    Kontakt
                </NavLink>
            </nav>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;