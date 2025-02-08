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

  @media (max-width: 768px) {
    margin-top: var(--margin-top-mobile, 10px);
  }
`;