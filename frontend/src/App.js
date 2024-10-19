import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClothesList from './components/ClothesList';
import AddClothing from './components/AddClothing';
import OutfitRecommendation from './components/OutfitRecommendation';
import Preferences from './components/Preferences';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add" component={AddClothing} />
          <Route path="/closet" component={ClothesList} />
          <Route path="/recommendations" component={OutfitRecommendation} />
          <Route path="/preferences" component={Preferences} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
