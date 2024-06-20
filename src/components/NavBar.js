import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function NavBar() {
  const{user, setUser} = useContext(UserContext);
  

  const[isShopOpen, setShopOpen] = useState(false);
  const[isAboutOpen, setAboutOpen] = useState(false);
  const[isProfileOpen, setProfileOpen] = useState(false);

  const handleMouseEnterShop = () => {
    setShopOpen(true);
  }

  const handleMouseLeaveShop = () => {
    setShopOpen(false);
  }

  const handleMouseEnterAbout = () => {
    setAboutOpen(true);
  }

  const handleMouseLeaveAbout = () => {
    setAboutOpen(false);
  }

  const handleMouseEnterProfile = () => {
    setProfileOpen(true);
  }

  const handleMouseLeaveProfile = () => {
    setProfileOpen(false);
  }

  const handleLogout = async () => {
    try{
      await fetch("/api/logout", {
        method: "POST",
        credentials: "same-origin",
      });
      setUser(null);
    }catch(error) {
      console.log(error);
    }
  };
  
  return (
    <Navbar expand='lg'>
      <Container>
        {user ? (
          <>
          <Navbar.Brand>
          <Link to='/' className='logo'><h1>Ingryd CRM </h1></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="custom-header justify-content-end">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown
              title="Shop"
              id='nav-dropdown'
              show={isShopOpen}
              onMouseEnter={handleMouseEnterShop}
              onMouseLeave={handleMouseLeaveShop}
              >
                <NavDropdown.Item as={Link} to="/shop">Shop All</NavDropdown.Item>
                <NavDropdown.Divider />
                <div className='category-label'>
                  <span> Shop by Category</span>
                </div>
                <NavDropdown.Item as={Link} to="/shop/1">Books</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop/2">Shoes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop/4">Phones</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop/5">Laptops</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop/6">Watches</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                  title="About Us"
                  id="nav-dropdown"
                  show={isAboutOpen}
                  onMouseEnter={handleMouseEnterAbout}
                  onMouseLeave={handleMouseLeaveAbout}
                >
                  <NavDropdown.Item as={Link} to="/about">
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sustainability">
                    Sustainability
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/causes">
                    Causes
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Profile"
                  id="nav-dropdown"
                  show={isProfileOpen}
                  onMouseEnter={handleMouseEnterProfile}
                  onMouseLeave={handleMouseLeaveProfile}
                >
                  <NavDropdown.Item as={Link} to={"/profile-details"}>
                    View Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout} as={Link} to={"/"}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
          <Link to={'/cart'}>
          <div className='shopping-cart-container'>
            <AiOutlineShoppingCart className='shopping-cart' />
          </div>
          </Link>
          </>
        ): (
          <>
          <Navbar.Brand>
          <Link to='/' className='logo'><h1>Ingryd CRM </h1></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="custom-header justify-content-end">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown
                  title="Shop"
                  id="nav-dropdown"
                  show={isShopOpen}
                  onMouseEnter={handleMouseEnterShop}
                  onMouseLeave={handleMouseLeaveShop}
                >
                  <NavDropdown.Item as={Link} to="/shop">
                    Shop All
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div className="category-label">
                    <span>Shop by Category</span>
                  </div>
                  <NavDropdown.Item as={Link} to="/shop/1">
                              Books
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop/2">
                              Shoes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop/4">
                              Phones
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop/5">
                               Laptops
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop/6">
                                Watches
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="About Us"
                  id="nav-dropdown"
                  show={isAboutOpen}
                  onMouseEnter={handleMouseEnterAbout}
                  onMouseLeave={handleMouseLeaveAbout}
                >
                  <NavDropdown.Item as={Link} to="/about">
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sustainability">
                    Sustainability
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/causes">
                    Causes
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </>
        )}
      
     </Container>
    </Navbar>
  )
}

export default NavBar