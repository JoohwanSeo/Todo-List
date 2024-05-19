import TodoItem from "./TodoItem";

const TodoList = ({title, todos, setTodos }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="todo-item">
        {todos.map((todo) => (
          <div  key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos}/>
            {/* 프롭스 드릴링 */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
