import {Component, CORE_DIRECTIVES} from 'angular2/core';

@Component({
	selector: 'todo',
	templateUrl : './components/todo/todo.html',
	directives: [CORE_DIRECTIVES]
})

export class TodoComponent{
	public todos : string[];
	constructor() {
		this.todos = [];
	}
	add(newtodo : string): boolean{
		
	}
	remove(name: string) : void {
	 
	}
}