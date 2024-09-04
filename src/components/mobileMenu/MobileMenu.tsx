import { useEffect  } from "react";
import { Overlay, MobileTitle, StyledMenuLink, Nav, MenuExit, Img, TitleWrapper, ModileDashboard, ModileUsers, ExitWrapper, ExitIcon } from './MobileMenu.styled';
import Image from '../../assets/icons/logo.svg';


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
      <TitleWrapper>
        <Img src={Image} alt="logo"/>
        <MobileTitle>User management system</MobileTitle>
      </TitleWrapper>
        <Nav>
          <StyledMenuLink to='/dashboard' aria-label="link to dashboard page" onClick={onClose}>
          <ModileDashboard/>
            Dashboard
          </StyledMenuLink>
          <StyledMenuLink to='users' aria-label="link to users page" onClick={onClose}>
            <ModileUsers/>
            Users
            </StyledMenuLink>
        </Nav>
        <ExitWrapper>
        <ExitIcon/>
        <MenuExit>Exit</MenuExit>
        </ExitWrapper>
    </Overlay>
  )
}

export default MobileMenu;
