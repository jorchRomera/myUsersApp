import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { relativeValueToDP as rv } from '../../lib/ResponsiveUtils';
import { sharedStyles } from '../sharedStyles';

export const UserDetailsScreen = (props: any) => {
    const { user } = props.route.params;
    if (!user) {
        return (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#F44548"/></View>);
    }
    const { city, name, picture, street } = user;
    return (
        <View style={styles.screenContainer}>
            <SafeAreaView style={{ flexGrow: 1 }}>
                <View style={styles.detailsContainer}>
                    <Image source={{ uri: picture }} style={styles.image}/>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{street}, {city}</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: 'white',
        flexGrow: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    detailsContainer: {
        alignItems: 'center',
        marginTop: rv(180),
    },
    image: {
        height: rv(400),
        width: rv(400),
        borderRadius: rv(50),
    },
    text: {
        fontFamily: sharedStyles.fonts.nunitoSemiBold,
        fontSize: rv(55),
        marginTop: rv(40),
    },
});
