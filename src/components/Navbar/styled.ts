import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: fixed;
  min-height: 80px;
  left: 0;
  right: 0;
  top: 0;
  min-width: 100%;
  background-color: #0f172a;
  z-index: 50;
`;
export const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;

  @media (max-width: 640px) {
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    font-weight: 500;
    color: #f8fafc;
    font-size: 14px;
    padding: 1rem 2rem;
    transition: all 300ms ease-in-out;

    :hover {
      color: #1d4ed8;
    }
  }

  @media (max-width: 600px) {
    a {
      padding: 1.4rem;
      svg {
        width: 25px;
        height: auto;
      }
      :hover {
        color: #0f172a;
      }
    }
  }
`;

export const MobileMenu = styled.ul`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 1.5rem 1rem;
    background-color: #1d4ed8;
    border-radius: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    gap: 0.5rem;
    overflow: hidden;
  }
`;
