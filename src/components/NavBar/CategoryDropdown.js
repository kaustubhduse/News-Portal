import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import categoryIcon from '../../assets/category.png';

const CategoryDropdown = ({ handleCategoryClick }) => {
  const location = useLocation();

  // Function to determine if a category link should be active
  const isActiveCategory = (categoryPath) => {
    return location.pathname === categoryPath;
  };

  return (
    <NavDropdown
      title={
        <span>
          Categories{' '}
          <img
            src={categoryIcon}
            alt="Category"
            style={{ width: '16px', height: '16px' }}
          />
        </span>
      }
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item
        as={Link}
        to="/"
        active={isActiveCategory('/')}
        onClick={handleCategoryClick}
      >
        General
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to="/Business"
        active={isActiveCategory('/Business')}
        onClick={handleCategoryClick}
      >
        Business
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to="/Entertainment"
        active={isActiveCategory('/Entertainment')}
        onClick={handleCategoryClick}
      >
        Entertainment
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to="/Health"
        active={isActiveCategory('/Health')}
        onClick={handleCategoryClick}
      >
        Health
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to="/Science"
        active={isActiveCategory('/Science')}
        onClick={handleCategoryClick}
      >
        Science
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to="/Sports"
        active={isActiveCategory('/Sports')}
        onClick={handleCategoryClick}
      >
        Sports
      </NavDropdown.Item>
      <NavDropdown.Item
        as={Link}
        to="/Technology"
        active={isActiveCategory('/Technology')}
        onClick={handleCategoryClick}
      >
        Technology
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default CategoryDropdown;
