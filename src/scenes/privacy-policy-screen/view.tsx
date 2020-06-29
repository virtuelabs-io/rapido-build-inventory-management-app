import React from 'react'
import { View } from 'react-native'
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { PrivacyPolicyScreenProps, PrivacyPolicyScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState } from '../../store'
import { connect } from 'react-redux'

class PrivacyPolicyScreen extends React.Component<PrivacyPolicyScreenProps, PrivacyPolicyScreenState> {
    constructor(props: PrivacyPolicyScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.data.title))
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.name}</RText>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: PrivacyPolicyScreenProps): PrivacyPolicyScreenProps => {
    return {
        ...localProps,
        data: {
            title: state.core.rootStackParams.settingsStack.privacyPolicy.title
        }
    }
}

export default connect(mapStatetoProps)(PrivacyPolicyScreen)