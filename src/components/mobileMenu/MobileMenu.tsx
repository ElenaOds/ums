import { useEffect  } from "react";

import { Overlay, MobileTitle, StyledMenuLink, Nav, MenuExit } from './MobileMenu.styled';

interface ModalProps {
    onClose: () => void;
    isModalOpen: boolean;
  }

const MobileMenu: React.FC<ModalProps> = ({onClose, isModalOpen}) => {

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);


  return (
    <Overlay className={isModalOpen ? 'isOpen' : ''}>
        <MobileTitle>User management system</MobileTitle>
        <Nav>
          <StyledMenuLink to='/dashboard' aria-label="link to dashboard page" onClick={onClose}>Dashboard</StyledMenuLink>
          <StyledMenuLink to='users' aria-label="link to users page" onClick={onClose}>Users</StyledMenuLink>
        </Nav>
        <MenuExit>Exit</MenuExit>
    </Overlay>
  )
}

export default MobileMenu;
