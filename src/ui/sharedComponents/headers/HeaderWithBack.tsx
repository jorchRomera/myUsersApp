import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { relativeValueToDP as rv } from '../../lib/ResponsiveUtils';
import { sharedStyles } from '../../app/sharedStyles';
import { Header } from './Header';

export const HeaderWithBack: React.FC<Props> = (props) => {
    return (
        <View>
            <Header title={props.title}/>
            <TouchableOpacity style={styles.container} onPress={props.onPress} activeOpacity={0.7}>
                <Image source={require('./icon-back.png')} style={styles.icon}/>
                <Text style={styles.text}>{props.goBackText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: rv(45),
        left: rv(45),
    },
    icon: {
        width: rv(90),
        height: rv(90),
    },
    text: {
        color: '#007AFF',
        fontFamily: sharedStyles.fonts.nunitoSemiBold,
        fontSize: rv(60),
    },
});

interface Props {
    title: string;
    goBackText?: string;
    onPress: () => void;
}
