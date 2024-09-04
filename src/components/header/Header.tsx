import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MobileMenu from '../mobileMenu/MobileMenu';
import Image from '../../assets/images/avatar.png';
import { StyledHeader, Title, UserWrapper, Img, UserName, UserEmail, ModalBtn, FirstLine, SecondLine, ThirdLine } from './Header.styled';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const getHeaderText = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/users':
        return 'Users';
      default:
        return 'Dashboard';
    }
  };

  return (
    <StyledHeader>
      <Title>{getHeaderText()}</Title>
      <UserWrapper>
        <Img src={Image} alt="avatar"/>
        <div>
          <UserName>Adam Smith</UserName>
          <UserEmail>adamsmith@gmail.com</UserEmail>
        </div>
      
      <ModalBtn type="button" onClick={toggleModal} className={isModalOpen ? 'isOpen' : ''}>
        <FirstLine></FirstLine>
        <SecondLine></SecondLine>
        <ThirdLine></ThirdLine>
      </ModalBtn>
      </UserWrapper>
      <MobileMenu onClose={toggleModal} isModalOpen={isModalOpen}/>
    </StyledHeader>
  )
}

export default Header
