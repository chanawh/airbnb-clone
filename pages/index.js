import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import SearchBar from '../components/SearchBar'; // Import SearchBar
import PropertyList from '../components/PropertyList'; // Import PropertyList

const Home = () => {
  return (
    <Container>
      <Navbar /> {/* Use Navbar */}
      <Header>
        <h1>Welcome to Airbnb Clone</h1>
      </Header>
      <Main>
        <SearchBar /> {/* Use SearchBar */}
        <PropertyList /> {/* Use PropertyList */}
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
  position: relative; /* Ensure Footer is positioned correctly */
  min-height: 100vh; /* Ensure the container takes full height */
`;

const Header = styled.header`
  background-color: #ff5a5f;
  color: white;
  padding: 20px;
  width: 100%;
  text-align: center;
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