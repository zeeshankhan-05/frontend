// Displays outfit recommendations based on various factors (i.e. weather, occasion, preferences, clean clothes, etc...)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OutfitRecommendation = () => {
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    const fetchOutfits = async () => {
      const response = await axios.get('/api/recommendations');
      setOutfits(response.data);
    };
    fetchOutfits();
  }, []);

  return (
    <div>
      <h2>Recommended Outfits</h2>
      <ul>
        {outfits.map((outfit) => (
          <li key={outfit._id}>
            <img src={outfit.imageUrl} alt={outfit.type} width="50" />
            <p>{outfit.type} - {outfit.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutfitRecommendation;