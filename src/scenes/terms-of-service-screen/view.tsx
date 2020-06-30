import React from 'react'
import { View } from 'react-native'
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { TermsOfServiceScreenProps, TermsOfServiceScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { connect } from 'react-redux'
import { AppState } from '../../store'


class TermsOfServiceScreen extends React.Component<TermsOfServiceScreenProps, TermsOfServiceScreenState> {
    constructor(props: TermsOfServiceScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.data.title))
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.data.title}</RText>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: TermsOfServiceScreenProps): TermsOfServiceScreenProps => {
    return {
        ...localProps,
        data: {
            title: state.core.rootStackParams.settingsStack.termsOfService.title
        }
    }
}

export default connect(mapStatetoProps)(TermsOfServiceScreen)