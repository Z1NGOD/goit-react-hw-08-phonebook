import React, { useState } from 'react';
import { DropdownMenu, MainHeader } from './Header.styled';
import { Btn } from 'ui/Btn.styled';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MainHeader>
      <Btn onClick={toggleMenu}>User Menu</Btn>
      <DropdownMenu open={isMenuOpen}>
        <p>User Email: user@example.com</p>
        <Btn>Logout</Btn>
      </DropdownMenu>
    </MainHeader>
  );
}

export default Header;
