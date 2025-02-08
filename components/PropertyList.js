import React, { useState } from 'react';
import styled from 'styled-components';

const PropertyList = () => {
  const [minRating, setMinRating] = useState(0);

  // Sample data for properties
  const properties = [
    { id: 1, name: 'Cozy Cottage', location: 'New York', price: '$120/night', rating: 4.5 },
    { id: 2, name: 'Modern Apartment', location: 'San Francisco', price: '$150/night', rating: 4.0 },
    { id: 3, name: 'Beach House', location: 'Miami', price: '$200/night', rating: 4.8 },
  ];

  const filteredProperties = properties.filter(property => property.rating >= minRating);

  return (
    <div>
      <label>
        Minimum Rating:
        <input
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          min="0"
          max="5"
        />
      </label>
      <List>
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id}>
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
            <p>Rating: {property.rating}</p>
          </PropertyCard>
        ))}
      </List>
    </div>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

const PropertyCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export default PropertyList;
