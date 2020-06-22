import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../scenes/login-screen/view';

const AuthStackNavigator = createStackNavigator();

class AppNavigation extends React.Component {
    render(): React.ReactNode {
        return (
            <NavigationContainer>
                <AuthStackNavigator.Navigator initialRouteName="login">
                <AuthStackNavigator.Screen
                    name="login"
                    component={LoginScreen}
                />
                </AuthStackNavigator.Navigator>
            </NavigationContainer>
        )    
    }
}

export default (AppNavigation)