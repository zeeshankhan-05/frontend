// Displays outfit recommendations based on various factors (i.e. weather, occasion, preferences, clean clothes, etc...)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OutfitRecommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/recommendations');
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended Outfits</h2>
      <ul>
        {recommendations.map((outfit) => (
          <li key={outfit._id}>
            <img src={outfit.imageUrl} alt={outfit.type} width="100" />
            <p>{outfit.type} - {outfit.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutfitRecommendation;