import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';
import "./index.css"

const App: React.FC = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
