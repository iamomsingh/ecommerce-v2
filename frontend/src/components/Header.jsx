import {Navbar, Nav, Container, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png'

const Headers = () => {
  return (
   <header>
    <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
            <NavbarBrand href='/'>
                <img src={logo} alt='omShop' />
                OmShop
            </NavbarBrand>
            </LinkContainer>
            <NavbarToggle aria-controls='basic-navbar-nav'></NavbarToggle>
            <NavbarCollapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <LinkContainer to='/cart'>
                    <NavLink>
                        <FaShoppingCart />
                        Cart
                    </NavLink>
                    </LinkContainer>

                    <LinkContainer to='/login'>
                    <NavLink href='/login'>
                        <FaUser />
                        Sign In
                    </NavLink>
                    </LinkContainer>
                </Nav> 
            </NavbarCollapse>
        </Container>
    </Navbar>
   </header>
  )
}

export default Headers