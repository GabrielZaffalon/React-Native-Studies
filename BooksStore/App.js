import React from 'react';
import {NavigatorContainer} from '@react-navigation/native';

import {AppStack} from './src/routes/app-stack';

const App = () => (
  <NavigatorContainer>
    <AppStack />
  </NavigatorContainer>
);

export default App;
