import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/HomePage';
import Detail from './screen/DetailPage';
import Confirm from './screen/ConfirmPage';
import Order from './screen/OrderListPage';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Confirm" component={Confirm} />
            <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
    );
};

export default ScreenStack;