import React from 'react';
import { Button } from 'react-native';

class LoginScreen extends React.Component {
    render(): React.ReactNode {
        return (
            <Button title="Log In" onPress={() => console.log('Button pressed')} />
        )
    }
}

export default (LoginScreen)