import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SortDropdown from './SortDropdown';
import CategoryDropdown from './CategoryDropdown';
import './NavBar.css';

const MyNavbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSortBy = (sortBy) => {
    // Update the URL with the selected sort option
    navigate(`?page=1&sortBy=${sortBy}&q=${getSearchTermFromURL(location.search)}`);
  };

  const getSearchTermFromURL = (search) => {
    const params = new URLSearchParams(search);
    return params.get("q") || "";
  };

  const handleCategoryClick = () => {
    props.setIsSearch(false);
  };

  const handleFavoritesClick = () => {
    navigate('/favorites');
  };

  const getSortByFromURL = (search) => {
    const params = new URLSearchParams(search);
    const sortBy = params.get("sortBy");
    return sortBy || "publishedAt"; 
    // Default to publishedAt if sortBy is not specified
  };

  return (
    <Navbar className="light-blue-navbar" bg="light" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={handleCategoryClick}>General</Nav.Link>
            <CategoryDropdown handleCategoryClick={handleCategoryClick} />
            <SortDropdown handleSortBy={handleSortBy} />
          </Nav>
          <Nav>
            <Button
              variant="outline-dark"
              className="ms-lg-2 enlarge-on-hover me-4" 
              style={{ width: '200px', height: '50px' }} 
              onClick={handleFavoritesClick}
            >
              My Favorites
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
