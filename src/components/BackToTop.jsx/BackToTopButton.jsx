import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BackToTop.css';
import { FaArrowUp } from 'react-icons/fa';

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

    return (
        <AnimatePresence>
            {showsScrollBtn && (
                <motion.div
                    className="back-to-top"
                    onClick={scrollToTop}
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaArrowUp />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackToTopButton;
