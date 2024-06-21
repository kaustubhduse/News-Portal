import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form className="d-flex" role="search" onSubmit={handleSearch} style={{ marginBottom: '30px' }}>
      <FormControl
        type="search"
        placeholder="Search for news articles..."
        className="me-2 form-control-lg" // Added form-control-lg class
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-success" type="submit" size="lg">Search</Button>
    </Form>
  );
};

export default SearchBar;
