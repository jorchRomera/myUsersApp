import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { relativeValueToDP as rv } from '../../../lib/ResponsiveUtils';
import { sharedStyles } from '../../../app/sharedStyles';

export const PaginationFooter: React.FC<Props> = (props) => {
    const { currentPage, lastPage } = props;
    return (
        <View style={styles.container}>
            <View style={styles.arrowsContainer}>
                <TouchableOpacity onPress={() => props.onChangePage(1)} disabled={currentPage === 1} >
                    <Image source={require('./icon-first-page.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onChangePage(currentPage - 1)} disabled={currentPage === 1}>
                    <Image source={require('./icon-back.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>{currentPage} of {lastPage}</Text>
                <TouchableOpacity onPress={() => props.onChangePage(currentPage + 1)} disabled={currentPage === lastPage}>
                    <Image source={require('./icon-forward.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onChangePage(lastPage)} disabled={currentPage === lastPage}>
                    <Image source={require('./icon-last-page.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: rv(200),
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowsContainer: {
        flexDirection: 'row',
        width: rv(1000),
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        fontFamily: sharedStyles.fonts.nunitoRegular,
    },
});

interface Props {
    currentPage: number;
    lastPage: number;
    onChangePage: (page: number) => void;
}
