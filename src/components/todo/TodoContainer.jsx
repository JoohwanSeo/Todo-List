import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  // 작업 중인 항목
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "알고리즘",
      content: "30분씩 생각하고 문제 풀어보기", 
      isDone: false,
    },
    {
      id: 2,
      title: "React",
      content: "기본 개념 공부하기",
      isDone: true,
    },
  ]);
  // 배열을 순회하면서 isDone이 false 또는 true 인 값을 가져온다
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <div>
        <h1 className="todo-container">TODO</h1>
        <TodoForm setTodos={setTodos} />
        <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
        <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoContainer;
