import React from 'react';
import Task from './Task';
function TaskContainer() {
 const tasks = [
 { id: 1, title: 'Tarefa 1', description: 'Descrição da Tarefa 1' },
 { id: 2, title: 'Tarefa 2', description: 'Descrição da Tarefa 2' },
 ];
 return (
 <div>
 {tasks.map((task) => (
 <Task key={task.id} title={task.title} description={task.description} />
 ))}
 </div>
 );
}
export default TaskContainer;
