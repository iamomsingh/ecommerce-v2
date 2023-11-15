import {Navbar, Nav, Container, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png'

const Headers = () => {
  return (
   <header>
    <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
            <NavbarBrand href='/'>
                <img src={logo} alt='omShop' />
                OmShop
            </NavbarBrand>
            <NavbarToggle aria-controls='basic-navbar-nav'></NavbarToggle>
            <NavbarCollapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <NavLink href='/cart'>
                        <FaShoppingCart />
                        Cart
                    </NavLink>

                    <NavLink href='/login'>
                        <FaUser />
                        Sign In
                    </NavLink>
                </Nav> 
            </NavbarCollapse>
        </Container>
    </Navbar>
   </header>
  )
}

export default Headers