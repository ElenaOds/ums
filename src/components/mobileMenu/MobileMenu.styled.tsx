import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Dashboard} from '../../assets/icons/dashboard.svg';
import { ReactComponent as Users} from '../../assets/icons/users.svg';
import { ReactComponent as Exit} from '../../assets/icons/exit.svg';

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
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

 
   @media screen and (min-width: 768px) {
      top: 82px;
      padding: 60px;
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

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 150px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 200px;
  }
`
export const ModileDashboard = styled(Dashboard)`
  width: 20px;
  height: 20px;
  fill: var(--secondary-text-color);
`;

export const ModileUsers = styled(Users)`
  width: 20px;
  height: 20px;
  fill: var(--secondary-text-color);
`;

export const StyledMenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
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

  &.active > ${ModileDashboard} {
      fill: #1D4ED8;
    }

    &.active > ${ModileUsers} {
      fill: #1D4ED8;
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

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 100px;
  }
`

export const Img = styled.img`
  width: 28px;
  height: 28px;
`;

export const ExitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ExitIcon = styled(Exit)`
  width: 18px;
  height: 18px;
`

