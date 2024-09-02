import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/icons/logo.svg';
import { ReactComponent as Dashboard} from '../../assets/icons/dashboard.svg';
import { ReactComponent as Users} from '../../assets/icons/users.svg';

export const Aside = styled.aside`
    display: none;

    @media screen and (min-width: 1280px) {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 240px;
      background-color: var(--text-color);
      padding: 36px 20px;
      display: flex;
      flex-direction: column;
    }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 60px;
`

export const StyledLogo = styled(Logo)`  
    width: 32px;
    height: 32px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: var(--secondary-text-color);
  text-align: center;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledLink = styled(NavLink)`  
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: 16px;
`;


export const StyledDashboard = styled(Dashboard)`  
    width: 26px;
    height: 26px;
    stroke: var(--secondary-text-color);
`;

export const StyledUsers = styled(Users)`  
    width: 26px;
    height: 26px;
    stroke: var(--secondary-text-color);
`;


export const NavbarItem = styled.li`
  padding: 11px 8px 11px 11px;
  border-radius: 8px; 
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

    &:hover {
      background-color: var(--secondary-text-color);
    }

    &:hover > ${StyledUsers} {
      stroke: var(--text-color);
    }

     &:hover > ${StyledDashboard} {
      stroke: var(--text-color);
    }

    &:hover > ${StyledLink} {
      color: var(--text-color);
    }
`;

