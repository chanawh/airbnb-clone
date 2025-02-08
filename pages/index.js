import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import SearchBar from '../components/SearchBar'; // Import SearchBar
import PropertyList from '../components/PropertyList'; // Import PropertyList
import { Container, Main } from './HomeStyles'; // Import styled components

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

export default Home;