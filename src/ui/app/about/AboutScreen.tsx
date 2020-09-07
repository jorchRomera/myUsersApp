import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { relativeValueToDP as rv } from '../../lib/ResponsiveUtils';
import { sharedStyles } from '../sharedStyles';

export const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>{"Hello I'm Jorge Romera"}</Text>
            <Text>and</Text>
            <Text>this is my React Native Test.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: rv(100),
        fontFamily: sharedStyles.fonts.nunitoBold,
    },
});
