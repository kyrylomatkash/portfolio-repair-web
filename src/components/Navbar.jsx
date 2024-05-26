import React from 'react';
import { Box, Flex, Heading, Spacer, useMediaQuery } from '@chakra-ui/react';

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Box
      bg="linear-gradient(to right, #23a6d5, #23d5ab)"
      p={4}
      borderRadius="3xl"
      boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)"
      backdropFilter="blur(10px)"
      webkitBackdropFilter="blur(10px)"
      top={0}
      width="100%"
      zIndex={1}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading
          as="h1"
          size="lg"
          color="white"
          fontWeight="bold"
          letterSpacing="wide"
          mr={4}
          _hover={{ opacity: 0.8 }}
          transition="opacity 0.3s ease"
        >
          Portfolio
        </Heading>
        <Spacer />
        <Flex
          direction={isLargerThan768 ? 'row' : 'column'}
          alignItems={isLargerThan768 ? 'center' : 'flex-start'}
        >
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = ({ href, children }) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        setIsActive(
          scrollPosition >= sectionTop &&
            scrollPosition <= sectionTop + sectionHeight
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [href]);

  return (
    <a
      href={href}
      style={{
        color: isActive ? 'yellow' : 'white',
        fontWeight: isActive ? 'bold' : 'normal',
        fontSize: 'sm',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        transition: 'all 0.3s ease-in-out',
        display: 'block',
        margin: '0.2rem 0',
      }}
      onMouseEnter={e =>
        (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')
      }
      onMouseLeave={e =>
        (e.currentTarget.style.backgroundColor = 'transparent')
      }
    >
      {children}
    </a>
  );
};

export default Navbar;
