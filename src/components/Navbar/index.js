import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { DiCode } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

import {
    Nav,
    NavLink,
    NavbarContainer,
    Span,
    NavLogo,
    NavItems,
    GitHubButton,
    ButtonContainer,
    MobileIcon,
    MobileMenu,
    MobileLink,
    MobileMenuItems,
    MobileMenuButton,
} from './NavbarStyledComponent';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo onClick={scrollToTop}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            textDecoration: 'none',
                        }}
                    >
                        <DiCode size="3rem" /> <Span>Praveen Sahu</Span>
                    </div>
                </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>
                <ButtonContainer style={{ gap: '0.7vw' }}>
                    <GitHubButton
                        style={{ gap: '0.2vw' }}
                        href={Bio.linkedin}
                        target="_blank"
                    >
                        <LinkedIn />
                        LinkedIn
                    </GitHubButton>
                    <GitHubButton
                        style={{ gap: '0.2vw' }}
                        href={Bio.github}
                        target="_blank"
                    >
                        <GitHub /> GitHub
                    </GitHubButton>
                </ButtonContainer>
                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileMenuItems
                            as={motion.div}
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.1 }}
                        >
                            <MobileLink
                                href="#about"
                                onClick={() => setIsOpen(!isOpen)}
                                as={motion.a}
                                variants={itemVariants}
                            >
                                About
                            </MobileLink>
                            <MobileLink
                                href="#skills"
                                onClick={() => setIsOpen(!isOpen)}
                                as={motion.a}
                                variants={itemVariants}
                            >
                                Skills
                            </MobileLink>
                            <MobileLink
                                href="#experience"
                                onClick={() => setIsOpen(!isOpen)}
                                as={motion.a}
                                variants={itemVariants}
                            >
                                Experience
                            </MobileLink>
                            <MobileLink
                                href="#projects"
                                onClick={() => setIsOpen(!isOpen)}
                                as={motion.a}
                                variants={itemVariants}
                            >
                                Projects
                            </MobileLink>
                            <MobileLink
                                href="#education"
                                onClick={() => setIsOpen(!isOpen)}
                                as={motion.a}
                                variants={itemVariants}
                            >
                                Education
                            </MobileLink>
                            <MobileMenuButton
                                href={Bio.linkedin}
                                target="_blank"
                                as={motion.a}
                                variants={itemVariants}
                            >
                                <LinkedIn /> LinkedIn
                            </MobileMenuButton>
                            <MobileMenuButton
                                href={Bio.github}
                                target="_blank"
                                as={motion.a}
                                variants={itemVariants}
                            >
                                <GitHub /> GitHub
                            </MobileMenuButton>
                        </MobileMenuItems>
                    </MobileMenu>
                )}
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
