import { useState } from 'react';
import { IconContext } from 'react-icons';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router';
import { navbarData } from '../../data/NavbarData';
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './NavbarStyles';

export function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  let history = useHistory();
  let location = useLocation();

  function handleClick() {
    setShow(!show);
  }

  function scrollTo(id: string) {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  function closeMobileMenu(to: string, id: string | undefined) {
    if (id && location.pathname === '/') {
      scrollTo(id);
    }
    history.push(to);
    setShow(false);
  }

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            <NavIcon src='./assets/images/logo.png' alt='logo' />
            Delta
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {navbarData.map((item, index) => {
              return (
                <NavItem key={index}>
                  <NavLinks onClick={() => closeMobileMenu(item.to, item.id)}>
                    {item.text}
                  </NavLinks>
                </NavItem>
              );
            })}
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
}
