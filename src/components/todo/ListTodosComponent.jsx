import React, {Component} from 'react';
import '../../bootstrap.css'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, description: 'Learn react', done: false, targetDate: new Date()},
                {id: 2, description: 'Became an expert in react', done: false, targetDate: new Date()},
                {id: 3, description: 'Visit India', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>list todos</h1>
                <div className={"container"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;
