import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { AppCard } from '../components/UI/AppCard';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.text}>Title: {todo.title}</Text>
                <Button title="Edit" />
            </AppCard>

            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Button title="Back" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        color={THEME.DANGER_COLOR}
                        onPress={() => console.log('Remove')}
                    />
                </View>
            </View>
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
        backgroundColor: THEME.DANGER_COLOR,
    },
    button: {
        width: '45%',
    },
    text: {
        fontSize: 20,
    },
});
