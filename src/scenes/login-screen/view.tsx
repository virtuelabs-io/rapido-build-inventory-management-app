import React, { Dispatch }  from 'react';
import { Button } from 'react-native';
import { LoginScreenProps, LoginScreenState, LoginDetailsDispatchProps } from './types'
import { connect } from 'react-redux';
import { AppState, AppActionTypes } from '../../store';
import { signInUser, setCountry, setPhoneNumber, setPassword } from '../../store/core/actions';

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
            <Button title="Log In" onPress={this.props.signInUser} />
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
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setPassword: (password: string) => dispatch(setPassword(password))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen)