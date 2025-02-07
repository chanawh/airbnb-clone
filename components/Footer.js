import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Airbnb Clone. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #ff5a5f;
  color: white;
  padding: 20px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
`;

export default Footer;
