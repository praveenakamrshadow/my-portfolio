import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import BackToTopButton from './components/BackToTop.jsx/BackToTopButton.jsx';
import Loader from './components/loader/Loader.js';
import './App.css';

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    background: linear-gradient(
            38.73deg,
            rgba(204, 0, 187, 0.15) 0%,
            rgba(201, 32, 184, 0) 50%
        ),
        linear-gradient(
            141.27deg,
            rgba(0, 70, 209, 0) 50%,
            rgba(0, 70, 209, 0.15) 100%
        );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const ResponsiveBackToTopButton = styled(BackToTopButton)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        transform: translateX(100vw);
    }
`;

function App() {
    const [darkMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <ResponsiveBackToTopButton />
            <Router>
                <Navbar />
                <Body>
                    <HeroSection />
                    <Wrapper>
                        <Skills />
                        <Experience />
                    </Wrapper>
                    <Projects
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    />
                    <Wrapper>
                        <Education />
                        <Contact />
                    </Wrapper>
                    <Footer />
                    {openModal.state && (
                        <ProjectDetails
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    )}
                </Body>
            </Router>
        </ThemeProvider>
    );
}

export default App;
