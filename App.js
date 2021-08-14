import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './components/MainComponent';
// import ClosetList from './components/ClosetListAddComponent';


export default function App() { //exported at the top
  return (
    <NavigationContainer>
   <Main />
    </NavigationContainer>
  );
}
