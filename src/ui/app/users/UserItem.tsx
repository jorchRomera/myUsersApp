import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { relativeValueToDP as rv } from '../../lib/ResponsiveUtils';
import { sharedStyles } from '../sharedStyles';
import { UserVM } from './UserVM';

export const UserItem: React.FC<Props> = (props) => {
    const { name, picture, phone } = props.user;
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Image style={styles.thumbnail} source={{ uri: picture }} accessibilityLabel={name} />
                <View style={styles.namePhoneContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.phone}>{phone}</Text>
                </View>
                <Image source={require('./icon-forward.png')} style={styles.forwardIcon}/>
            </TouchableOpacity>
            <View style={styles.lineDown}/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: rv(20),
        alignItems: 'center',
    },
    thumbnail: {
        height: rv(200),
        width: rv(200),
        marginRight: rv(30),
        borderRadius: rv(50),
    },
    namePhoneContainer: {
        flexGrow: 1,
        justifyContent: 'space-around',
    },
    name: {
        fontFamily: sharedStyles.fonts.nunitoSemiBold,
        fontSize: rv(60),
    },
    phone: {
        fontFamily: sharedStyles.fonts.nunitoRegular,
        fontSize: rv(40),
    },
    forwardIcon: {
        height: rv(60),
        width: rv(60),
        marginRight: rv(40),
    },
    lineDown: {
        marginLeft: rv(80),
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: rv(1),
        borderStyle: 'solid',
    },
});

interface Props {
    user: UserVM;
    onPress: () => void;
}
