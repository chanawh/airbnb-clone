import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import SearchBar from '../components/SearchBar'; // Import SearchBar
import PropertyList from '../components/PropertyList'; // Import PropertyList

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <Navbar /> {/* Use Navbar */}

      <Main>
        <SearchBar /> {/* Use SearchBar */}
        {isLoading ? (
          <p>Loading properties...</p>
        ) : hasError ? (
          <p>Failed to load properties. Please try again later.</p>
        ) : (
          <PropertyList />
        )}
        <p>Explore amazing places to stay!</p>
      </Main>
      <Footer /> {/* Use Footer */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 80px; /* Add padding to account for Navbar height */
  position: relative; /* Ensure Footer is positioned correctly */
  min-height: 100vh; /* Ensure the container takes full height */
`;

const Main = styled.main`
  margin-top: 20px;
  flex: 1; /* Ensure Main takes available space */
  width: 100%; /* Ensure Main takes full width */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;