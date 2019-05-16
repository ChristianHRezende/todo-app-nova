import React, { Component } from 'react';
import { FlatList } from 'react-native'
import TodoItem from '../TodoItem/TodoItem';
import { View, Text } from 'native-base';

class TodoList extends Component {

    renderItem = (item) => { return (<TodoItem item={item} onToggle={this.props.onToggle} />) }
    render() {
        return (
            <View>
                <Text style={{textAlign:'center',fontWeight:'bold'}}>Todo:</Text>
                <FlatList data={this.props.items} keyExtractor={item => item.name} renderItem={({ item }) => this.renderItem(item)} />
            </View>
        )
    }
}

export default TodoList