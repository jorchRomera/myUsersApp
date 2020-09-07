import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { relativeValueToDP as rv } from '../../lib/ResponsiveUtils';
import LinearGradient from 'react-native-linear-gradient';
import { sharedStyles } from '../../app/sharedStyles';

export const Header: React.FC<Props> = (props) => {
    return (
        <LinearGradient colors={['#c1c1c1', '#efefef']} style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#c1c1c1'}/>
            <View style={styles.content}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginTop: rv(50),
        marginBottom: rv(30),
    },
    text: {
        fontFamily: sharedStyles.fonts.nunitoBold,
        fontSize: rv(56),
        textAlign: 'center',
    },
});

interface Props {
    title: string;
}
