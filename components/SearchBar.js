import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchContainer>
      <Input type="text" placeholder="Search for places..." />
      <Button>Search</Button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%; /* Ensure SearchContainer takes full width */
  max-width: 600px; /* Optional: Limit the maximum width */
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #ff5a5f;
  background-color: #ff5a5f;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  &:hover {
    background-color: #e04a4e;
  }
`;

export default SearchBar;
