import { Fragment, useState } from "react";
import '../sass/Content.scss'
import About from "./pages/About";
import Contact from "./pages/Contact";
import DataProtection from "./pages/DataProtection";
import Frontpage from "./pages/Frontpage";
import Mindfulness from "./pages/Mindfulness";
import Offers from "./pages/Offers";
import Pricing from "./pages/Pricing";

const Content = () => {
    const [page, setPage] = useState(0)

    return (
        <Fragment>
            <div className="page-selection">
                <div onClick={() => setPage(0)}>Forside</div>
                <div onClick={() => setPage(1)}>Om mig</div>
                <div onClick={() => setPage(2)}>Hvad tilbyder jeg?</div>
                <div onClick={() => setPage(3)}>Mindfulness og Compassion</div>
                <div onClick={() => setPage(4)}>Priser og betingelser</div>
                <div onClick={() => setPage(5)}>Databeskyttelse</div>
                <div onClick={() => setPage(6)}>Kontakt</div>
            </div>
            <div className='current-page'>
                <Frontpage currentPage={page}/>
                <About currentPage={page}/>
                <Offers currentPage={page}/>
                <Mindfulness currentPage={page}/>
                <Pricing currentPage={page}/>
                <DataProtection currentPage={page}/>
                <Contact currentPage={page}/>
            </div>
        </Fragment>
    );

}

export default Content