import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ todos, addTodos, removeTodos, onOpen }) => {
    return (
        <>
            <AddTodo onSubmit={addTodos} />
            <FlatList
                style={styles.todosList}
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Todo todo={item} onRemove={removeTodos} onOpen={onOpen} />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    todosList: {
        marginTop: 10,
    },
});
