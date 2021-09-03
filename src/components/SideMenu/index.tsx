import React, { useState, useEffect } from 'react';
import { Container } from './style';

const scrollViewSideMenu = 300;

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {

  const [scrollY, setScrollY] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {

    function onScroll() {
      setScrollY(window.scrollY)
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)

  }, [])

  const classes = [
    isActive ? 'open' : ' ',
    scrollY <= scrollViewSideMenu ? 'scrollOpen' : ' '
  ]

  const classesName = classes.join(' ').trim()

  function toggleActiveMenu() {
    setIsActive(prev => !prev)
  }

  window.toggleActiveMenu = toggleActiveMenu;

  return (
    <Container className={classesName}>
      {children}
    </Container>
  );
}

export default SideMenu;