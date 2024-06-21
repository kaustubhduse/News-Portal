import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import SortIcon from '../UI/SortIcon';
import { useLocation } from 'react-router-dom';

const SortDropdown = ({ handleSortBy }) => {
  const location = useLocation();

  // Function to determine if a sort option is active
  const isActiveSortBy = (sortBy) => {
    const params = new URLSearchParams(location.search);
    const currentSortBy = params.get('sortBy');
    return currentSortBy ? currentSortBy === sortBy : sortBy === 'publishedAt';
    // If currentSortBy exists, check if it matches sortBy
    // Otherwise, default to 'publishedAt' if no sortBy parameter is present
  };

  return (
    <NavDropdown title={<span>Sort by <SortIcon /></span>} id="sort-by-dropdown">
      <NavDropdown.Item
        onClick={() => handleSortBy('relevancy')}
        className={`dropdown-item ${isActiveSortBy('relevancy') ? 'active' : ''}`}
      >
        Relevancy
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => handleSortBy('popularity')}
        className={`dropdown-item ${isActiveSortBy('popularity') ? 'active' : ''}`}
      >
        Popularity
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => handleSortBy('publishedAt')}
        className={`dropdown-item ${isActiveSortBy('publishedAt') ? 'active' : ''}`}
      >
        Published At
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default SortDropdown;
