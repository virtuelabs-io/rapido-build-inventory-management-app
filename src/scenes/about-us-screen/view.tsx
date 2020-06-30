import React from 'react'
import { View } from 'react-native'
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { AboutUsScreenProps, AboutUsScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { connect } from 'react-redux'
import { AppState } from '../../store'

class AboutUsScreen extends React.Component<AboutUsScreenProps, AboutUsScreenState> {
    constructor(props: AboutUsScreenProps) {
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

const mapStatetoProps = (state: AppState, localProps: AboutUsScreenProps): AboutUsScreenProps => {
    return {
        ...localProps,
        data: {
            title: state.core.rootStackParams.settingsStack.aboutUs.title
        }
    }
}

export default connect(mapStatetoProps)(AboutUsScreen)