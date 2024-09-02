import { Aside, StyledLink, StyledLogo, LogoWrapper, Title, NavbarList, StyledDashboard, StyledUsers, NavbarItem } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Aside>
        <LogoWrapper>
            <StyledLogo/>
            <Title>User management system</Title>
        </LogoWrapper>
        <nav>
            <NavbarList>
                <NavbarItem>
                    <StyledDashboard/>
                    <StyledLink to='/' aria-label="link to dashboard page">Dashboard</StyledLink>
                </NavbarItem>
                <NavbarItem>
                    <StyledUsers />
                    <StyledLink to='users' aria-label="link to users page">Users</StyledLink>
                </NavbarItem>
            </NavbarList>
      </nav>
    </Aside>
  )
}

export default Sidebar
