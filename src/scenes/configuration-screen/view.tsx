import React from 'react'
import { View } from 'react-native'
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { ConfigurationScreenProps, ConfigurationScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class ConfigurationScreen extends React.Component<ConfigurationScreenProps, ConfigurationScreenState> {
    constructor(props: ConfigurationScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.name))
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.name}</RText>
            </View>
        )
    }
}

export default ConfigurationScreen