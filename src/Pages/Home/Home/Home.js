import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import { Projects } from '../Projects/Projects';

const Home = () => {
    return (
        <div id="#">
            <Header></Header>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;