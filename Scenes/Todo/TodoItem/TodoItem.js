import React from 'react';
import { Text } from 'react-native'
import { ListItem, Item, Switch, Left, Right } from 'native-base';

const TodoItem = ({ item,onToggle }) => (
    <ListItem >
        <Left>
            <Text>{item.name}</Text>
        </Left>
        <Right>
            <Switch onValueChange={()=> onToggle(item)}/>
        </Right>
    </ListItem>
)

export default TodoItem