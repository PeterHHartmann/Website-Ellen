
import './sass/App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Frontpage from './components/pages/Frontpage';
import About from './components/pages/About';
import Offers from './components/pages/Offers';
import Mindfulness from './components/pages/Mindfulness';
import Pricing from './components/pages/Pricing';
import DataProtection from './components/pages/DataProtection';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route exact path='/' element={<Frontpage/>}/>
          <Route path='om' element={<About/>}/>
          <Route path='tilbud' element={<Offers/>}/>
          <Route path='mindfulness-og-compassion' element={<Mindfulness/>}/>
          <Route path='priser-og-betingelser' element={<Pricing/>}/>
          <Route path='databeskyttelse' element={<DataProtection/>}/>
          <Route path='kontakt' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
