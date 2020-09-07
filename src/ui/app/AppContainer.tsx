import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'react-native';
import { Navigator } from './Navigator';

enableScreens();

const AppContainer = () => {
    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <Navigator/>
        </>
    );
};

export default AppContainer;
