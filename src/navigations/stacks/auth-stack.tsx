import React from 'react';
import { AuthStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import LoginScreen from '../../scenes/login-screen/view';
import ResetCodeScreen from '../../scenes/reset-code-screen/view'



const AuthStackNavigator = createStackNavigator<AuthStackNavigationParamsType>();

type AuthStackScreenProps = StackScreenProps<RootStackParamsType, 'authStack'>;

export class AuthStackNavigation extends React.Component<AuthStackScreenProps> {
    constructor(props: AuthStackScreenProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <AuthStackNavigator.Navigator initialRouteName="login">
                <AuthStackNavigator.Screen
                    name="login"
                    component={LoginScreen}
                    initialParams={this.props.route.params.login}
                />
                <AuthStackNavigator.Screen
                    name="resetCode"
                    component={ResetCodeScreen}
                    initialParams={this.props.route.params.resetCode}
                />
            </AuthStackNavigator.Navigator>
        )
    }
}