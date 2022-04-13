import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return <HeaderButton 
        {...props} 
        IconComponent={Ionicons}
        iconSize={22}
        color={Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor}
    />;
};

export default CustomHeaderButton;