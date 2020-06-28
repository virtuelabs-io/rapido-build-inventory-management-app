import React, { Dispatch } from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../scenes/login-screen/view';
import { AppState, AppActionTypes } from '../store';
import { AppNavigationDispatchProps } from './types'
import { AppNavigationProps, AppNavigationState } from './types'
import { connect } from 'react-redux'
import ResetCodeScreen from '../scenes/reset-code-screen/view'
import { RootStackParamsType, AuthStackNavigationParamsType } from '../store/core/types';



const AuthStackNavigator = createStackNavigator();

type AuthStackScreenProps = StackScreenProps<RootStackParamsType, 'authStack'>;

class AppNavigation extends React.Component<AppNavigationProps, AppNavigationState> {

    constructor(props: AppNavigationProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <NavigationContainer>
                <AuthStackNavigator.Navigator initialRouteName="login">
                    <AuthStackNavigator.Screen
                        name="login"
                        component={LoginScreen}
                        initialParams={this.props.core.rootStackParams.authStack.login}
                    />
                    <AuthStackNavigator.Screen
                        name="resetCode"
                        component={ResetCodeScreen}
                        initialParams={this.props.core.rootStackParams.authStack.resetCode}
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