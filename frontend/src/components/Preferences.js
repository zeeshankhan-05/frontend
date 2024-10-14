// Set style and color preferences

import React, { useState } from 'react';
import axios from 'axios';

const Preferences = () => {
  const [favoriteColors, setFavoriteColors] = useState('');
  const [preferredStyles, setPreferredStyles] = useState('');

  const handleSavePreferences = async () => {
    try {
      await axios.post('/api/preferences', { favoriteColors, preferredStyles });
      alert('Preferences saved');
    } catch (error) {
      alert('Error saving preferences');
    }
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <input
        type="text"
        value={favoriteColors}
        onChange={(e) => setFavoriteColors(e.target.value)}
        placeholder="Favorite Colors (comma-separated)"
      />
      <input
        type="text"
        value={preferredStyles}
        onChange={(e) => setPreferredStyles(e.target.value)}
        placeholder="Preferred Styles (comma-separated)"
      />
      <button onClick={handleSavePreferences}>Save Preferences</button>
    </div>
  );
};

export default Preferences;