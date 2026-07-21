'use client';

import { useSession } from 'next-auth/react'; // v5 compatible
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();
  if (status === 'loading') return null;
  const currentUser = session?.user?.email;
  const role = session?.user?.role;
  return (
    <Navbar expand="lg" className="custom-navbar py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">Club Hale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start px-3">
            <Nav.Link href="/directory" active={pathName === '/directory'}>
              Browse Clubs
            </Nav.Link>
            <Nav.Link href="/clubAdmin" active={pathName === '/clubAdmin'}>
              Manage Your Clubs
            </Nav.Link>
            <Nav.Link href="/superAdmin" active={pathName === '/superAdmin'}>
              Admin Dashboard
            </Nav.Link>
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" className="custom-dropdown" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight className="me-2" />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock className="me-2" />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown 
                id="login-dropdown" 
                className="custom-dropdown btn-header-cta rounded px-2" 
                title="Student Login"
              >
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill className="me-2" />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill className="me-2" />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
