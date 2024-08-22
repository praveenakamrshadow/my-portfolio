import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled(motion.div)`
    position: fixed;
    bottom: 60px;
    right: 60px;
    background-color: #9000FF;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
    border: none;
    outline: none;
    z-index: 9999;
    transform-origin: center;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
        display: none; /* Hide the button on mobile screens */
    }

    &:hover {
        background-color: #D700FF;
    }
`;

const buttonVariants = {
    initial: { y: 100, scale: 0.8, opacity: 0 },
    animate: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 20,
        },
    },
    exit: {
        y: 100,
        scale: 0.8,
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: 0.95,
    },
};

const BackToTopButton = () => {
    const [showsScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleButtonVisibility = () => {
            window.pageYOffset > 300
                ? setShowScrollBtn(true)
                : setShowScrollBtn(false);
        };
        window.addEventListener('scroll', handleButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleButtonVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {showsScrollBtn && (
                <Button
                    onClick={scrollToTop}
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaArrowUp />
                </Button>
            )}
        </AnimatePresence>
    );
};

export default BackToTopButton;
