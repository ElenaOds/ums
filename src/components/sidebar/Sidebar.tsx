import { Aside, StyledLink, StyledLogo, LogoWrapper, Title, NavbarList, StyledDashboard, StyledUsers, ExitWrapper, SidebarExit, ExitIcon } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Aside>
      <div>
        <LogoWrapper>
            <StyledLogo/>
            <Title>User management system</Title>
        </LogoWrapper>
        <nav>
            <NavbarList>
                <li>
                  <StyledLink to='/dashboard' aria-label="link to dashboard page">
                    <StyledDashboard/>
                    Dashboard
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to='users' aria-label="link to users page">
                    <StyledUsers />
                    Users
                  </StyledLink>
                </li>
            </NavbarList>
      </nav>
      </div>
      <ExitWrapper>
        <ExitIcon/>
        <SidebarExit>Exit</SidebarExit>
      </ExitWrapper>
    </Aside>
  )
}

export default Sidebar;
