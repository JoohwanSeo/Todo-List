import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div>
      <TodoForm />
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer;
