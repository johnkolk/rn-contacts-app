import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { FlatListScreen } from './src/screens/FlatListScreen';

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState(
        Array(100)
            .fill()
            .map((_, index) => {
                return { id: index + 1, title: `Item ${index + 1}` };
            })
    );

    const addTodoHandler = (title) => {
        setTodos((prev) => [
            {
                id: Date.now().toString(),
                title,
            },
            ...prev,
        ]);
    };

    const removeTodo = (id) => {
        const itemTodo = todos.find((item) => item.id === id);
        Alert.alert(
            'Remove item',
            `Are you sure to delete "${itemTodo.title}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null);
                        setTodos((prev) => {
                            return prev.filter((item) => item.id !== id);
                        });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const openTodo = (id) => {
        setTodoId(id);
    };

    let content = (
        <MainScreen
            todos={todos}
            addTodos={addTodoHandler}
            removeTodos={removeTodo}
            onOpen={openTodo}
        />
    );

    const openFlatList = () => {
        setTodoId('flatlist');
    };

    if (todoId && todoId !== 'flatlist') {
        const currentTodo = todos.find((item) => item.id === todoId);
        content = (
            <TodoScreen
                todo={currentTodo}
                onRemove={removeTodo}
                goBack={() => setTodoId(null)}
            />
        );
    } else if (todoId === 'flatlist') {
        content = <FlatListScreen />;
    }

    return (
        <View style={styles.wrapper}>
            <Navbar title="Todo App" onOpenFList={openFlatList} />
            <View style={styles.container}>{content}</View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 200,
    },
    container: {
        padding: 14,
    },
});
