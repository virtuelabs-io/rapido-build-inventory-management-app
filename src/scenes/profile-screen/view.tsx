import React from 'react'
import { View } from 'react-native'
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { ProfileScreenProps, ProfileScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class ProfileScreen extends React.Component<ProfileScreenProps, ProfileScreenState> {
    constructor(props: ProfileScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.name))
        console.log(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.name}</RText>
            </View>
        )
    }
}

export default ProfileScreen