import React from "react";
import { NavbarWrapper, Nav, NavItems, NavItem, MobileMenu } from "./styled";
import { RiHome3Line, RiSlideshowLine, RiSlideshow3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <Nav>
          <h1>LOGO</h1>
          <NavItems>
            <NavItem>
              <a href="#home">Home</a>
            </NavItem>
            <NavItem>
              <a href="#about">About</a>
            </NavItem>
            <NavItem>
              <a href="#work">Works</a>
            </NavItem>
          </NavItems>
          <MobileMenu>
            <NavItem>
              <a href="#home">
                <RiHome3Line />
              </a>
            </NavItem>
            <NavItem>
              <a href="#about">
                <RiSlideshow3Line />
              </a>
            </NavItem>
            <NavItem>
              <a href="#work">
                <RiSlideshowLine />
              </a>
            </NavItem>
          </MobileMenu>
        </Nav>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
