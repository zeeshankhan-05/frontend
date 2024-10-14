// Adds clothing items

import React, { useState } from 'react';
import axios from 'axios';

const AddClothing = () => {
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddClothing = async () => {
    try {
      await axios.post('/api/clothes', { type, color, imageUrl });
      alert('Clothing item added');
    } catch (error) {
      alert('Error adding clothing item');
    }
  };

  return (
    <div>
      <h2>Add Clothing</h2>
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Clothing Type" />
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" />
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <button onClick={handleAddClothing}>Add Clothing</button>
    </div>
  );
};

export default AddClothing;