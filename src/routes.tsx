import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import CreateNewList from './pages/CreateNewList';
import Cart from './pages/Cart';
import ItemCart from './pages/ItemCart';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f7f7fe',
          },
        }}
        initialRouteName="ItemCart"
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="CreateNewList" component={CreateNewList} />
        <AppStack.Screen name="Cart" component={Cart} />
        <AppStack.Screen name="ItemCart" component={ItemCart} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
