import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Input is not to be empty!');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                onChangeText={(text) => setValue(text)}
                value={value}
                style={styles.input}
                placeholder="Enter text"
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Button title="+ Add" onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
        borderRadius: 4,
        backgroundColor: 'lavender',
    },
    input: {
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 10,
        fontSize: 20,
        borderColor: 'gainsboro',
        borderWidth: 1,
    },
});
