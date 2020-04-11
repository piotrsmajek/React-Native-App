import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={EventList} />
        <Stack.Screen name="Details" component={EventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;