import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding, 20px);
  padding-top: var(--navbar-height, 80px); /* Add padding to account for Navbar height */
  position: relative; /* Ensure Footer is positioned correctly */
  min-height: 100vh; /* Ensure the container takes full height */
  background-color: var(--background-color, #fff);
  max-width: var(--max-width, 1200px); /* Add max-width for better layout on large screens */
  margin: 0 auto; /* Center the container */

  @media (max-width: 768px) {
    padding: var(--padding-mobile, 10px);
    padding-top: var(--navbar-height-mobile, 60px);
  }
`;

export const Main = styled.main`
  margin-top: var(--margin-top, 20px);
  flex: 1; /* Ensure Main takes available space */
  width: 100%; /* Ensure Main takes full width */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--box-shadow, 0 4px 8px rgba(0, 0, 0, 0.1)); /* Add box shadow */
  border-radius: var(--border-radius, 8px); /* Add border radius */
  transition: var(--transition, all 0.3s ease); /* Add transition */

  @media (max-width: 768px) {
    margin-top: var(--margin-top-mobile, 10px);
  }
`;