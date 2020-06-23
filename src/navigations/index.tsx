import React, { Dispatch } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../scenes/login-screen/view';
import { AppState, AppActionTypes } from '../store';
import { AppNavigationDispatchProps } from './types'
import { AppNavigationProps, AppNavigationState } from './types'
import { connect } from 'react-redux'


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

const mapStatetoProps = (state: AppState, localProps: AppNavigationProps): AppNavigationProps => {
    return {
        core: state.core
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): AppNavigationDispatchProps => {
    return {}
}

export default connect(mapStatetoProps, mapDispatchToProps)(AppNavigation)