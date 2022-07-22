import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './src/routes/app-stack';

const App = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default App;
