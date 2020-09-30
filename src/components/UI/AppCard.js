import React from 'react';
import { View, StyleSheet } from 'react-native';

export const AppCard = (props) => {
    return (
        <View style={{ ...styles.default, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: '#efefef',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 10,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
    },
});
