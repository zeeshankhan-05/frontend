// Set style and color preferences

import React, { useState } from 'react';
import axios from 'axios';

const Preferences = () => {
  const [favoriteColors, setFavoriteColors] = useState('');
  const [preferredStyles, setPreferredStyles] = useState('');

  const handleSavePreferences = async () => {
    try {
      await axios.post('/api/preferences', { favoriteColors, preferredStyles });
      alert('Preferences saved successfully!');
    } catch (error) {
      console.error('Error saving preferences:', error);
      alert('Failed to save preferences.');
    }
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <input
        type="text"
        value={favoriteColors}
        onChange={(e) => setFavoriteColors(e.target.value)}
        placeholder="Favorite Colors (e.g., Red, Blue)"
      />
      <input
        type="text"
        value={preferredStyles}
        onChange={(e) => setPreferredStyles(e.target.value)}
        placeholder="Preferred Styles (e.g., Casual, Formal)"
      />
      <button onClick={handleSavePreferences}>Preferences</button>
    </div>
  );
};

export default Preferences;