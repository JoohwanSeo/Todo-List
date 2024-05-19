const TodoItem = ({todo, setTodos}) => {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((el) => el.filter((todo) => todo.id !== id));
  };

  const completeTodo = () => {
    setTodos((el) => 
      el.map((todo) =>
       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <p>{content}</p>

      <div>
        <button onClick={completeTodo}>{isDone ? '취소' : '완료'}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
