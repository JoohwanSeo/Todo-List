import {useState} from "react";
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
   } 
]);




  return (
    <div>
      {/* <TodoForm setTodos={setTodos} /> */}
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer;
