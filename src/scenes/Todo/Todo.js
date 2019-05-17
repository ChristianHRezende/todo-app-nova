import React, { Component } from 'react';
import TodoList from './TodoList/TodoList'
import { Container, Header, Content } from 'native-base';
import TodoForm from './TodoForm/TodoForm';
import { getTodos, postTodo, putTodo } from '../../api';
class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { name: 'joao' }, { name: 'Gu' }
            ]
        }
    }
    componentDidMount() {
        this.loadList()
    }

    loadList = () => {
        getTodos().then(resp => {
            this.setState({
                items: resp.data
            })
        }).catch(error => console.log( error))
    }

    updateTaskStatus = (item) => {
        console.log("Realizar TOGGLE", item)
        putTodo(item,item.id).then(()=>this.loadList())   
    }

    addTask = (text) => {
        postTodo({name:text,isCompleted:false}).then(()=>this.loadList())
    }

    render() {
        return (
            <Container>
                <TodoForm addTask={this.addTask} />
                <Content>
                    <TodoList items={this.state.items} onToggle={this.updateTaskStatus} />
                </Content>
            </Container>
        )
    }
}

export default Todo