import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { AppCard } from '../components/UI/AppCard';
import { EditModal } from '../components/EditModal';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo, onRemove }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.text}>Title: {todo.title}</Text>
                <Button onPress={() => setModalVisible(true)} title="Edit" />
            </AppCard>

            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Button title="Back" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        color={THEME.DANGER_COLOR}
                        onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>

            <EditModal
                value={todo.title}
                modalVisible={modalVisible}
                closeModal={() => setModalVisible(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    card: {
        marginBottom: 20,
        padding: 15,
        height: 300,
        backgroundColor: THEME.SECONDARY_COLOR,
    },
    button: {
        width: '45%',
    },
    text: {
        fontSize: 20,
    },
});
