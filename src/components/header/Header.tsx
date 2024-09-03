import { useLocation } from 'react-router-dom';
import Image from '../../assets/images/avatar.png';
import { StyledHeader, Title, UserWrapper, Img, UserName, UserEmail } from './Header.styled';

const Header = () => {
  const location = useLocation();

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
      </UserWrapper>
    </StyledHeader>
  )
}

export default Header
