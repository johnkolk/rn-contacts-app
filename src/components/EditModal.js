import React, { useState } from 'react';
import { THEME } from '../theme';
import {
    Modal,
    Alert,
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
} from 'react-native';
import { Todo } from './Todo';

export const EditModal = ({ value, modalVisible, closeModal }) => {
    const [title, setTitle] = useState(value);
    console.log('title', title);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error', 'Title must be use a more then 3 symbols');
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}
        >
            <View style={styles.centeredView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <TextInput
                    value={title}
                    // onChange={}
                    placeholder="Enter todo name"
                    maxLength={64}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />
                <View style={styles.buttons}>
                    <Button
                        color={THEME.DANGER_COLOR}
                        onPress={closeModal}
                        title="Cancel"
                    />
                    <Button onPress={saveHandler} title="Save" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    input: {
        borderColor: THEME.HEADER_COLOR,
        borderWidth: 1,
        width: '100%',
        padding: 14,
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
