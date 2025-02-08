import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa'; // Import an icon from react-icons

const Navbar = () => {
  const isLoggedIn = false; // Replace with actual authentication logic

  return (
    <Nav>
      <LogoContainer>
        <FaHome size={24} /> {/* Icon */}
        <Logo>Airbnb Clone</Logo> {/* Logo Text */}
      </LogoContainer>
      <SearchBar placeholder="Search..." />
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Explore</NavLink>
        <NavLink href="#">Host Your Home</NavLink>
        <NavLink href="#">Help</NavLink>
        {isLoggedIn ? (
          <Dropdown>
            <NavLink href="#">Profile</NavLink>
            <NavLink href="#">Logout</NavLink>
          </Dropdown>
        ) : (
          <NavLink href="#">Login</NavLink>
        )}
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ff5a5f;
  color: white;
  flex-wrap: wrap;
  width: 100%; /* Ensure Navbar spans full width */
  position: fixed; /* Fix Navbar at the top */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure Navbar is above other content */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px; /* Space between icon and text */
`;

const SearchBar = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 0 20px;
  flex: 1;
  max-width: 400px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  & > a {
    display: block;
  }

  &:hover > div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  & > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  & > a:hover {
    background-color: #ddd;
  }
`;

export default Navbar;
