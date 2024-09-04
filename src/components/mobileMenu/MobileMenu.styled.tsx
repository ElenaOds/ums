import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 56px;
   
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 40px;
    background-color: var(--text-color);
    z-index: 100;
    gap: 80px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

 
   @media screen and (min-width: 768px) {
      top: 82px;
      padding: 60px;
      gap: 100px;
    }

    @media screen and (min-width: 1280px) {
      display: none;
    }

    &.isOpen {
      transform: translateX(0);
    }
`;

export const MobileTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;

  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`

export const StyledMenuLink = styled(NavLink)`
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: var(--secondary-text-color);
  
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &.active {
    color: #1D4ED8;
  }
`;

export const MenuExit = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
