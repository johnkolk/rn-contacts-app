import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';

export const FlatListScreen = (props) => {
    const [currentItem, setCurrentItem] = useState('');
    const [items, setItems] = useState([
        { id: 1, width: 200 },
        { id: 2, width: 200 },
        { id: 3, width: 200 },
        { id: 4, width: 200 },
        { id: 5, width: 200 },
    ]);

    const interval = items[0].width;

    const onItemFocus = ({ id }) => {
        console.log(id);
        setCurrentItem(id);
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onFocus={() => onItemFocus(item)}>
                <View
                    style={{
                        backgroundColor: 'blue',
                        width: item.width,
                        height: item.width,
                        marginRight: 6,
                    }}
                >
                    <Text style={{ color: '#fff' }}>{item.width}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <FlatList
                data={[...items]}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                snapToAlignment="center"
                snapToInterval={interval}
                getItemLayout={(data, index) => ({
                    length: interval,
                    offset: interval * index,
                    index,
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({});
