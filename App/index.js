import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TrackScreen} from './Tracks';
import {HomeScreen} from './Home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Track" component={TrackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <MyStack />;
};

export default App;
