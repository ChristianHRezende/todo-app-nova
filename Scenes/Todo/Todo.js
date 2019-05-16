import React, { Component } from 'react';
import TodoList from './TodoList/TodoList'
import axios from 'axios';
import { Container, Header, Content } from 'native-base';
import TodoForm from './TodoForm/TodoForm';
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
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(resp => {
            this.setState({
                items: resp.data.results
            })
        }).catch(error => console.log(error))
    }

    updateTaskStatus = (item) => {
        console.log("Realizar TOGGLE", item)
        this.loadList()
    }

    addTask = (text) =>{
        console.log('Add to list')
        this.loadList()
    }
    
    render() {
        return (
            <Container>
                <TodoForm  addTask ={this.addTask}/>
                <Content>
                    <TodoList items={this.state.items} onToggle={this.updateTaskStatus} />
                </Content>
            </Container>
        )
    }
}

export default Todo