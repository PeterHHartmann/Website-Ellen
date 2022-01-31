import { Fragment } from "react/cjs/react.production.min";
import Header from "./Header";
import Footer from "./Footer"
import Navigation from "./Navigation";
import '../sass/Layout.scss';

const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}

export default Layout;