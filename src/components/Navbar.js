import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { THEME } from '../theme';

export const Navbar = ({ title, onOpenFList }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
            <Button title="Flatlist" onPress={onOpenFList} />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: THEME.HEADER_COLOR,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
