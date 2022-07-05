import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
	counter = 3;
	state = {
		tasks: [
			{
				id: 0,
				text: "Zrobić forme do lata",
				date: "2022-07-01",
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 1,
				text: "Dostać prace jako Front-End Developer",
				date: "2022-12-31",
				important: true,
				active: true,
				finishDate: null,
			},
			{
				id: 2,
				text: "Zrobić zakupy",
				date: "2022-06-18",
				important: false,
				active: true,
				finishDate: null,
			},
		],
	};

	deleteTask = (id) => {
		let tasks = [...this.state.tasks];
		tasks = tasks.filter((task) => task.id !== id);
		this.setState({
			tasks,
		});
	};
	changeTaskStatus = (id) => {
		const tasks = Array.from(this.state.tasks);
		tasks.forEach((task) => {
			if (task.id === id) {
				task.active = false;
				task.finishDate = new Date().getTime();
			}
		});
		this.setState({
			tasks,
		});
	};

	addTask = (text, date, important) => {
		// console.log("dodany obiekt");
		const task = {
			id: this.counter,
			text: text, //tekst z inputa
			date: date, //data z inputa
			important: important,
			active: true,
			finishDate: null,
		};
		this.counter++;
		console.log(task, this.counter);
		this.setState((prevState) => ({
			tasks: [...prevState.tasks, task],
		}));
		return true;
	};

	render() {
		return (
			<div className="App">
				ToDoApp
				<AddTask add={this.addTask} />
				<TaskList
					tasks={this.state.tasks}
					delete={this.deleteTask}
					change={this.changeTaskStatus}
				/>
			</div>
		);
	}
}

export default App;
