import React from 'react';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';
import { BottomTabBarOptions } from "@react-navigation/bottom-tabs";
import { StackNavigationOptions } from "@react-navigation/stack";
import { RFeatherIconButton } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-icon-button/view';
import Constants from '../../commons/constants';



export const StackStyleConstants = {
    headerStyle: {
        backgroundColor: Colors.secondary,
        borderBottomWidth: 1,
        borderBottomColor: Colors.codes.grayLighter,
        shadowColor: Colors.codes.black,
    },
    headerTintColor: Colors.primary,
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: Utils.getTabTitleFontFamily(),
    },
    headerBackTitleStyle: {
        fontFamily: Utils.getTabTitleFontFamily(),
    }
}


export const getStackStyles = (title: string, icon?: string, buttonOnPress?: (data?: any) => void): StackNavigationOptions => {
    var options: StackNavigationOptions = {
        title: title,
        headerStyle: StackStyleConstants.headerStyle,
        headerTintColor: StackStyleConstants.headerTintColor,
        headerTitleStyle: StackStyleConstants.headerTitleStyle,
        headerBackTitleStyle: StackStyleConstants.headerBackTitleStyle
    }
    if (icon && buttonOnPress) {
        options = {
            ...options,
            headerRight: () => (
                <RFeatherIconButton
                    icon={icon}
                    onPress={buttonOnPress}
                    size={28}
                />
            )
        }
    }

    return {
        ...options
    }
}

export const getTabIcon = (route: string) => {
    const lsettings = Constants.NAV.stackNames
    var iconName: string = Constants.DEFAULT_ICON

    if (route == lsettings.productStack.name) {
        iconName = lsettings.productStack.icon
    }
    if (route == lsettings.settingsStack.name) {
        iconName = lsettings.settingsStack.icon
    }
    if (route == lsettings.categorizationStack.name) {
        iconName = lsettings.categorizationStack.icon
    }
    return iconName
}

export const getTabBarStyles = (): BottomTabBarOptions => {
    return {
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.inActive,
        showLabel: true,
        labelStyle: {
            fontFamily: Utils.getFontFamily()
        }
    }
}

export const getTabLabel = (route: string) => {
    const lsettings = Constants.NAV.stackNames
    var tabLabel: string = "Tab"

    if (route == lsettings.settingsStack.name) {
        tabLabel = lsettings.settingsStack.displayText
    }
    if (route == lsettings.productStack.name) {
        tabLabel = lsettings.productStack.displayText
    }
    if (route == lsettings.categorizationStack.name) {
        tabLabel = lsettings.categorizationStack.displayText
    }
    return tabLabel
}