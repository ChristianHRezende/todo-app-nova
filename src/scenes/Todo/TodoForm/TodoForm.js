import { Button, Icon, Input, Item } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onChangeTextHandler = (text) => {
        this.setState({ text: text })
    }

    onPressButtonHandler = () => {
        console.log('tste',this.state.text)
        if (this.state.text) {
            this.props.addTask(this.state.text)
        }
    }

    render() {
        return (
            <Item regular style={styles.headerContainer}>
                <Input placeholder="Add new task" onChangeText={this.onChangeTextHandler} value={this.state.text} />
                <Button onPress={this.onPressButtonHandler}><Icon name='add' /></Button>
            </Item>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10
    }
})

export default TodoForm