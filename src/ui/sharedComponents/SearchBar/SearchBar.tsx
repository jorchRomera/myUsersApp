import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { relativeValueToDP as rv } from '../../lib/ResponsiveUtils';
import { sharedStyles } from '../../app/sharedStyles';

export const SearchBar: React.FC<Props> = (props) => {
    const renderWithText = () => {
        if (!props.search) { return <></>; }
        return (
            <>
                <TouchableOpacity style={styles.closeButton} onPress={props.onCloseSearchBar}>
                    <Image source={require('./icon-close.png')} style={styles.closeIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={props.onCloseSearchBar}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.searchBar, { width: props.search ? rv(1150) : rv(1380) }]}
                placeholder="Search"
                value={props.search}
                onChangeText={props.onChangeText}/>
            <Image source={require('./icon-magnifying-glass.png')} style={styles.searchIcon} />
            {renderWithText()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1c1c1',
        height: rv(200),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        position: 'absolute',
        top: rv(75),
        left: rv(80),
        height: rv(50),
        width: rv(50),
    },
    searchBar: {
        fontFamily: sharedStyles.fonts.nunitoSemiBold,
        backgroundColor: 'white',
        borderRadius: rv(50),
        margin: rv(30),
        paddingLeft: rv(150),
        paddingRight: rv(150),
        borderStyle: 'solid',
    },
    closeButton: {
        position: 'absolute',
        top: rv(75),
        right: rv(310),
    },
    closeIcon: {
        height: rv(50),
        width: rv(50),
    },
    cancelButton: {
        width: rv(230),
    },
    cancelText: {
        color: '#305e9b',
        fontFamily: sharedStyles.fonts.nunitoSemiBold,
        fontSize: rv(60),
    },
});

interface Props {
    search: string;
    onChangeText: (text: string) => void;
    onCloseSearchBar: () => void;
}
