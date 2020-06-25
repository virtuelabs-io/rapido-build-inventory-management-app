import React, { Dispatch }  from 'react';
import { Button, View } from 'react-native';
import { LoginScreenProps, LoginScreenState, LoginDetailsDispatchProps } from './types'
import { connect } from 'react-redux';
import { AppState, AppActionTypes } from '../../store';
import { signInUser, setCountry, setPhoneNumber, setPassword, signOutUser } from '../../store/core/actions';
import { RButton } from '@virtuelabs-io/rapido-modules/src/components/atoms';

class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
    constructor(props: LoginScreenProps) {
        console.log("Anirup")
        console.log(props)
        super(props)
        console.log(this.props.data)
       // this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <View>
                <Button title="Log In" onPress={this.props.signInUser} />
                <Button title="Log Out" onPress={this.props.signOutUser} />
                <RButton name="Custom Button" onPress={() => console.log('Custom button clicked!')} />
            </View>
            
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: LoginScreenProps): LoginScreenProps => {
    return {
        ...localProps,
        data: {
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber,
            password: state.core.coreData.password
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): LoginDetailsDispatchProps => {
    return {
        signInUser: () => dispatch(signInUser()),
        signOutUser: () => dispatch(signOutUser()),
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setPassword: (password: string) => dispatch(setPassword(password))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen)