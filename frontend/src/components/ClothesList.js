// Displays all clothing items

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClothesList = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchClothes = async () => {
      const response = await axios.get('/api/clothes');
      setClothes(response.data);
    };
    fetchClothes();
  }, []);

  return (
    <div>
      <h2>Your Closet</h2>
      <ul>
        {clothes.map((item) => (
          <li key={item._id}>
            <img src={item.imageUrl} alt={item.type} width="50" />
            <p>{item.type} - {item.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothesList;