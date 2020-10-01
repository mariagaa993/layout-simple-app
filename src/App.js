import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = _ => {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            <Home />
            <Footer />
        </div>
    );
};

export default App;